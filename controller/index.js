const Profile = require("../schema/profile");
const moment = require("moment");

exports.createProfile = function (req, res) {
	var profileOb = new Profile({
		fname: req.body.fname,
		lname: req.body.lname,
		address: req.body.address,
		dob: req.body.dob,
		phone: req.body.phone,
	});

	profileOb.save(function (err) {
		if (err) {
			res.json({ ERROR: err });
		} else {
			res.redirect("/profile/profilepage");
			console.log("data saved!!", req.body);
		}
	});
};

exports.getProfiles = function (req, res) {
	Profile.find(function (err, data) {
		if (err) {
			res.json({ ERROR: err });
		} else {
			res.json(data);
		}
	});
};

exports.getFullName = function (req, res) {
	let userId = req.params.id;
	Profile.findById(userId, function (err, data) {
		if (err) {
			res.json({ ERROR: err });
		} else {
			res.json(data.fullName);
		}
	});
};

exports.todayBday = function (req, res) {
	let id = req.params.userId;
	console.log(id);
	Profile.findById(id, function (err, data) {
		if (err) {
			res.json({ ERROR: err });
		} else {
			if (data.getIfBday()) return res.send("Happy Birthday!!");
			res.send("Nope :(");
		}
	});
};


exports.getAllbday = function (req, res) {
	const peps=[];
	const today=moment().format('YYYY-MM-DD');
	
	Profile.find(function (err, data) {
		const ppp=data;
		if (err) {
			res.json({ ERROR: err });
		} 
		else {
			for(let i=0;i<ppp.length;i++){
				if(ppp[i]["dob"]==today){
					peps.push(ppp[i]['fname']+" "+ppp[i]['lname']);
				}
			}
			res.send(peps);
		};
	});
};