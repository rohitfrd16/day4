var express = require("express");
var router = express.Router();

var profileController = require("../controller/index");

router.get("/profilepage", function (req, res, next) {
	res.render("profile", {title:'done'});
});

router.post("/profilepost", profileController.createProfile);

router.get("/allprofiles", profileController.getProfiles);

router.get("/bdayall", profileController.getAllbday);

router.get("/fullname/:id", profileController.getFullName);

router.get("/bdaytoday/:userId", profileController.todayBday);


module.exports = router;