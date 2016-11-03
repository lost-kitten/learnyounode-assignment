var http = require('http');
var url = process.argv[2];
var content = '';

http.get(url, function(response) {
  response.on('data', function(chunk) {
    content += chunk
});
  response.on('end', function () {
    console.log(content.length)
    console.log(content)
});
});
