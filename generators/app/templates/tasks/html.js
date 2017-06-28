import gulp from 'gulp';
import gulpif from 'gulp-if';
import args from './lib/args';
import htmlmin from 'gulp-html-minifier'

gulp.task('html', () => {
  return gulp.src('app/html/*.html')
    .pipe(gulpif(args.production, htmlmin({collapseWhitespace: true})))
    .pipe(gulp.dest(`dist`))
});