var gulp = require('gulp');

var coffee = require('gulp-coffee');
var gutil  = require('gulp-util');
var compass = require('gulp-compass');
var cssmin = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

var paths = {
    coffee: ['js/main.coffee', 'js/**/!(main)*.coffee'],
    scss: ['css/scss/**/*.scss']
};

gulp.task('compass', function () {
    gulp.src(paths.scss)
        .pipe(compass({
            css: 'dist/css',
            sass: 'css/scss',
            image: 'images'
        }))
        .pipe(cssmin())
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('coffee', function() {
    gulp.src(paths.coffee)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(uglify())
        .pipe(concat('all.min.js'))
        .pipe(gulp.dest('./dist/js/'));
});

gulp.task('coffee_dev', function() {
    gulp.src(paths.coffee)
        .pipe(coffee({bare: true}).on('error', gutil.log))
        .pipe(concat('all.src.js'))
        .pipe(gulp.dest('./dist/js/'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.start('compass', 'coffee', 'coffee_dev');
    gulp.watch(paths.scss[0], ['compass']);
    gulp.watch(paths.coffee[0], ['coffee_dev', 'coffee']);
    gulp.watch(paths.coffee[1], ['coffee_dev', 'coffee']);
});

gulp.task('default', function() {
    gulp.start('compass', 'coffee', 'coffee_dev');
});