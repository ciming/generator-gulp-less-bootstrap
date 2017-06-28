import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './lib/args';

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*.{woff,woff2,ttf,eot,svg}')
    .pipe(gulp.dest(`dist/fonts`))
});
