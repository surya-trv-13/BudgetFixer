const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const tarnsactionSchema = new Schema(
	{
		item: {
			type: String,
			required: true,
			trim: true,
		},
		paymentType: {
			type: String,
			required: true,
			trim: true,
		},
		amount: {
			type: Number,
			required: false,
			default: 0,
		},
		paymentMode: {
			type: String,
			required: false,
			default: false,
		},
		transactionDate: {
			type: Date,
			required: true,
		},
		description: {
			type: String,
			required: false,
			trim: true,
			default: "NA",
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

const Transaction = mongoose.model("Transaction", tarnsactionSchema);

module.exports = { Transaction };
