const mongoose = require("mongoose");
const validator = require("validator");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true.value,
		trim: true,
		validate: {
			validator: validator.isEmail,
			message: "Email is Invalid",
		},
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: false,
		validate: {
			validator: validator.isPhone,
			message: "Mobile Number is invalid",
		},
	},
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
