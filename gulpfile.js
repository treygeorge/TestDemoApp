var gulp = require('gulp');
var karma = require('karma').server;
var http = require('http');
var ecstatic = require('ecstatic');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('start', function(done) {
    console.log('dirname: ', __dirname);
    http.createServer(
        ecstatic({ root: __dirname + '/' })
    ).listen(8080);

    console.log('Listening on :8080');
});

gulp.task('test', function () {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true,
        autoWatch: false,
        reporters: ['progress', 'osx']
    });
});
