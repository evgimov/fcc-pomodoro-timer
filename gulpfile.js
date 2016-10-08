var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

// compile sass files
gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('css/'))
      .pipe(browserSync.reload({
        stream: true
      }))
});

// watch files for changes and reload
gulp.task('serve', function() {
  browserSync({
    server: {
      baseDir: './'
    }
  });

  gulp.watch('sass/**/*.scss', ['styles']); 
  gulp.watch(['*.html', 'css/*.css', 'js/*.js'], reload);
});
