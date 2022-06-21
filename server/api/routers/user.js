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

router.get("/user/:id", authenticate, async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			res.status(404).send({ error: "User not found" });
		}
		res.status(200).send(user);
	} catch (error) {
		res.status(500).send(error);
	}
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
