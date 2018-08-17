var gulp = require("gulp");
let protobuf = require("protobuf-templates");

gulp.task("default", () => {
    return gulp.src('./proto/*')
    .pipe(protobuf({template:'interface'}))
    .pipe(gulp.dest('ts'));
});

