var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    cssImport = require('postcss-import'),
    mixin = require('postcss-mixins'),
    nested = require('postcss-nested'),
    simpleVar = require('postcss-simple-vars'),
    autoprefixer = require('autoprefixer'),
    browserSync = require('browser-sync').create();
    
    gulp.task('default', function() {
        console.log('this is a default message....');
    })
    
    gulp.task('html', function() {
        console.log('html file has been updated...');
    })
    
    gulp.task('style', function() {
        console.log('style sheet has been modified...');
    })
    
    gulp.task('watch', function() {
        
        watch('./app/index.html', function() {
            gulp.start('html');
        })
        
        watch('./app/assets/styles/style.css', function() {
            gulp.start('style');
        })
        
    })