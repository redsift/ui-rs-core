'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var path = require('path');
var RSBundler = require('@redsift/redsift-bundler');

var bundleConfig = require('./bundle.config.js');

gulp.task('bundle-js', RSBundler.loadTask(gulp, 'bundle-js', bundleConfig));
gulp.task('bundle-css', RSBundler.loadTask(gulp, 'bundle-css', bundleConfig));

gulp.task('build', ['bundle-js', 'bundle-css'], function(cb) {
  console.log('\n* Bundling complete:\n');
  RSBundler.printBundleSummary(bundleConfig);
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

gulp.task('watch', function() {
    gulp.watch(['./src/**/*.js', './src/**/*.styl'], ['build']);
    gulp.watch('./dist/**/*.js').on('change', () => browserSync.reload('*.js'));
    gulp.watch('./dist/**/*.css').on('change', () => browserSync.reload('*.css'));
    gulp.watch('./examples/*.html').on('change', () => browserSync.reload('*.html'));
});

gulp.task('serve', [ 'build', 'browser-sync' ], function() {
    gulp.watch(['./src/**/*.js', './src/**/*.styl'], ['build']);
    gulp.watch('./dist/**/*.js').on('change', () => browserSync.reload('*.js'));
    gulp.watch('./dist/**/*.css').on('change', () => browserSync.reload('*.css'));
    gulp.watch('./examples/*.html').on('change', () => browserSync.reload('*.html'));
});

gulp.task('default', [ 'build', 'serve', 'watch' ]);
