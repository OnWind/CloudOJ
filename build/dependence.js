var gulp = require('gulp');

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

gulp.task('dependence:build-almond', function() {
  return gulp.src([
    'node_modules/almond/*.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('src/vender/'));
});

gulp.task('dependence', [
  'dependence:build-js',
  'dependence:build-requirejs',
  'dependence:build-css',
  'dependence:build-font',
  'dependence:build-almond'
]);
