const express = require("express");
require("./database/mongoose");

const { Transaction } = require("./models/transactions");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/health", (req, res) => {
	res.send("Connection Working : " + req.body.user);
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
