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
        browserSync.reload();
    })
    
    gulp.task('style', function() {
        gulp.src('./app/assets/styles/style.css')
        .pipe(postcss([cssImport, mixin, autoprefixer, nested, simpleVar]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));
    })
    
    gulp.task('watch', function() {
        
        browserSync.init({
            notify: false,
            server: {
                baseDir: 'app'
            }
        })
        
        watch('./app/index.html', function() {
            gulp.start('html');
        })
        
        watch('./app/assets/styles/style.css', function() {
            gulp.start('style');
        })
        
    })
    
    gulp.task('cssInject', function() {
        return gulp.src('./app/temp/styles/style.css')
            .pipe(browserSync.stream());
    })