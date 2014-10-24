'use strict';
var requireInject = require('require-inject');
var first = requireInject('./a', {
  'fs': {
    rename: function(infile, outfile, cb) {
      cb();
    }
  }
});

describe('TEST', function() {
  it('should be able to rename a file', function() {
    first('in', 'out', function(err) {
    });
  });
});
