var io =require('socket.io').listen(module.parent.server);
var mockedUsers = require("./mocked-users.js");

let chat = {

    io: null,
    socket: null,
    usernames: [],

    init: function(io, socket){
        this.io = io;
        this.socket = socket;
    },

    registerUser: function(data, callback){
        if(this.usernames.indexOf(data) != -1){
			callback(false);
		} else {
			callback(true);
			this.socket.username = data;
			this.usernames.push(this.socket.username);
			this.io.sockets.emit('usernames', this.usernames);
		}
    },

    login: function(data, callback) {
        /* temp code until we hook up mongo */
        var userFound = false;
        var i = 0;
        for(var key in mockedUsers){
            if(mockedUsers.hasOwnProperty(key)){
                let user = mockedUsers[key];
                if(data.username === user.username && data.password === user.password ){
                    userFound = true;
                    this.storeLogin(user);
                    break;
                }
            }
        }
        callback(userFound);
    },

    storeLogin: function(user){
        this.socket.username = user.username;
		this.usernames.push(this.socket.username);
		this.io.sockets.emit('usernames', this.usernames);
    },

    writeMessage: function(data){
        this.io.sockets.emit('new message', {msg: data, user:this.socket.username});
    },

    setListeners : function(socket){
        socket.on('new user', (data, callback)=>{
            this.registerUser(data, callback);
        });
        socket.on('send message', (data) => {
			this.writeMessage(data);
        });
        socket.on('login', (data, callback) => {
            this.login(data, callback);
        });
        socket.on('disconnect', (data) => {
			if(!socket.username){
				return;
			}
			usernames.splice(usernames.indexOf(socket.username), 1);
			updateUsernames();
		});
    }

}


module.exports = chat;