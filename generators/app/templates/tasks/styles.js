import gulp from 'gulp'
import gutil from 'gulp-util';
import less from 'gulp-less';
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import cleanCSS from 'gulp-clean-css';
import args from './lib/args';
import connect from 'gulp-connect';


gulp.task('styles:bootstrap', function() {
  return gulp.src('app/bootstrap/less/bootstrap.less')
        .pipe(gulpif(args.sourcemaps, sourcemaps.init()))
        .pipe(less())
        .pipe(gulpif(args.production, cleanCSS()))
        .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
        .pipe(gulp.dest(`dist/styles/`))
        .pipe(gulpif(args.watch, connect.reload()));
})

gulp.task('styles:less',function() {
  return gulp.src('app/styles/*.less')
      .pipe(gulpif(args.sourcemaps, sourcemaps.init()))
      .pipe(less())
      .pipe(gulpif(args.production, cleanCSS()))
      .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
      .pipe(gulp.dest('dist/styles'))
      .pipe(gulpif(args.watch, connect.reload()));
})

gulp.task('styles', [
  'styles:less',
  'styles:bootstrap'
]);