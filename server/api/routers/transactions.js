const express = require("express");
const { Transaction } = require("../models/transactions");
const autheticate = require("../middlewares/authenticate");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

router.get("/transaction", async (req, res) => {
	try {
		const transaction = await Transaction.find({
			$and: [
				{
					$expr: {
						$eq: [{ $month: "$transactionDate" }, req.body.month],
					},
				},
				{
					$expr: {
						$eq: [{ $year: "$transactionDate" }, req.body.year],
					},
				},
			],
		});
		res.status(200).send(transaction);
	} catch (e) {
		res.status(500).send(e);
	}
});

// POST /transaction
router.post("/transaction", authenticate, async (req, res) => {
	const transaction = new Transaction({ ...req.body, user: req.user._id });
	try {
		await transaction.save();
		res.status(200).send(transaction);
	} catch (e) {
		res.status(400).send(e);
	}
});

// PATCH /transaction/:id
router.patch("/transaction/:id", async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["description", "transactionDate", "paymentMode", "amount"];

	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidUpdate) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		const transaction = await Transaction.findById(req.params.id);
		updates.forEach((update) => (transaction[update] = req.body[update]));
		await transaction.save();

		if (!transaction) {
			res.status(404).send({ error: "Transaction not found for updation." });
		}

		res.status(200).send(transaction);
	} catch (error) {
		res.status(500).send(error);
	}
});

// DELETE /transaction/:id
router.delete("/transaction/:id", async (req, res) => {
	try {
		const transaction = await Transaction.findByIdAndDelete(req.params.id);
		if (!transaction) {
			res.status(404).send({ error: "Transaction not found for deletion" });
		}

		res.status(200).send(transaction);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
