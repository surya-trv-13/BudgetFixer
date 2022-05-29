const express = require("express");
require("./database/mongoose");
const { Product } = require("./models/product");

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.post("/", (req, res) => {
	res.send("Connection Working : " + req.body.user);
});

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});
