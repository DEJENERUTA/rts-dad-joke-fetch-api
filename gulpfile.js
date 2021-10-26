const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const gulp = require("gulp");
const babel = require("gulp-babel");

function buildJavascript() {
  return src("*js/**/*.js")
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
      })
    )
    .pipe(gulp.dest("dist"));
}

function buildStyles() {
  return (
    src("style/**/*.scss")
      .pipe(sass({ outputStyle: "expanded" }))
      /* .pipe(purgecss({ content: ["*.html"] })) */
      .pipe(dest("css"))
  );
}

function watchTask() {
  watch(
    ["style/**/*.scss", "js/**/*.js", "*.html"],
    series(buildStyles, buildJavascript)
  );
}

exports.default = series(buildStyles, buildJavascript, watchTask);
