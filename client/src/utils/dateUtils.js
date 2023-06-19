export const getFormattedDate = () => {
	const date = new Date();
	const monthNames = [
		"January",
		"February",
		"March",
		"April",
		"May",
		"June",
		"July",
		"August",
		"September",
		"October",
		"November",
		"December",
	];

	const day = date.getDate();

	const monthIndex = date.getMonth();
	const monthName = monthNames[monthIndex];

	const year = date.getFullYear();

	return `${day}-${monthName}-${year}`;
};

export const formatDate = (dateValue) => {
	const resultantDate = new Date(dateValue);
	const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
	return resultantDate.toLocaleDateString("en-US", options);
};
