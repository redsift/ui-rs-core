'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var spawn = require('child_process').spawn;

gulp.task('build', function(cb) {
  var flags = [
    './node_modules/@redsift/redsift-bundler/bin/bundle.js',
    '-c',
    './bundle.config.js'
  ];
  var cmd = spawn('node', flags, {stdio: 'inherit'});
  return cmd.on('close', cb);
});

var serveDirs = [ './examples', './dist' ];

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: serveDirs,
            directory: true
        }
    });
});

gulp.task('serve', [ 'browser-sync' ], function() {
    gulp.watch(['./src/**/*.js', './src/**/*.styl'], ['build']);
    gulp.watch('./dist/**/*.js').on('change', () => browserSync.reload('*.js'));
    gulp.watch('./dist/**/*.css').on('change', () => browserSync.reload('*.css'));
    gulp.watch('./examples/*.html').on('change', () => browserSync.reload('*.html'));
});

gulp.task('default', [ 'serve' ]);
