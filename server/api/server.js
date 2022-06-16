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

const bycrypt = require("bcryptjs");

const myFunction = async () => {
	const password = "Gupta@123!!";
	const hashedPassword = await bycrypt.hash(password, 8);

	console.log(password);
	console.log(hashedPassword);
};

myFunction();
