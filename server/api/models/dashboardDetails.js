const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dashboardDetailsSchema = new Schema({
	monthlySalary: {
		type: Number,
		required: true,
		default: 0,
	},
	openingBalance: {
		type: Number,
		required: true,
	},
	remainingBalance: {
		type: Number,
		required: true,
	},
	spentAmount: {
		type: Number,
		required: true,
	},
	month: {
		type: String,
		required: true,
		trim: true,
	},
	year: {
		type: Number,
		required: true,
	},
});

const DashbordDetails = mongoose.model("DashboardDetails", dashboardDetailsSchema);

module.exports = { DashbordDetails };
