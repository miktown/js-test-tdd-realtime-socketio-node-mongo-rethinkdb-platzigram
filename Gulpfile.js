var gulp = require('gulp')
var sass = require('gulp-sass')
var rename = require('gulp-rename')
var babel = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('styles', function () {
  gulp
    .src('index.scss')
    .pipe(sass())
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'))
})

gulp.task('assets', function () {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'))
})

function compile (watch) {
  var bundle = watchify(browserify('./src/index.js', {debug: watch}))

  function rebundle () {
    bundle
      .transform(babel)
      .bundle()
      .on('error', function (err) { console.log(err); this.emit('end') })
      .pipe(source('index.js'))
      .pipe(rename('app.js'))
      .pipe(gulp.dest('public'))
  }

  rebundle()

  if (watch) {
    bundle.on('update', function (ids) {
      console.log('--> file(s): ', ids)
      rebundle()
    })

    bundle.on('log', function (msg) {
      console.log('-->', msg)
      console.log('watching changes in code...')
    })
  }
}

gulp.task('build', function () { return compile(false) })

gulp.task('watch', function () { return compile(true) })

gulp.task('default', ['styles', 'assets', 'build'])
