const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		unique: true,
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
			if (!validator.isMobilePhone(value.toString(), ["en-IN"])) {
				throw new Error("Phone Number is Invalid");
			}
		},
	},
});

userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Unable to Login");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to Login");
	}

	return user;
};

userSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
