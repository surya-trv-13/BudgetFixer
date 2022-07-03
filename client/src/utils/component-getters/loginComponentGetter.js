import React from "react";
import InvalidComponentIdException from "../../Exceptions/InvalidComponentIdException";
import { LOGIN_COMPONENT } from "../componentIDs";
import GridDetails from "../../components/HomeComponent/GridDetails";

const getLoginForm = () => <GridDetails />;

const getComponent = (componentId = "") => {
	switch (componentId) {
		case LOGIN_COMPONENT.LOGIN_COMPONENT:
			return getLoginForm();
		default:
			throw new InvalidComponentIdException("", componentId);
	}
};

const enhancedCallPrepGetter = {
	getComponent,
};

export default enhancedCallPrepGetter;
