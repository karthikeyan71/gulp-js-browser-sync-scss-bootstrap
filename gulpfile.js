
var gulp = require('gulp');

var sass = require('gulp-sass');

var browserSync = require('browser-sync').create();

gulp.task('converter', function()
         {
        
    return gulp.src("app/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css/"))
        .pipe(browserSync.reload({
            stream: true
        }));
    
});


gulp.task('browserSync', function()
         {
   browserSync.init({
       server:{
           baseDir:'app'
       }
   }) 
});


gulp.task("runner", ['converter', 'browserSync'], function()
         {
    gulp.watch('app/scss/*.scss', ['converter']);
    gulp.watch('app/*.html', browserSync.reload);
    gulp.watch('app/js/*.js', browserSync.reload);
});
