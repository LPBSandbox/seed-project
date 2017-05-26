var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/', function (req, res, next) {
    User.findOne({}, (err, doc) => {
      if (err){
        return res.send("Error!");
      }
      res.render('node', {email: doc});
    });
});

router.post("/", function (req, res, next){
    var email = req.body.email;
    var user = new User({
      firstName: "Larry",
      lastName: "Bouthillier",
      password: "bogus",
      email: email
    });
    user.save((err) => {console.log("error saving "+err);});
    res.redirect("/?msg="+email);
});

module.exports = router;
