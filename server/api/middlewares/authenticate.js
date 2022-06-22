const jwt = require("jsonwebtoken");
const { User } = require("../models/user");

const authenticate = (req, res, next) => {
	const token = req.header("Authorization").replace("Bearer ", "");
	const decoded = jwt.verify(token, "thisismyauthtokensecretpassword");
	const user = User.findOne({ _id: decoded._id, "tokens.token": token });

	req.user = user;
	next();
};

module.exports = authenticate;
