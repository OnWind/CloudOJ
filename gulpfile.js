var path = require('path');

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber');

var LessPluginCleanCSS = require('less-plugin-clean-css'),
    cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

gulp.task('dependence:build-js', function() {
  return gulp.src([
    'node_modules/angular/*.min.js',
    'node_modules/angular-material/*.min.js',
    'node_modules/angular-aria/*.min.js',
    'node_modules/angular-animate/*.min.js',
    'node_modules/angular-resource/*.min.js',
    'node_modules/angular-route/*.min.js',
    'node_modules/angular-sanitize/*.min.js',
    'node_modules/angular-translate/dist/*.min.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence:build-font', function() {
  return gulp.src([
    'node_modules/material-design-icons/iconfont/*.*'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));

});

gulp.task('dependence:build-requirejs', function() {
  return gulp.src([
    'node_modules/requirejs/*.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence:build-css', function() {
  return gulp.src([
    'node_modules/angular-material/*.min.css'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence', [
  'dependence:build-js',
  'dependence:build-requirejs',
  'dependence:build-css',
  'dependence:build-font'
]);

gulp.task('source:less', function() {
  return gulp.src('src/stylesheets/**/*.less')
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'stylesheets')],
      plugins: [autoprefixPlugin, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('public/stylesheets/'));
});

gulp.task('source:jade', function(){
  return gulp.src([
    'src/**/*.jade'
  ], { base: 'src' })
    .pipe(plumber())
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.jade', ['source:jade']);
  gulp.watch('src/stylesheets/**/*.less', ['source:less']);
});

gulp.task('source', ['source:less', 'source:jade']);
gulp.task('default', ['dependence', 'source']);
gulp.task('dev', ['source', 'watch']);
