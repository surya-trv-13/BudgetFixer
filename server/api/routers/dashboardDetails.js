const express = require("express");
const { DashbordDetails } = require("../models/dashboardDetails");
const authenticate = require("../middlewares/authenticate");
const router = express.Router();

// POST /dashboard
router.post("/dashboard", authenticate, async (req, res) => {
	const dashboard = new DashbordDetails({ ...req.body, user: req.user._id });
	try {
		await dashboard.save();
		res.status(200).send(dashboard);
	} catch (error) {
		res.status(400).send({ errorMessage: "Errror Occured while saving dashboard", error });
	}
});

// GET /dashboard
router.get("/dashboard/:month/:year", authenticate, async (req, res) => {
	try {
		const dashboard = await DashbordDetails.findOne({
			user: req.user._id,
			month: req.params.month,
			year: req.params.year,
		});
		res.status(200).send(dashboard);
	} catch (error) {
		res.status(400).send({ errorMessage: "Errror Occured while fetching dashboard", error });
	}
});

// PATCH /dashboard
router.patch("/dashboard", authenticate, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["monthlySalary", "openingBalance", "remainingBalance"];

	const isValidUpdate = updates.every((update) => allowedUpdates.includes(update));

	if (!isValidUpdate) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		const dashboard = await DashbordDetails.findOne({
			user: req.user._id,
			month: req.body.month,
			year: req.body.year,
		});

		if (!dashboard) {
			res.status(404).send({
				errorMessage:
					"Dashboard Details could not be found for updation, Please contact Developer.",
			});
		}
		updates.forEach((update) => (dashboard[update] = req.body[update]));
		await dashboard.save();
	} catch (error) {
		res.status(400).send({ errorMessage: "Errror Occured while updating dashboard", error });
	}
});

module.exports = router;
