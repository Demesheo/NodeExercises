// FILTERED LS
var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function (err, list) {
  list.forEach(function (file) {
	var extension = '.' + process.argv[3];
    if (path.extname(file) === extension){
      console.log(file);
    }
  });
});