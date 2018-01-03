var gulp       	 = require('gulp'),

    sass         = require('gulp-sass'),
    sourcemaps	 = require('gulp-sourcemaps'),
	browserSync  = require('browser-sync'),

	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов

	autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function(){
    return gulp.src('app/sass/style.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('css-libs', ['sass'], function() {
	return gulp.src('app/css/*.css')
        .pipe(autoprefixer(['last 15 versions'], { cascade: true }))
		.pipe(cssnano())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('app/css/'));
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'app/' // Директория для сервера -
        },
        notify: true // Отключаем уведомления
    });
});

gulp.task('watch', ['browser-sync', 'css-libs'], function() {
	gulp.watch('app/sass/*.scss', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('start', ['watch']);
