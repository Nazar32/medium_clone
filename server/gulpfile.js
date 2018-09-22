// gulpfile.js
const gulp = require('gulp');
const fakeDB = require('./migrations/fakeDB');

gulp.task('dummy', () => {
  console.log('Gulp js is running');
});

gulp.task('fake', async () => {
  await fakeDB();
});