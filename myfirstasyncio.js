// MY FIRST ASYNC I/O
var fs = require('fs');
var buf = process.argv[2];
fs.readFile(buf, function (err, contents) {
  var result = contents.toString().split('\n').length - 1;
  console.log(result);
});