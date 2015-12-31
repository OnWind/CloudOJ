module.exports = function(config) {
  var gulp = require('gulp');
  var plumber = require('gulp-plumber'),
      livereload = require('gulp-livereload'),
      gulpif = require('gulp-if');
  gulp.task('source:javascript', function(){
    return gulp.src([
      'src/**/*.js'
    ], { base: 'src' })
      .pipe(gulpif(!config.is_production, plumber()))
      .pipe(gulp.dest('public/'))
      .pipe(gulpif(!config.is_production, livereload()));
  });
};
