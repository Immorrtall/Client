var gulp = require('gulp');
var coffee = require('gulp-coffee');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var mocha = require('gulp-mocha');
//var browserSync = require('browser-sync');
//
//var reload = browserSync.reload;
var paths ={
    css: ['source/assets/css/style.css'],
    script: ['app/controllers/change_controller.coffee'],
    js: ['js/app/controllers/*.js']
};

gulp.task('mincss', function(){
    return gulp.src(paths.css)
        .pipe(csso())
        .pipe(gulp.dest('new folder'));
});

gulp.task('scripts', function(){
    return gulp.src(paths.script)
        .pipe(coffee())
        .pipe(gulp.dest('new folder'));
});

gulp.task('jsTest', function(){
    return gulp.src(paths.js)
        .pipe(jshint())
        .pipe(gulp.dest('new folder'));
});

//gulp.task('mochaTest', function(){
//    return gulp.src(paths.js)
//        .pipe(mocha())
//        .once('error', function(){
//            console.log("ERROR");
//            process.exit(1);
//        })
//        .once('end', function(){
//            console.log("HAPPY END");
//            process.exit();
//        })
//});

gulp.task('watcher', function(){
    gulp.run('mincss');
    gulp.run('scripts');
    gulp.run('jsTest');

    gulp.watch(paths.css, function(){
        gulp.run('mincss');
    });
    gulp.watch(paths.script, function(){
        gulp.run('scripts');
    });
    gulp.watch(paths.js, function(){
        gulp.run('jsTest');
    });
    //gulp.run('mochaTest');
});

gulp.task('default', ['watcher']);