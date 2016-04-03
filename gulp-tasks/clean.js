var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
$.clean = require('gulp-clean');

var jsDst = './dist/';
    
module.exports = function () {
  return gulp.src(jsDst, {read: false})
        .pipe($.clean({force: true}));
};