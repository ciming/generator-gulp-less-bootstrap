import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './lib/args';
import connect from 'gulp-connect';

gulp.task('fonts', () => {
  return gulp.src('app/fonts/**/*.{woff,woff2,ttf,eot,svg}')
    .pipe(gulp.dest(`dist/fonts`))
    .pipe(gulpif(args.watch, connect.reload()));
});
