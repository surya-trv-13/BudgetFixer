const express = require("express");
require("./database/mongoose");

const healthRouter = require("./routers/health");
const transactionRouter = require("./routers/transaction");
const userRouter = require("./routers/user");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.use(healthRouter);
app.use(transactionRouter);
app.use(userRouter);

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});

const jwt = require("jsonwebtoken");

const myFunction = async () => {
	const token = jwt.sign({ _id: "abc123" }, "thisissuryadoinfgrandowstuff");

	console.log(token);

	const data = jwt.verify(token, "thisissuryadoinfgrandowstuff");
	console.log(data);
};

myFunction();
