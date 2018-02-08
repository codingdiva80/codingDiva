var express = require("express");
var router = express.Router();
var request = require("request");

router.get("/", function(req, res) {
    res.render("views/index.html");
});

module.export = router;