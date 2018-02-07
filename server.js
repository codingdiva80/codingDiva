var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	io = require('socket.io').listen(server);
	usernames = [];

var chat = require("./lib/chat.js");

server.listen(process.env.PORT || 3000);

app.get('/', function(req, res){
	res.sendFile(__dirname + '/index.html');
	app.use(express.static("public"));
});

io.sockets.on('connection', function(socket){
	chat.init(io, socket);
	chat.setListeners(socket);
});