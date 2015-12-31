var path = require('path');
var minimist = require('minimist');

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload'),
    gulpif = require('gulp-if');

var config = require('./config');

var options = minimist(process.argv.slice(2), {
  string: 'env',
  default: { env: process.env.NODE_ENV || 'production' }
});

config.is_production = (options.env === 'production');

require('./build/dependence');
require('./build/less')(config);
require('./build/jade')(config);
require('./build/javascript')(config);
require('./build/images')(config);

gulp.task('source', [
  'source:less',
  'source:jade',
  'source:javascript',
  'source:images'
], function() {
  return gulp.src([
    'public/production/**/*'
  ], { base: 'public/production' })
    .pipe(gulpif(config.is_production, gulp.dest('public/')));
});

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
    stdout: false
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
