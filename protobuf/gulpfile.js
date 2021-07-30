var gulp = require("gulp");
let protobuf = require("protobuf-templates");

gulp.task("default", () => {
    return gulp.src('./proto/*.proto')
    .pipe(protobuf({template:'./lowerface-ts.hbs', keepCase: true}))
    .pipe(gulp.dest('ts'));
});

