
var express = require('express');
var app = express();
var path = require("path");


app.use(express.static('public'));

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/about.html'));
});

app.get('/matsuri.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/matsuri.html'));
});

app.get('/sushinight.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/sushinight.html'));
});

app.get('/board.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/board.html'));
});

app.get('/contact.html', function (req, res) {
  res.sendFile(path.join(__dirname + '/contact.html'));
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});