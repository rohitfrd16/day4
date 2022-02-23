const { profileSchema } = require("../schema/profile");
const moment = require("moment");

profileSchema.virtual("fullName").get(function () {
	return this.fname + " " + this.lname;
});

profileSchema.methods.getIfBday = function () {
	const today=moment().format('YYYY-MM-DD');
	return today==this.dob;
};