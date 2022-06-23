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
		console.log(user);
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

router.patch("/user/:id", async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "password", "phoneNumber"];

	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidUpdate) {
		return res.status(400).send({ error: "Update of certain fields not allowed for update" });
	}

	try {
		const user = await User.findById(req.params.id);
		updates.forEach((update) => (user[update] = req.body[update]));
		await user.save();

		if (!user) {
			res.status(404).send({ error: "user not found for updation" });
		}

		res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

router.delete("/user/:id", async (req, res) => {
	try {
		const user = await User.findByIdAndDelete(req.params.id);
		if (!user) {
			res.status(404).send({ error: "User not found for deletion" });
		}

		res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
