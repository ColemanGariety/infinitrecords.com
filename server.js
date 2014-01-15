var express = require('express')
  , server = express()
  , fs = require('fs')
  , port

server.set('view engine', 'html');
server.engine('html', require('hbs').__express)

server.get('/', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/index.html') })
})

server.get('/artist', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/artist.html') })
})

server.get('/contact', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/contact.html') })
})

server.get('/studio', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/studio.html') })
})

server.get('/store', function (req, res) {
  res.render('layout', { yield: fs.readFileSync('./views/store.html') })
})

server.use(express.static(__dirname + '/public'))

port = process.env.PORT || 5000;
server.listen(port, function () {
  console.log("Listening on " + port);
})