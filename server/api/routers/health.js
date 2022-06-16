const express = require("express");

const router = express.Router();

router.get("/health", (req, res) => {
	res.send("Connection Working : " + req.body.user);
});

module.exports = router;
