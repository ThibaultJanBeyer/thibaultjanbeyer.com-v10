var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.changed = require('gulp-changed');
$.htmlhint = require("gulp-htmlhint");
$.htmlmin = require('gulp-htmlmin');
$.plumber = require('gulp-plumber');
$.size = require('gulp-size');

var htmlSrc = './src/*.html',
    htmlDst = './dist';

module.exports = function () {
  return gulp.src(htmlSrc)
    .pipe($.changed(htmlDst))
    .pipe($.plumber({
      errorHandler: function (err) {
        console.log(err);
        this.emit('end');
      }
    }))
    .pipe($.htmlhint())
    .pipe($.htmlmin({collapseWhitespace: true}))
    .pipe($.size({title: 'HTML'}))
    .pipe(gulp.dest(htmlDst));
};