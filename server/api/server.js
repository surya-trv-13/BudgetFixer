const express = require("express");
require("./database/mongoose");

const healthRouter = require("./routers/health");
const transactionRouter = require("./routers/transactions");
const userRouter = require("./routers/user");
const dashboardDetailsRouter = require("./routers/dashboardDetails");

const port = process.env.PORT;
const app = express();

app.use(express.json());

app.use(healthRouter);
app.use(transactionRouter);
app.use(userRouter);
app.use(dashboardDetailsRouter);

app.listen(port, () => {
	console.log(`App Started at ${port}`);
});
