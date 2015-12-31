module.exports = function(config) {
  var gulp = require('gulp');
  var jade = require('gulp-jade'),
      plumber = require('gulp-plumber'),
      livereload = require('gulp-livereload'),
      gulpif = require('gulp-if');
  gulp.task('source:jade', function(){
    return gulp.src([
      'src/**/*.jade'
    ], { base: 'src' })
      .pipe(gulpif(!config.is_production, plumber()))
      .pipe(jade({
        locals: {
          config: config
        }
      }))
      .pipe(gulp.dest('public/'))
      .pipe(gulpif(!config.is_production, livereload()));
  });
};
