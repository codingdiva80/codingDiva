//gulpfile.js

var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var minify = require('gulp-minify');

gulp.task('default', function(){
    // Default task code
    console.log('GULP GULP GULP')
  });

//script paths
var jsFiles = 'public/assets/js/min/**/*-min.js',
    jsDest = './public/dist/js';

gulp.task('scripts', function() {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.min.js'))
        .pipe(gulp.dest(jsDest));
});

gulp.task('compress', function() {
    gulp.src('public/assets/js/*.js')
      .pipe(minify({
          ext:{
              min:'-min.js'
          },
          exclude: ['tasks'],
          ignoreFiles: ['.combo.js', '-min.js']
      }))
      .pipe(gulp.dest('public/assets/js/min'))
  });

//css files
var cssFiles = 'public/assets/css/**/*.css',
    cssDest = 'public/dist/css';

gulp.task('styles', function() {
    return gulp.src(cssFiles)
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(cssDest));
});

gulp.task('default', ['compress', 'styles', 'scripts']);