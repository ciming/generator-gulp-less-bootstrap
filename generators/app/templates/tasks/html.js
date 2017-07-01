import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './lib/args';
import connect from 'gulp-connect';
import htmlmin from 'gulp-html-minifier'

gulp.task('html', () => {
  return gulp.src('app/*.html')
    .pipe(gulpif(args.production, htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(`dist`))
    .pipe(gulpif(args.watch, connect.reload()));
});