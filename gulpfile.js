var gulp = require('gulp');
var shell = require('gulp-shell');
var browserSync = require('browser-sync').create();
var imagemin = require('gulp-imagemin');

// Task for building blog when something changed:
gulp.task('build', shell.task(['bundle exec jekyll build --watch']));
// Or if you don't use bundle:
// gulp.task('build', shell.task(['jekyll build --watch']));

// Task for serving blog with Browsersync
gulp.task('serve', function () {
    browserSync.init({
      server: {baseDir: '_site/'},
      open: false,
	  port: 80
    });
    // Reloads page when some of the already built files changed:
    gulp.watch('_site/**/*.*').on('change', browserSync.reload);
});
// Compress Images
gulp.task('images', function() {
  gulp.src('assets/img/**/**/*')
    .pipe(imagemin({
      interlaced: true,
      progressive: true,
      optimizationLevel: 8
  }))
    .pipe(gulp.dest('_site/assets/img/'))
    .pipe(browserSync.stream());
});
gulp.task('default', ['build', 'serve']);
