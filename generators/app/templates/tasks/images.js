import gulp from 'gulp';
import gulpif from 'gulp-if';
import imagemin from 'gulp-imagemin';
import connect from 'gulp-connect';
import args from './lib/args';

gulp.task('images', () => {

  return gulp.src('app/images/**/*')
    .pipe(gulpif(args.production, imagemin()))
    .pipe(gulp.dest(`dist/images`))
    .pipe(gulpif(args.watch, connect.reload()));
});