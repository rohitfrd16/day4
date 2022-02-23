const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
	{
		fname: { type: String, required: true },
		lname: { type: String, required: true },
		address: { type: String, required: true },
		dob: { type: String, required: true },
		phone: { type: Number, required: true },
	},
	{
		versionKey: false,
	}
);

module.exports.profileSchema = profileSchema;

require("../methods/index");

module.exports = mongoose.model("Profile", profileSchema);