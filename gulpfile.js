var gulp = require( 'gulp' );
var browserify = require( 'gulp-browserify' );
var concat = require( 'gulp-concat' );
var less = require( 'gulp-less' );
var argv = require( 'yargs' ).argv;

// Source files
var scripts = 'public/main.js';
var styles = 'public/less/**/*.less';

gulp.task('styles', function() {
	gulp.src(styles)
		.pipe(less())
		.pipe(concat('styles.css'))
		.pipe(gulp.dest('public/css'))
});

gulp.task('scripts', function() {
	gulp.src(scripts)
		.pipe(browserify({
			debug: !!argv.debug				// source maps ON
		}))
		.pipe(concat('main.min.js'))
		.pipe(gulp.dest('public'));
});

gulp.task('default', ['scripts', 'styles'], function(){
	gulp.watch( styles, ['styles']);
	gulp.watch( scripts, ['scripts']);
});
