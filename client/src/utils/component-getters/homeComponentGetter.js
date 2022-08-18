import React from "react";
import InvalidComponentIdException from "../../Exceptions/InvalidComponentIdException";
import { HOME_DASHBOARD_COMPONENT } from "../componentIDs";
import SummaryDetails from "../../components/HomeComponent/SummaryDetails";
import GridDetails from "../../components/HomeComponent/GridDetails";

const getMonthlySalary = () => (
	<SummaryDetails dotValue="monthlySalary" boxHeader="Monthly Salary" />
);

const getOpeningBalance = () => (
	<SummaryDetails dotValue="openingBalance" boxHeader="Opening Balance" />
);

const getSpentAmount = () => <SummaryDetails dotValue="spentAmount" boxHeader="Spent Amount" />;

const getRemainingBalance = () => (
	<SummaryDetails dotValue="remainingBalance" boxHeader="Remaining Balance" />
);

const getRightSection = () => <GridDetails />;

const getComponent = (componentId = "") => {
	switch (componentId) {
		case HOME_DASHBOARD_COMPONENT.MONTHLY_SALARY:
			return getMonthlySalary();
		case HOME_DASHBOARD_COMPONENT.OPENING_BALANCE:
			return getOpeningBalance();
		case HOME_DASHBOARD_COMPONENT.SPENT_AMOUNT:
			return getSpentAmount();
		case HOME_DASHBOARD_COMPONENT.REMAINING_BALANCE:
			return getRemainingBalance();
		case HOME_DASHBOARD_COMPONENT.FILTER_BOX:
			return getRightSection();
		case HOME_DASHBOARD_COMPONENT.GRAPH_CONFIG:
			return getRightSection();
		case HOME_DASHBOARD_COMPONENT.MONTHLY_GRID:
			return getRightSection();
		default:
			throw new InvalidComponentIdException("", componentId);
	}
};

const enhancedCallPrepGetter = {
	getComponent,
};

export default enhancedCallPrepGetter;
