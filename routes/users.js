var express = require('express');
var router = express.Router();



var usersController = require("../controller/index");

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/bdaytoday/:userId", usersController.todayBday);

module.exports = router;
