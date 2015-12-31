module.exports = function(config) {
  var gulp = require('gulp');
  var plumber = require('gulp-plumber'),
      livereload = require('gulp-livereload'),
      gulpif = require('gulp-if');
  gulp.task('source:images', function() {
    return gulp.src([
      'src/images/**/*'
    ], { base: 'src' })
      .pipe(gulp.dest('public/'));
  });
};
