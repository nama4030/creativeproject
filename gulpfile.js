const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');

function style() {
return gulp.src('./scss/**/*.scss')
.pipe(sourcemaps.init())
//default style indented based on nesting
.pipe(sass({outputStyle: 'nested'}))
//indented but not based on nesting
// .pipe(sass({outputStyle: 'expanded'}))
//rules are one line
// .pipe(sass({outputStyle: 'compact'}))
//production css (minified) one line no white space
// .pipe(sass({outputStyle: 'compressed'}))
.pipe(browserSync.stream())
.pipe(autoprefixer({
    cascade: false
}))
.pipe(sourcemaps.write('.'))
.pipe(gulp.dest('./css'));
}

function watch() { browserSync.init({
server: {
baseDir: './' }
});
gulp.watch('./scss/**/*.scss', {ignoreInitial: false}, style);
gulp.watch('./*.html').on('change', browserSync.reload);
gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
