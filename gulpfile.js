var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

// Static server
gulp.task('serve', function() {
    browserSync.init({
        server: "./"
    });
    gulp.watch("Lista-Angular/index.html").on('change', reload);
    gulp.watch("Lista-Angular/views/*.html").on('change', reload);
    gulp.watch("Lista-Angular/css/style.css").on('change', reload);
});

