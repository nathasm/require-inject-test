'use strict';
var second = require('./b');

describe('TEST', function() {
  it('should be able to stat a file', function() {
    second('/etc/passwd', function(err, stats) {
    });
  });
});

