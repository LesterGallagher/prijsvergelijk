var closureCompiler = require('google-closure-compiler').gulp();
var sourcemaps = require('gulp-sourcemaps');
var gulp = require('gulp');
var gutil = require('gulp-util');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
var postcss = require('gulp-postcss');
var ejs = require('gulp-ejs');
var es = require('event-stream');

const jsSources = [
    'src/js/lib/onsenui.min.js',
    'src/js/core.js',
    'src/js/pwa-history.js',
    'src/js/index.js',
];

const cssSources = [
    'src/css/lib/leaflet/leaflet.css',
    'src/css/index.css',
]

gulp.task('default', ['js', 'css', 'ejs', 'copy']);

gulp.task('ejs', () => {
    return gulp.src('./src/**/*.ejs')
        .pipe(ejs(require('../_site/site_data.json'), {}, { ext: '.html' }))
        .pipe(gulp.dest('./www'))
});

gulp.task('copy', () => {
    return es.concat(
        gulp
            .src('../_site/assets/minima-social-icons.svg')
            .pipe(gulp.dest('./www/assets')),
        gulp.src('../_site/assets/img/**/*')
            .pipe(gulp.dest('www/assets/img'))
    );
});

gulp.task('js', () => {
    return gulp.src(jsSources, { base: './' })
        .pipe(sourcemaps.init())
        .pipe(concat('app.min.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('www/js'));
});

gulp.task('css', () => {
    return gulp.src(cssSources, { base: './' })
        .pipe(sourcemaps.init())
        .pipe(concat('style.min.css'))
        .pipe(postcss([require('autoprefixer'), require('cssnano')]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('www/css'));
});

gulp.task('js-prod', () => {
    return gulp.src(jsSources, { base: './' })
        .on('error', gutil.log)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .on('error', gutil.log)
        .pipe(gulp.dest('www/js'));
});

gulp.task('css-prod', () => {
    return gulp.src(cssSources, { base: './' })
        .pipe(concat('style.min.css'))
        .pipe(postcss([require('autoprefixer'), require('cssnano')]))
        .pipe(gulp.dest('www/css'));
});

gulp.task('transpile', ['js-prod', 'css-prod']);

gulp.task('watch', () => {
    return gulp.watch('./src/**/*', ['js', 'css', 'ejs', 'copy']);
});



