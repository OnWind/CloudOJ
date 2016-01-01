module.exports = function(config) {
  var gulp = require('gulp');
  var gulpif = require('gulp-if');
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
};
