const express = require("express");
require("./database/mongoose");

const { Transaction } = require("./models/transactions");
const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (req, res) => {
	res.send("Connection Working : " + req.body.user);
});

app.get("/transaction", async (req, res) => {
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
app.post("/transaction", async (req, res) => {
	const transaction = new Transaction(req.body);
	try {
		await transaction.save();
		res.status(200).send(transaction);
	} catch (e) {
		res.status(400).send(e);
	}
});

app.patch("/transaction/:id", async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["description", "transactionDate", "paymentMode", "amount"];

	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidUpdate) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		const _id = req.params.id;
		const transaction = await Transaction.findByIdAndUpdate(_id, req.body, {
			new: true,
			runValidators: true,
		});

		if (!transaction) {
			res.status(404).send({ error: "Transaction not found for updation." });
		}

		res.status(200).send(transaction);
	} catch (error) {
		res.status(500).send(error);
	}
});

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});
