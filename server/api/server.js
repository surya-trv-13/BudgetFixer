const express = require("express");
require("./database/mongoose");

const healthRouter = require("./routers/health");
const transactionRouter = require("./routers/transactions");
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

const { User } = require("./models/user");

const main = async () => {
	const user = await User.findById("62ab674cf0d339fa4398d711");
	await user.populate("transactions");

	console.log(user.transactions);
};

main();
