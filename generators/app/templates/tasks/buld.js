import gulp from 'gulp';
import gulpSequence from 'gulp-sequence'

gulp.task('build', gulpSequence(
  'clean', [
    'styles',
    'fonts',
    'images',
    'html',
    'script'
  ]
));