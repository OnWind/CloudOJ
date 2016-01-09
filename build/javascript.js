module.exports = function(config) {
  var gulp = require('gulp');
  var plumber = require('gulp-plumber'),
      livereload = require('gulp-livereload'),
      gulpif = require('gulp-if'),
      uglify = require('gulp-uglify'),
      amdOptimize = require('gulp-amd-optimizer');
  gulp.task('source:javascript', function(){
    return gulp.src([
      'src/**/*.js'
    ], { base: 'src' })
      .pipe(gulpif(!config.is_production, plumber()))
      .pipe(gulpif(config.is_production, amdOptimize(config.amdConfig)))
      .pipe(gulpif(config.is_production, uglify()))
      .pipe(gulp.dest('public/'))
      .pipe(gulpif(!config.is_production, livereload()));
  });
};
