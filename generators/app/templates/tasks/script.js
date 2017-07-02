import gulp from 'gulp'
import concat from 'gulp-concat'
import sourcemaps from 'gulp-sourcemaps';
import gulpif from 'gulp-if';
import args from './lib/args';
import connect from 'gulp-connect';
import uglify from 'gulp-uglify';

gulp.task('script:bootstrap', function() {
  return gulp.src(getScript([
    'transition.js',
    'alert.js',
    'button.js',
    'carousel.js',
    'collapse.js',
    'dropdown.js',
    'modal.js',
    'tooltip.js',
    'popover.js',
    'scrollspy.js',
    'tab.js',
    'affix.js'
  ]))
    .pipe(concat('bootstrap.js'))
    .pipe(gulpif(args.production, uglify()))
    .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(`dist/script/vendor`))
    .pipe(gulpif(args.watch, connect.reload()));

})

function getScript(files) {
  return files.map(item => {
    return 'app/bootstrap/js/' + item
  })
}

gulp.task('script:js', function() {
  return gulp.src('app/script/**/*.js')
    .pipe(gulpif(args.production, uglify()))
    .pipe(gulpif(args.sourcemaps, sourcemaps.write()))
    .pipe(gulp.dest(`dist/script/`))
    .pipe(gulpif(args.watch, connect.reload()));
})

gulp.task('script', [
  'script:bootstrap',
  'script:js'
]);
