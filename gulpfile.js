var gulp = require('gulp');
//var sass = require('gulp-sass');
var browserify = require('gulp-browserify');

gulp.task('default', ['html', 'partials', 'js', 'css']);

gulp.task('html', function () {
    return gulp.src('./*.html')
        .pipe(gulp.dest('./public'));
});

gulp.task('partials', function() {
   return gulp.src('./partials/*.html')
        .pipe(gulp.dest('./public/partials'));
});

gulp.task('css', function () {
    return gulp.src('./style.css')
//        .pipe(sass())
        .pipe(gulp.dest('./public/css'));
});

gulp.task('js', function () {
    return gulp.src('./js/app.js')
        .pipe(browserify())
        .pipe(gulp.dest('./public/js'));
});

gulp.task('watch', function () {
    gulp.watch('./*.html', ['html']);
    gulp.watch('./*.css', ['css']);
    gulp.watch('./js/*.js', ['js']);
});