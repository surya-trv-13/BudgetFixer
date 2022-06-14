const express = require("express");
require("./database/mongoose");

const { Transaction } = require("./models/transactions");
// const { User } = require("./models/user");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (req, res) => {
	res.send("Connection Working : " + req.body.user);
});

app.get("/transaction", async (req, res) => {
	Transaction.find({
		$and: [
			{
				$expr: {
					$eq: [{ $month: "$transactionDate" }, 6],
				},
			},
			{
				$expr: {
					$eq: [{ $year: "$transactionDate" }, 2022],
				},
			},
		],
	})
		.then((transaction) => {
			console.log("Result is", transaction);
			res.send(transaction);
		})
		.catch((e) => {
			res.status(400).send(e);
		});
});

app.post("/transaction", async (req, res) => {
	const transaction = new Transaction(req.body);
	await transaction
		.save()
		.then((data) => {
			res.send(data);
		})
		.catch((e) => {
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});
