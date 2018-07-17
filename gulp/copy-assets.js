/*
  copy.js
  ===========
  copies images and javascript folders to public
*/

const gulp = require('gulp')
const config = require('./config.json')

gulp.task('copy-assets', function () {
  return gulp.src(['!' + config.paths.assets + 'sass{,/**/*}',
    config.paths.assets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-documentation-assets', function () {
  return gulp.src(['!' + config.paths.docsAssets + 'sass{,/**/*}',
    config.paths.docsAssets + '/**'])
  .pipe(gulp.dest(config.paths.public))
})

gulp.task('copy-v6-assets', function () {
  return gulp.src(['!app/v6/assets/sass{,/**/*}',
    'app/v6/assets' + '/**'])
  .pipe(gulp.dest(config.paths.public + '/v6'))
})
