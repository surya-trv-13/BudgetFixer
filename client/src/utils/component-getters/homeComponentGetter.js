import React from "react";
import InvalidComponentIdException from "../../Exceptions/InvalidComponentIdException";
import { HOME_DASHBOARD_COMPONENT } from "../componentIDs";
import SummaryDetails from "../../components/HomeComponent/SummaryDetails";
import GridDetails from "../../components/HomeComponent/GridDetails";

const getAccountBalance = () => <SummaryDetails />;

const getUpcomingPayment = () => <SummaryDetails />;

const getPaymentHistory = () => <SummaryDetails />;

const getRecentActivities = () => <SummaryDetails />;

const getRightSection = () => <GridDetails />;

const getComponent = (componentId = "") => {
	switch (componentId) {
		case HOME_DASHBOARD_COMPONENT.MONTHLY_SALARY:
			return getAccountBalance();
		case HOME_DASHBOARD_COMPONENT.OPENING_BALANCE:
			return getUpcomingPayment();
		case HOME_DASHBOARD_COMPONENT.SPENT_AMOUNT:
			return getPaymentHistory();
		case HOME_DASHBOARD_COMPONENT.REMAINING_BALANCE:
			return getRecentActivities();
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
