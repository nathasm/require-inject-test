'use strict';
var fs = require('fs');
module.exports = function(file, cb) {
  fs.stat(file, function(err, stats) {
    if(err) {
      throw err;
    }
    cb(stats);
  });
};
