
var express = require('express'),
	app = express(),
	server = require('http').createServer(app),
	router = require('./controllers/default'),
	routerMember = require('./controllers/member'),
	bodyParser = require('body-parser'),
	io = require('socket.io').listen(server);

server.listen(process.env.PORT || 4000, ()=>{
	console.log("App running...");
});

var chat = require("./lib/chat");
app.use(express.static('public'));
app.use("/", router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(routerMember);

io.sockets.on('connection', function(socket){
	chat.init(io, socket);
	chat.setListeners(socket);
});

