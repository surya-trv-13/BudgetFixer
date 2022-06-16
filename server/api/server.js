const express = require("express");
require("./database/mongoose");

const healthRouter = require("./routers/health");
const transactionRouter = require("./routers/transaction");

const { User } = require("./models/user");

const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());

app.use(healthRouter);
app.use(transactionRouter);

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});
