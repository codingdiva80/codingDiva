var express          = require('express');
//const passport       = require("passport");
var routerMember     = express.Router();
var path = require('path');

routerMember.get("/member/login", (req, res) => {
    var fullpath = path.join(__dirname, "../views", "login.html")
    res.sendFile(fullpath);
});

routerMember.get("/member/signup", function(req, res){
    console.log("Get member...");
    var fullpath = path.join(__dirname, "../views", "signup.html");
    res.sendFile(fullpath);
});

module.exports = routerMember;