var express          = require('express');
//const passport       = require("passport");
var routerMember     = express.Router();

routerMember.get("member/login", (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
	app.use(express.static("public"));
});

routerMember.get("member/signup", (req, res) => {
    console.log(__dirname);
    res.sendFile(__dirname + '/views/signup.html');
	app.use(express.static("public"));
});

module.exports = routerMember;