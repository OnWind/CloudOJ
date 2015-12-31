module.exports = function(config) {
  var gulp = require('gulp');
  var path = require('path');
  var less = require('gulp-less'),
      plumber = require('gulp-plumber'),
      livereload = require('gulp-livereload'),
      gulpif = require('gulp-if');
  var LessPluginCleanCSS = require('less-plugin-clean-css'),
      cleanCSSPlugin = new LessPluginCleanCSS({advanced: true});
  var LessPluginAutoPrefix = require('less-plugin-autoprefix'),
      autoprefixPlugin = new LessPluginAutoPrefix({browsers: ["last 2 versions"]});

  gulp.task('source:less', function() {
    return gulp.src('src/**/*.less')
      .pipe(gulpif(!config.is_production, plumber()))
      .pipe(gulpif(
        config.is_production,
        less({
          paths: [path.join(__dirname, 'src', 'stylesheets')],
          plugins: [autoprefixPlugin, cleanCSSPlugin]
        }),
        less({
          paths: [path.join(__dirname, 'src', 'stylesheets')]
        })
      ))
      .pipe(gulp.dest('public/'))
      .pipe(gulpif(!config.is_production, livereload()));
  });
};
