var gulp = require('gulp'),
		sass = require('gulp-sass'),
		autoprefixer = require('gulp-autoprefixer'),
		sourcemaps = require('gulp-sourcemaps'),
		browserSync = require('browser-sync').create();


gulp.task('serve', () => {
    browserSync.init({
        server: {
        	injectChanges: true,
            baseDir: "./build/",
            index: "search-form-13.html"
            // index: "index.html"
        },
        notify: false
    });
});


gulp.task('html', () => {
	return gulp.src('src/*.html')
				.pipe(gulp.dest('build'))
				.on('end', browserSync.reload);
});

gulp.task('sass', () => {
  return gulp.src('src/scss/**/*.scss')
  	.pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
	  .pipe(autoprefixer({
	          browsers: ['last 10 versions'],
	          cascade: false
	      }))
	  .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/css'))
    .pipe(browserSync.reload({
    	stream: true
    }));
});

gulp.task('pic', () => {
	return gulp.src('src/img/*.*')
							.pipe(gulp.dest('build/img'))
});

gulp.task('font', () => {
	return gulp.src('src/fonts/*.*')
							.pipe(gulp.dest('build/fonts'))
});

gulp.task('lib', () => {
	return gulp.src('src/lib/**/*.*')
							.pipe(gulp.dest('build/lib'))
});

gulp.task('js', () => {
	return gulp.src('src/js/**/*.js')
							.pipe(gulp.dest('build/js'))
							.on('end', browserSync.reload);
});

gulp.task('watch', () => {
	gulp.watch('src/*.html', gulp.series('html'));
	gulp.watch('src/scss/**/*.scss', gulp.series('sass'));
	gulp.watch('src/js/**/*.js', gulp.series('js'));
	gulp.watch('src/img/', gulp.series('pic'));
	gulp.watch('src/fonts/', gulp.series('font'));
	gulp.watch('src/lib/', gulp.series('lib'));
});

gulp.task('default', gulp.series(
	gulp.parallel('html', 'sass','js'),
	gulp.parallel('watch', 'serve')
));

gulp.task('build', gulp.series(gulp.parallel('html', 'sass','js', 'pic', 'font', 'lib')));