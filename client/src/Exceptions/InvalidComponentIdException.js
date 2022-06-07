const INVALID_COMPONENT_ID_DEFAULT_MESSAGE = "Cannot find component with the ID -";

class InvalidComponentIdException extends Error {
	constructor(message, componentID) {
		super(message, componentID);
		this.name = "InvalidComponentIdException";
		this.message = message || `${INVALID_COMPONENT_ID_DEFAULT_MESSAGE} ${componentID}`;
	}
}

export default InvalidComponentIdException;
