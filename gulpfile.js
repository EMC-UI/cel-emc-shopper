'use strict';

const ngdocs = require('gulp-ngdocs')
const gulp = require('gulp')


gulp.task('docs', () => {
  var options = {
    scripts: ['dist/main.bundle.js'],
    html5Mode: true,
    startPage: '',
    title: "CEL/EMC-UI Reference",
    titleLink: "/api"
  }
  return gulp.src('src/app/**/*.ts')
    .pipe(ngdocs.process(options))
    .on('error', e => {
    console.log('caught error',e)
})
.pipe(gulp.dest('./docs'))
})
