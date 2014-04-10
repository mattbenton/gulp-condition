# gulp-condition

Conditionally pipe streams using Gulp.

## Usage

```javascript
var gcond  = require('gulp-condition');
var uglify = require('gulp-uglify');
var gzip   = require('gulp-gzip');

var condition = true;

gulp.task('build', function () {
  return gulp.src('./src/*.js')
    // Uglify and Gzip if `condition` evaluates to true.
    .pipe(gcond(condition, [uglify(), gzip()]))
    .pipe(gulp.dest('./dist'));
});
```

## API

### gcond(condition, [streamA], [streamB])

- `condition` can be a boolean, a function, a regular expression, a glob string (or array of glob strings), or a stat filter object. Basically, anything that [gulp-match](https://www.npmjs.org/package/gulp-match) accepts.
- `streamA` a stream (or array of streams) to transform data through if condition evaluates to `true`.
- `streamB` a stream (or array of streams) to transform data through if condition evaluates to `false`.

## License

The MIT License (MIT)

Copyright (c) 2014 Matt Benton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.