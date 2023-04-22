// eslint-disable-next-line import/prefer-default-export
export const COPYRGHT_TXT_FOOTER = `© Copyright ${new Date().getFullYear()} The Real Virus - 13. All Rights Reserved`;
export const TRANSACTION_HEADER_CELLS = [
	{
		id: "item",
		numeric: false,
		disablePadding: true,
		label: "Item",
	},
	{
		id: "paymentType",
		numeric: false,
		disablePadding: true,
		label: "Payment Type",
	},
	{
		id: "amount",
		numeric: true,
		disablePadding: true,
		label: "Amount",
	},
	{
		id: "paymentMode",
		numeric: false,
		disablePadding: true,
		label: "Payment Mode",
	},
	{
		id: "transactionDate",
		numeric: false,
		disablePadding: true,
		label: "Transaction Date",
	},
	{
		id: "description",
		numeric: false,
		disablePadding: true,
		label: "Descriptions",
	},
];
