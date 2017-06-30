import gulp from 'gulp'
import opn from 'opn'
import args from './lib/args'
import gls from 'gulp-live-server';

gulp.task('server', ['build', 'serve', 'watch']);

gulp.task('serve', function () {
  var server = gls.static('/dist', Number(args.port));
  server.start();
  gulp.watch(['dist/*'], function (file) {
    server.notify.apply(server, [file]);
  });
  opn('http://localhost:'+ args.port);
});

gulp.task('watch', function () {
  gulp.watch('app/styles/*.less', ['styles:less']);
  gulp.watch('app/bootstrap/less/*.less', ['styles:bootstrap']);
  gulp.watch('app/script/**/*.less', ['styles:js']);
  gulp.watch('app/bootstrap/script/*.js', ['styles:bootstrap']);
  gulp.watch('app/html/**/*.html', ['html']);
  gulp.watch('app/fonts/**/*.{woff,woff2,ttf,eot,svg}', ['fonts']);
  gulp.watch('app/images/**/*', ['images'])
})