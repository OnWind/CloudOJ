var path = require('path');
var minimist = require('minimist');

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    gulpif = require('gulp-if'),
    gutil = require('gulp-util');

var config = require('./config');

var options = minimist(process.argv.slice(2), {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
});

config.is_production = (options.env === 'production');
config.package = require('./package.json');

if(config.is_production){
  gutil.log(gutil.colors.blue("Running in production mode"));
} else {
  gutil.log(gutil.colors.blue("Running in development mode"));
}

require('./build/dependence');
require('./build/less')(config);
require('./build/jade')(config);
require('./build/javascript')(config);
require('./build/images')(config);
require('./build/source')(config);

gulp.task('development:server', function() {
  nodemon({
    verbose: false,
    script: './bin/www',
    ext: 'js',
    watch: './routes',
    env: {
        'DEBUG': 'cloudoj:*',
        'NODE_ENV': 'development'
    },
    stdout: true
  });
});

gulp.task('development:watch', function () {
  livereload.listen({
    quiet: true
  });
  gulp.watch('src/**/*.jade', ['source:jade']);
  gulp.watch('src/**/*.less', ['source:less']);
  gulp.watch('src/**/*.js', ['source:javascript']);
});

gulp.task('watch', [
  'source',
  'development:watch',
  'development:server'
]);

gulp.task('build', ['source']);

gulp.task('help', function() {
  console.log("CloudOJ v" + config.package.version);
  console.log("Building CloudOJ via the following commands:");
  console.log("gulp build                     Build production version");
  console.log("gulp denpendence               Build Dependencies");
  console.log("gulp watch --env development   Watch for changes and run development server");
});
