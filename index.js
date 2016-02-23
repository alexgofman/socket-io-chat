var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res) {
  res.send('<h1>Hello World</h1>');
});

http.listen(1337, function() {
  console.log('Server is listening on port: 1337');
});
