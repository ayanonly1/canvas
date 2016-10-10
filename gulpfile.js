'use strict';
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var jsdoc = require('gulp-jsdoc3');
var closureCompiler = require('google-closure-compiler').gulp();

gulp.task('stitch', ['lint'], function() {
    return gulp.src('./scripts/*.js', { base: './' })
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(closureCompiler({
            compilation_level: 'SIMPLE',
            warning_level: 'VERBOSE',
            language_in: 'ECMASCRIPT6_STRICT',
            language_out: 'ECMASCRIPT5_STRICT',
            jscomp_off: 'nonStandardJsDocs',
            output_wrapper: ';(function(){\n%output%\n})();',
            js_output_file: 'canvas.min.js'
        }))
        .pipe(sourcemaps.write('/'))
        .pipe(gulp.dest('./dist/js'));
});

gulp.task('lint', function() {
    return gulp.src(['./scripts/*.js', '!node_modules/**', '!bower_components/**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('doc', function(cb) {
    gulp.src(['README.md', './scripts/*.js'], { read: 'false' })
        .pipe(jsdoc(cb));
});

gulp.task('watch', function() {
    gulp.watch('./scripts/*.js', ['stitch']);
});

gulp.task('default', ['stitch', 'watch']);
