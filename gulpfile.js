var gulp = require('gulp');
var sass = require('gulp-sass');
var twig = require('gulp-twig');

gulp.task('sass', function() {
  	// place code for your default task here
	return gulp.src('./node_modules/bootstrap/scss/bootstrap.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch('./node_modules/bootstrap/scss/bootstrap.scss', ['sass']);
});

gulp.task('twig', function() {
	return gulp.src('content/**/*.twig')
		.pipe(twig())
		.pipe(gulp.dest('./dist'));
});