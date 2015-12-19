var gulp = require("gulp"),
    browserSync = require('browser-sync');

gulp.task('server', function () {  
  browserSync({
    port: 9000,
    server: {
      baseDir: 'Ls-web'
    }
  });
});

gulp.task('watch', function () {
  gulp.watch([
    'Ls-web/*.php',
  	'Ls-web/*.css',
    'Ls-web/*.html',
    'Ls-web/js/**/*.js',
    'Ls-web/css/**/*.css'
  ]).on('change', browserSync.reload);
});

gulp.task('default', ['server', 'watch']);