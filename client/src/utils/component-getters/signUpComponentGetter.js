import React from "react";
import InvalidComponentIdException from "../../Exceptions/InvalidComponentIdException";
import { SIGNUP_COMPONENT } from "../componentIDs";
import SignUpGridComponent from "../../components/SignUpFormComponents/SignUpGridComponent";

const getSignUpForm = () => <SignUpGridComponent />;

const getComponent = (componentId = "") => {
	switch (componentId) {
		case SIGNUP_COMPONENT.SIGN_COMPONENT:
			return getSignUpForm();
		default:
			throw new InvalidComponentIdException("", componentId);
	}
};

const enhancedCallPrepGetter = {
	getComponent,
};

export default enhancedCallPrepGetter;
