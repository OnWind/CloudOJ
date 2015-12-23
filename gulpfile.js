var path = require('path');

var gulp = require('gulp'),
    jade = require('gulp-jade'),
    less = require('gulp-less'),
    plumber = require('gulp-plumber'),
    nodemon = require('gulp-nodemon'),
    livereload = require('gulp-livereload');

var config = require('./config');

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

gulp.task('production:source:less', function() {
  return gulp.src('src/**/*.less')
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'stylesheets')],
      plugins: [autoprefixPlugin, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('development:source:less', function() {
  return gulp.src('src/**/*.less')
    .pipe(plumber())
    .pipe(less({
      paths: [path.join(__dirname, 'src', 'stylesheets')],
      plugins: [autoprefixPlugin, cleanCSSPlugin]
    }))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});

gulp.task('development:source:jade', function(){
  return gulp.src([
    'src/**/*.jade'
  ], { base: 'src' })
    .pipe(plumber())
    .pipe(jade({
      locals: {
        config: config
      }
    }))
    .pipe(gulp.dest('public/'))
    .pipe(livereload());
});


gulp.task('production:source:jade', function(){
  return gulp.src([
    'src/**/*.jade'
  ], { base: 'src' })
    .pipe(jade({
      locals: {
        config: config
      }
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('development:source:javascript', function(){
  return gulp.src([
    'src/**/*.js'
  ], { base: 'src' })
    .pipe(plumber())
    .pipe(livereload());
});

gulp.task('production:source:javascript', function() {
  return gulp.src([
    'src/**/*.js'
  ], { base: 'src' })
    .pipe(gulp.dest('public/'));
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
  gulp.watch('src/**/*.jade', ['development:source:jade']);
  gulp.watch('src/stylesheets/**/*.less', ['development:source:less']);
  gulp.watch('src/**/*.js', ['development:source:javascript']);
});

gulp.task('production:source', [
  'production:source:less',
  'production:source:jade',
  'production:source:javascript'
], function() {
  return gulp.src([
    'public/production/**/*'
  ], { base: 'public/production' })
    .pipe(gulp.dest('public/'));
});

gulp.task('development:source', [
  'development:source:less',
  'development:source:jade',
  'development:source:javascript'
]);

gulp.task('development', [
  'development:source',
  'development:watch',
  'development:server'
]);

gulp.task('production', ['production:source']);
