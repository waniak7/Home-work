var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require ('gulp-autoprefixer'),
    imagemin = require('gulp-imagemin');

gulp.task('styles', function () {
    return gulp.src('./src/sass/main.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./src/css/'));
})

gulp.task('watch', function () {
    gulp.watch('./src/sass/main.scss', ['styles']);
})

gulp.task('img', function () {
    return gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/images'));
})

gulp.task('build', ['img'], function () {
    var buildCss = gulp.src([
        './src/css/reset.css',
        './src/css/main.css'])
        .pipe(gulp.dest('dist/css'))

    var buildHtml = gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
})

