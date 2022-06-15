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
		validate(value) {
			if (!validator.isEmail(value)) {
				throw new Error("Email is Invalid");
			}
		},
	},
	password: {
		type: String,
		required: true,
	},
	phoneNumber: {
		type: Number,
		required: false,
		validate(value) {
			if (!validator.isPhone(value)) {
				throw new Error("Phone Number is Invalid");
			}
		},
	},
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
