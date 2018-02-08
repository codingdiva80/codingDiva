var express = require("express");
var router = express.Router();
var request = require("request");
var app = require("express");
var path = require('path');

router.get("/", function(req, res) {
    var fullpath = path.join(__dirname, "../views", "index.html");
    res.sendFile(fullpath);
});

module.exports = router;