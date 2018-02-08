"user strict";

var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	router = require('./controllers/default'),
	request = require('request'),
	io = require('socket.io').listen(server);
	var bodyParser = require("body-parser");
	usernames = [];
	

var chat = require("./lib/chat.js");
app.use(bodyParser.json());
app.use(express.static("public"))
app.use("/", router);

// app.get('/', function(req, res){
// 	res.sendFile(__dirname + '/views/index.html');
// 	app.use(express.static("public"));
// });

io.sockets.on('connection', function(socket){
	chat.init(io, socket);
	chat.setListeners(socket);
});

server.listen(process.env.PORT || 3000, ()=>{
	console.log("App running...");
});