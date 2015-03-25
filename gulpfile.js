var gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	jsFiles = [
		'app/bower_components/angular/angular.min.js',
		'app/bower_components/angular-animate/angular-animate.min.js',
		'app/bower_components/angular-aria/angular-aria.min.js',
		'app/bower_components/angular-material/angular-material.min.js'
	];

gulp.task('default', ['clean', 'copyjs'], function() {
  // place code for your default task here
});

gulp.task('clean', function() {
	return gulp.src('build', { read: false } ).pipe(clean());
});

gulp.task('copyjs', function() {
	return gulp.src(jsFiles)
		.pipe(concat('build.js'))
		.pipe(gulp.dest('build/js'));
});