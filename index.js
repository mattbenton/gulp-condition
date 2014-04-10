var through   = require('through2');
var gulpmatch = require('gulp-match');

function gulpCondition ( condition, transformA, transformB ) {

  function applyTransforms ( context, file, transforms, callback ) {
    if ( !_.isArray(transforms) ) {
      transforms = [transforms];
    }

    function next () {
      var transform = transforms.shift();
      if ( transform ) {
        transform.once('data', function ( newFile ) {
          file = newFile;
          next();
        });

        transform.write(file);
      } else {
        context.push(file);
        callback();
      }
    }

    next();
  }

  return through.obj(function ( file, enc, callback ) {
    var that = this;

    if ( gulpmatch(file, condition) ) {
      if ( transformA ) {
        applyTransforms(this, file, transformA, callback);
        return;
      }
    } else {
      if ( transformB ) {
        applyTransforms(this, file, transformB, callback);
        return;
      }
    }

    this.push(file);
    callback();
  });
}

module.exports = gulpCondition;
