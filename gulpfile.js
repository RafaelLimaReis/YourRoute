var gulp = require('gulp');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var notify = require('gulp-notify');
var uglify = require('gulp-uglify');

var paths = {
  sass: ['./scss/**/*.scss'],
    js: ['./www/js/**/*.js']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
  gulp.src([
    './scss/ionic.app.scss',
    'node_modules/sweetalert/dist/sweetalert.css'
  ])
    .pipe(sass())
    .pipe(concat('app.css'))
    .on('error', sass.logError)
    .pipe(gulp.dest('./www/css/'))
    .pipe(minifyCss({
      keepSpecialComments: 0
    }))
    .pipe(rename({ extname: '.min.css' }))
    .pipe(gulp.dest('./www/css/'))
    .on('end', done);
});

gulp.task('js', function(){
  gulp.src([
    './www/js/app.js',
    './www/js/routes.js',
    './www/js/controllers/*.js'
  ])
  .pipe(concat('primary.js'))
  .pipe(gulp.dest('./www/js/'));
})

gulp.task('libsJS', function(){
  gulp.src([
    'node_modules/sweetalert/dist/sweetalert.min.js',
    'node_modules/ng-cordova/dist/ng-cordova.js',
    'node_modules/ionic-modal-select/dist/ionic-modal-select.js',
    'node_modules/ionic-timepicker/dist/ionic-timepicker.bundle.min.js'
  ])
  .pipe(concat('libs.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./www/js/'))
  .pipe(notify('Libs automatizadas com sucesso'));

})



gulp.task('watch', ['sass','js'], function() {
  gulp.watch(paths.sass, ['sass'], paths.js, ['js']);
});




gulp.task('install', ['git-check'], function() {
  return bower.commands.install()
    .on('log', function(data) {
      gutil.log('bower', gutil.colors.cyan(data.id), data.message);
    });
});

gulp.task('git-check', function(done) {
  if (!sh.which('git')) {
    console.log(
      '  ' + gutil.colors.red('Git is not installed.'),
      '\n  Git, the version control system, is required to download Ionic.',
      '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
      '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
    );
    process.exit(1);
  }
  done();
});
