import gulp from 'gulp'
var gls = require('gulp-live-server');

gulp.task('server', ['build', 'serve', 'watch']);

gulp.task('serve', function () {
  var server = gls.static('/dist', 8888);
  server.start();
  gulp.watch(['dist/*'], function (file) {
    server.notify.apply(server, [file]);
  });
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