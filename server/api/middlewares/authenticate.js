const authenticate = (req, res, next) => {
	console.log("Auth middleware");
	next();
};

module.exports = authenticate;
