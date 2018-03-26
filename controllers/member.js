var express = require('express');
var UserModel = require('../models/user');
//const passport       = require("passport");
var routerMember = express.Router();
var path = require('path');


routerMember.get("/member/login", (req, res) => {
    var fullpath = path.join(__dirname, "../views", "login.html")
    res.sendFile(fullpath);
});

routerMember.get("/member/signup", function (req, res) {
    var fullpath = path.join(__dirname, "../views", "signup.html");
    res.sendFile(fullpath);
});

routerMember.get("/member/logout", function(req, res){
    var fullpath = path.join(__dirname, "../views", "logout.html");
    res.sendFile(fullpath);
});

routerMember.post("/member/newsignup", function (req, res) {
    let data = req.body;
    res.set("Content-Type", "html/text");
    res.status(200);
    
    UserModel.create(data, function(retval){
        if(retval.error){
            res.send({ error: retval.error} );
        } else {
            res.send({ success: retval.success })
        }
    });
    
});

routerMember.post("/member/login", function(req, res){
    let data = req.body;
    res.set("Content-Type", "html/text");
    res.status(200);
    
    UserModel.checkLogin(data, function(retval){
        if(retval.error){
            res.send({ error: retval.error} );
        } else {
            res.send({ success: retval.success })
        }
    });
});

module.exports = routerMember;