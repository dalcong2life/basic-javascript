var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-minify-html');
var browserSync = require('browser-sync').create();
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');


var reload = browserSync.reload;

var Path = {
    html: 'src/index.html',
    js: 'src/js/main.js',
    css: 'src/css/**/*.css',
    slide: 'src/content/*.md',
    libs: 'src/libs/**/*',
    dist: 'dist',
    distJs: 'dist/js',
    distCss: 'dist/css',
    distLibs: 'dist/libs'
};

gulp.task('server', ['libs', 'uglify', 'minifycss', 'minifyhtml', 'slide'], function () {
    return browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

gulp.task('libs', function () {
    return gulp.src(Path.libs)
        .pipe(gulp.dest(Path.distLibs));
});

gulp.task('minifycss', function () {
    return gulp.src(Path.css)
        .pipe(concat('main.css'))
        .pipe(minifycss())
        .pipe(gulp.dest(Path.distCss))
        .pipe(reload({stream: true}));
});

gulp.task('uglify', function () {
    return browserify(Path.js)
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(uglify())
        .pipe(gulp.dest(Path.distJs))
        .pipe(reload({stream: true}));
});

gulp.task('slide', function () {
    return gulp.src(Path.slide)
        .pipe(concat('slide.md'))
        .pipe(gulp.dest(Path.dist))
        .pipe(reload({stream: true}));
});

gulp.task('minifyhtml', function () {
    return gulp.src(Path.html)
        .pipe(minifyhtml())
        .pipe(gulp.dest(Path.dist))
        .pipe(reload({stream: true}));
});


// 파일 변경 감지
gulp.task('watch', function () {
    gulp.watch(Path.js, ['uglify']);
    gulp.watch(Path.css, ['minifycss']);
    gulp.watch(Path.html, ['minifyhtml']);
    gulp.watch(Path.slide, ['slide']);
});

gulp.task('default', ['server', 'watch']);