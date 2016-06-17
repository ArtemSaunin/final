'use strict';

var gulp = require('gulp'),
  uglify = require('gulp-uglify'),
  cleanCSS = require('gulp-clean-css'),
  sass = require('gulp-sass'),
  watch = require('gulp-watch'),
  imagemin = require('gulp-imagemin'),
  del = require('del');

// Компиляция SCSS в CSS
gulp.task('sass', function() {
  return gulp.src('src/styles/style.scss')
  .pipe(sass())
  .pipe(gulp.dest('build/css/'));
});

// Минификация файла script.js
gulp.task('compress-js', function() {
  return gulp.src('src/js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

// Очистка папки build перед перезаписью файлов
gulp.task('clean', function() {
  return del('build');
});

// Копирование необходимых файлов из папки src в папку build
gulp.task('copy', function() {
    gulp.src(['src/js/classList.min.js', 'src/js/jquery.jcarousel-core.min.js', 'src/js/jquery.jcarousel-autoscroll.min.js', 'src/js/jquery.jcarousel-control.min.js', 'src/js/jquery.jcarousel-pagination.min.js'])
        .pipe(gulp.dest('build/js/'))
    gulp.src(['src/styles/reset.css', 'src/styles/style_ie8.css'])
        .pipe(gulp.dest('build/css/'))
    gulp.src('src/img/**/*')
        .pipe(gulp.dest('build/img/'))
    gulp.src('src/fonts/**/*')
        .pipe(gulp.dest('build/fonts/'))
});

// Сжатие изображений
gulp.task('images-min', function() {
  return gulp.src('build/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('build/img/'));
});

// Отслеживание изменений файлов *.scss и script.js
gulp.task('watch', function () {
  gulp.watch('src/styles/*.scss', ['sass']);
  gulp.watch('src/js/script.js', ['compress-js']);
});

// Установка операций по умолчанию при запуске команды gulp
gulp.task('default', ['sass', 'compress-js', 'copy', 'images-min', 'watch']);