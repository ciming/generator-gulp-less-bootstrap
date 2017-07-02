import gulp from 'gulp'
import args from './lib/args'
import connect from 'gulp-connect';
import opn from 'opn';

gulp.task('server', ['build','watch']);

gulp.task('watch', function () {
  if (!args.watch) return ;
  connect.server({
    port: args.port,
    root: './dist',
    livereload: true
  });
  // Start livereload server
  gulp.watch('app/styles/**/*.less', ['styles:less']);
  gulp.watch('app/bootstrap/less/*.less', ['styles:bootstrap']);
  gulp.watch('app/script/**/*.js', ['script:js']);
  gulp.watch('app/bootstrap/script/*.js', ['script:bootstrap']);
  gulp.watch('app/*.html', ['html']);
  gulp.watch('app/fonts/**/*.{woff,woff2,ttf,eot,svg}', ['fonts']);
  gulp.watch('app/images/**/*', ['images']);
  setTimeout(()=>{
    opn('http://localhost:'+ args.port);
  },1000)

})
