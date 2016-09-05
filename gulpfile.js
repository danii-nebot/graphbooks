var gulp          = require('gulp');
var notify        = require('gulp-notify');
var source        = require('vinyl-source-stream');
var browserify    = require('browserify');
var babelify      = require('babelify');
var ngAnnotate    = require('browserify-ngannotate');
var browserSync   = require('browser-sync').create();
var rename        = require('gulp-rename');
var templateCache = require('gulp-angular-templatecache');
var uglify        = require('gulp-uglify');
var merge         = require('merge-stream');
var sass          = require('gulp-sass');
var del           = require('del');
var concat        = require('gulp-concat');

// Where our files are located
var jsFiles       = 'src/js/**/*.js';
var viewFiles     = 'src/js/**/*.html';
var sassFiles     = ['src/assets/css/*.scss', 'src/js/**/*.scss'];
var faviconFile   = 'src/assets/favicon.png';
var loaderFile    = 'src/assets/loader.gif'
var distDir       = './build/';

var interceptErrors = function(error) {
  var args = Array.prototype.slice.call(arguments);

  // Send error to notification center with gulp-notify
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};

gulp.task('browserify', ['views'], function() {
  return browserify('./src/js/app.js')
      .transform(babelify, {presets: ["es2015"]})
      .transform(ngAnnotate)
      .bundle()
      .on('error', interceptErrors)
      //Pass desired output filename to vinyl-source-stream
      .pipe(source('main.js'))
      // Start piping stream to tasks!
      .pipe(gulp.dest(distDir));
});

gulp.task('clean', function () {
  return del([
    // we use a globbing pattern to match everything inside our dist folder
    distDir + '**/*'
    // ,
    // in case we dont want to delete a file, we negate the pattern, ie
    // '!dist/mobile/deploy.json'
  ]);
});

gulp.task('html', function() {
  return gulp.src("src/index.html")
      .on('error', interceptErrors)
      .pipe(gulp.dest(distDir));
});

gulp.task('favicon', function() {
  return gulp.src(faviconFile)
      .on('error', interceptErrors)
      .pipe(gulp.dest(distDir));
});

gulp.task('loader', function() {
  return gulp.src(loaderFile)
      .on('error', interceptErrors)
      .pipe(gulp.dest(distDir));
});

gulp.task('sass', function () {
  return gulp.src(sassFiles)
    .pipe(sass().on('error', interceptErrors))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./build'));
});

gulp.task('views', function() {
  return gulp.src(viewFiles)
      .pipe(templateCache({
        standalone: true
      }))
      .on('error', interceptErrors)
      .pipe(rename("app.templates.js"))
      .pipe(gulp.dest('./src/js/config/'));
});

// This task is used for building production ready
// minified JS/CSS files into the dist/ folder
gulp.task('build', ['clean', 'html', 'favicon', 'loader', 'sass', 'browserify'], function() {
  var html = gulp.src(distDir + 'index.html')
                 .pipe(gulp.dest(distDir));

  var css = gulp.src(distDir+'main.css')
                .pipe(gulp.dest(distDir));

  var js = gulp.src(distDir+'main.js')
               .pipe(uglify())
               .pipe(gulp.dest(distDir));

  return merge(html, css, js);
});

gulp.task('default', ['clean', 'html', 'favicon', 'loader', 'sass', 'browserify'], function() {

  browserSync.init([distDir+'**/**.**'], {
    server: distDir,
    port: 4000,
    notify: false,
    ui: {
      port: 4001
    }
  });

  gulp.watch("src/index.html", ['html']);
  gulp.watch(viewFiles, ['views']);
  gulp.watch(sassFiles, ['sass']);
  gulp.watch(jsFiles, ['browserify']);
});
