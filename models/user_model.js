const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
	firstName: {
		type: String,
		minlength: 6
	}
})

module.exports = User = mongoose.model("User", userSchema);