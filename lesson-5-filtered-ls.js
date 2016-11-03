var fs = require('fs');
var path = require('path');

var dirLocation = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dirLocation, function (err, list) {
  if (err) return console.error(err)
  list.forEach(function(file) {
      if (path.extname(file) === ext) {
          console.log(file)
      }
  });
});
