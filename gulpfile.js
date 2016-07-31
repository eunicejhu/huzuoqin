var gulp = require('gulp'),
	sass = require("gulp-sass");

var conf = {
	scss: {
		src: "src/main/webapp/source/scss/**/*.scss",
		dest: "src/main/webapp/buildDest/css",
		watch: ["src/main/webapp/source/scss/**/*"]
	}
};

gulp.task("default", ["sass"], function(){

});

gulp.task('sass', function () {
  return gulp.src(conf.scss.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest(conf.scss.dest));
});
 
gulp.task('sass:watch', function () {
  gulp.watch(conf.css.watch, ['sass']);
});