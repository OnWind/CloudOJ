var path = require('path');

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('dependence:build-js', function() {
  return gulp.src([
    'bower_components/angular/*.min.js',
    'bower_components/angular-material/*.min.js',
    'bower_components/angular-aria/*.min.js',
    'bower_components/angular-animate/*.min.js',
    'bower_components/angular-resource/*.min.js',
    'bower_components/angular-route/*.min.js',
    'bower_components/angular-sanitize/*.min.js',
    'bower_components/angular-translate/*.min.js'
  ], { base: 'bower_components' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence:build-font', function() {
  return gulp.src([
    'bower_components/material-design-icons/iconfont/*.*'
  ], { base: 'bower_components' })
    .pipe(gulp.dest('public/static'));

});

gulp.task('dependence:build-requirejs', function() {
  return gulp.src([
    'bower_components/requirejs/*.js'
  ], { base: 'bower_components' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence:build-css', function() {
  return gulp.src([
    'bower_components/angular-material/*.min.css'
  ], { base: 'bower_components' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence', [
  'dependence:build-js',
  'dependence:build-requirejs',
  'dependence:build-css',
  'dependence:build-font'
]);

gulp.task('source:less', function() {
  return gulp.src('src/**/*.less')
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'stylesheets')],
      plugins: [autoprefixPlugin, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

gulp.task('source:jade', function(){
  return gulp.src([
    'src/**/*.jade'
  ], { base: 'src' })
    .pipe(plumber())
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

gulp.task('source:javascript', function(){
  return gulp.src([
    'src/**/*.js'
  ], { base: 'src' })
    .pipe(plumber())
    .pipe(livereload());
});

gulp.task('development:server', function() {
  nodemon({
    verbose: true,
    script: './bin/www',
    ext: 'js',
    watch: './routes',
    env: {
        'DEBUG': 'cloudoj:*'
    }
  })
  .on('restart', function () {
    console.log('Server restarted.');
  });
});

gulp.task('development:watch', function () {
  livereload.listen();
  gulp.watch('src/**/*.jade', ['source:jade']);
  gulp.watch('src/stylesheets/**/*.less', ['source:less']);
  gulp.watch('src/**/*.js', ['source:javascript']);
});

gulp.task('production:javascript', function() {
  return gulp.src([
    'src/**/*.js'
  ], { base: 'src/' })
    .pipe(gulp.dest('public/'));
});

gulp.task('production:source', ['source', 'production:javascript'], function() {
  return gulp.src([
    'public/production/**/*'
  ], { base: 'public/production' })
    .pipe(gulp.dest('public/'));
});

gulp.task('source', ['source:less', 'source:jade']);
gulp.task('default', ['dependence', 'source']);
gulp.task('dev', ['source', 'development:watch', 'development:server']);
gulp.task('production', ['production:source']);
