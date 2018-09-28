// gulpfile.js
const gulp = require('gulp');
const fakeDB = require('./migrations/fakeDB');

gulp.task('fake', async () => {
  await fakeDB();
  process.exit();
});