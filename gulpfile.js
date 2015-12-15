var gulp = require('gulp'),
    jade = require('gulp-jade');

gulp.task('build_dep_js', function() {
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

gulp.task('build_dep_requirejs', function() {
  return gulp.src([
    'node_modules/requirejs/*.js'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('build_dep_css', function() {
  return gulp.src([
    'node_modules/angular-material/*.min.css'
  ], { base: 'node_modules' })
    .pipe(gulp.dest('public/static'));
});

gulp.task('dependence', [
  'build_dep_js',
  'build_dep_requirejs',
  'build_dep_css'
]);

gulp.task('jade', function(){
  return gulp.src([
    'src/**/*.jade'
  ], { base: 'src' })
    .pipe(jade({
      locals: {}
    }))
    .pipe(gulp.dest('public/'));
});

gulp.task('watch', function () {
  gulp.watch('src/**/*.jade', ['jade']);
});

gulp.task('default', ['dependence', 'jade']);
gulp.task('dev', ['jade', 'watch']);
