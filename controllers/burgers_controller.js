var express = require("express");
var burger = require("../models/burgers.js");

var router = express.Router();

router.get("/", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject)
  });
});

router.post("/api/burgers", function(req, res) {

  burger.create("burger_name", req.body.burger_name, function(results) {
    res.end();
  });
  res.redirect('/');
});

router.put("/api/burgers/:id", function(req, res) {
  var burgerid = "id = " + req.params.id;

  burger.update({
    devoured: 1
  }, burgerid, function(result) {
    if (res.changedRows = 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;
