const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const dashboardDetailsSchema = new Schema(
	{
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
			type: Number,
			required: true,
		},
		year: {
			type: Number,
			required: true,
		},
		user: {
			type: mongoose.Schema.Types.ObjectId,
			required: true,
			ref: "User",
		},
	},
	{
		timestamps: true,
	},
);

const DashbordDetails = mongoose.model("DashboardDetails", dashboardDetailsSchema);

module.exports = { DashbordDetails };
