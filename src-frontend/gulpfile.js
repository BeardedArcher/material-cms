var gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssMinify = require('gulp-minify-css'),

	build_dir = '../public',
	
	cssFiles = [
		'app/bower_components/angular-material/angular-material.css',
		'app/assets/**/*.css'
	],
	jsFiles = [
		'app/bower_components/jquery/dist/jquery.min.js',
		'app/bower_components/angular/angular.min.js',
		'app/bower_components/angular-animate/angular-animate.min.js',
		'app/bower_components/angular-aria/angular-aria.min.js',
		'app/bower_components/angular-material/angular-material.min.js',
		'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'node_modules/restangular/node_modules/lodash/dist/lodash.min.js',
		'node_modules/restangular/dist/restangular.min.js',
		'app/app.js',
		'app/src/**/*.js'
	],
	otherFiles = [
		'app/index.html',
		'app/index.php',
		'app/favicon.ico',
		'app/robots.txt'
	];

gulp.task('default', ['clean', 'copyjs', 'copyotherFiles', 'cssminify', 'htaccess'], function() {

});

gulp.task('clean', function() {
	return gulp.src('build', { read: false } ).pipe(clean());
});

gulp.task('copyjs', ['clean'], function() {
	return gulp.src(jsFiles)
		.pipe(concat('build.js'))
		.pipe(gulp.dest(build_dir + '/js'));
});

gulp.task('copyotherFiles', ['clean'], function() {
	return gulp.src(otherFiles)
		.pipe(gulp.dest(build_dir));
});

gulp.task('cssminify', ['clean'], function() {
	return gulp.src(cssFiles)
		.pipe(cssMinify())
		.pipe(concat('style.css'))
		.pipe(gulp.dest(build_dir));
});

gulp.task('htaccess', ['clean'], function() {
	return gulp.src('app/.htaccess')
		.pipe(gulp.dest(build_dir));
})