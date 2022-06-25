const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");

const { User } = require("../models/user");

router.post("/user", async (req, res) => {
	try {
		const user = new User(req.body);
		const token = await user.generateAuthToken();

		res.status(200).send({ user, token });
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/user/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(req.body.email, req.body.password);
		const token = await user.generateAuthToken();

		res.status(200).send({ user, token });
	} catch (error) {
		res.status(500).send(error);
	}
});

router.post("/user/logout", authenticate, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
		await req.user.save();
		res.status(200).send({ message: "Logout Successfully!" });
	} catch (error) {
		res.status(500).send({ error });
	}
});

router.post("/user/logoutAll", authenticate, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();

		res.status(200).send({ message: "Logout from all devices!" });
	} catch (error) {
		res.status(500).send({ error });
	}
});

router.get("/user/me", authenticate, async (req, res) => {
	res.status(200).send(req.user);
});

router.patch("/user/me", authenticate, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "password", "phoneNumber"];
	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidUpdate) {
		return res.status(400).send({ error: "Update of certain fields not allowed for update" });
	}

	try {
		updates.forEach((update) => (req.user[update] = req.body[update]));
		await req.user.save();

		res.status(200).send(req.user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.delete("/user/me", authenticate, async (req, res) => {
	try {
		req.user.remove();
		res.status(200).send(req.user);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
