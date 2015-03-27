var gulp = require('gulp'),
	clean = require('gulp-clean'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	cssMinify = require('gulp-minify-css'),
	watch = require('gulp-watch'),
	install = require('gulp-install'),
	livereload = require('gulp-livereload'),
	tasks = { 
		copyjs: function() {
			return gulp.src(jsFiles)
				.pipe(concat('build.js'))
				.pipe(gulp.dest(build_dir + '/js'))
				.pipe(livereload());
		},
		clean: function() {
			return gulp.src('build', { read: false } ).pipe(clean());
		},
		copyOtherFiles: function() {
			return gulp.src(otherFiles)
				.pipe(gulp.dest(build_dir))
				.pipe(livereload());
		},
		cssminify: function() {
			return gulp.src(cssFiles)
				.pipe(cssMinify())
				.pipe(concat('style.css'))
				.pipe(gulp.dest(build_dir))
				.pipe(livereload());
		},
		htaccess: function() {
			return gulp.src('app/.htaccess')
				.pipe(gulp.dest(build_dir))
				.pipe(livereload());
		}
	},
	

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

gulp.task('watch', ['install'], function() {
	livereload({start: true});
	livereload.listen();
	watch(cssFiles, tasks.cssminify);
	watch(jsFiles, tasks.copyjs);
	watch(otherFiles, tasks.copyOtherFiles);
	watch('app/.htaccess', tasks.htaccess);
});

gulp.task('install', function() {
	gulp.src(['./bower.json', './package.json']).pipe(install());
});

gulp.task('clean', tasks.clean);

gulp.task('copyjs', ['clean'], tasks.copyjs);

gulp.task('copyotherFiles', ['clean'], tasks.copyOtherFiles);

gulp.task('cssminify', ['clean'], tasks.cssminify);

gulp.task('htaccess', ['clean'], tasks.htaccess);
