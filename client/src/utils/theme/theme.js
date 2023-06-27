import { createTheme } from "@material-ui/core";

export const pxToRem = (px) => `${px / 22.5}rem`;

export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVh1974 = (px) => `${px * 0.10266940451}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export default createTheme({
	palette: {
		primary: {
			main: "#BB86FC",
			light: "rgb(55,13,179,0.5)",
			dark: "rgb(55,13,179,0.2)",
		},
		secondary: {
			main: "#03DAC6",
		},
		error: {
			main: "#CF6679",
		},
		common: {
			white: "#FFFFFF",
			black: "rgb(0,0,0)",
		},
		text: {
			primary: "#000000",
			secondary: "#000000",
		},
		background: {
			default: "#181818",
		},
		divider: "rgb(255,255,255,0.5)",
		grey: {
			50: "rgb(255,255,255,0.5)",
			100: "rgb(255,255,255,0.65)",
			200: "rgb(255,255,255,0.85)",
			300: "rgb(255,255,255)",
			400: "rgb(0,0,0,0.5)",
			500: "rgb(0,0,0,0.65)",
			600: "rgb(0,0,0,0.85)",
		},
		cardBackground: {
			main: "rgb(28,28,28,0.5)",
			color: "#FFFFFF",
		},
		solidBackground: {
			main: "#282828",
		},
	},
	spacing: 8,
	typography: {
		pxToRem: (px) => pxToRem(px),
		pxToVh: (px) => pxToVh(px),
		pxToVw: (px) => pxToVw(px),
		pxToVh1974: (px) => pxToVh1974(px),
		h1: {
			fontSize: pxToRem(50),
		},
		// used MWB
		h2: {
			fontSize: pxToRem(40),
			color: "#BB86FC",
			lineHeight: "2.05rem",
		},
		// used
		h3: {
			fontSize: pxToRem(30),
			color: "rgb(255,255,255,0.5)",
		},
		h4: {
			fontSize: pxToRem(26),
		},
		// used
		h5: {
			fontSize: pxToRem(24),
			color: "rgb(255,255,255,0.65)",
			lineHeight: "normal",
		},
		h6: {
			fontSize: pxToRem(22),
		},
		// used MWD
		subtitle1: {
			fontSize: pxToRem(20),
			color: "rgb(255,255,255,0.85)",
			lineHeight: "normal",
		},
		subtitle2: {
			fontSize: pxToRem(18),
			color: "rgb(255,255,255,0.85)",
		},
		body1: {
			fontSize: pxToRem(20),
			color: "rgb(255,255,255)",
		},
		body2: {
			fontSize: pxToRem(20),
			color: "rgb(255,255,255,0.65)",
			lineHeight: "normal",
		},
		caption: {
			fontSize: pxToRem(16),
			color: "#FFFFFF",
		},
		overline: {
			fontSize: pxToRem(14),
			color: "inherit",
			textTransform: "none",
		},
		fontFamily: "Roboto",
	},
	overrides: {
		MuiGrid: {
			"spacing-xs-2": {
				width: `calc(100% - ${pxToRem(16)})`,
				margin: pxToRem(8),
			},
			"spacing-xs-4": {
				width: `calc(100% - ${pxToRem(32)})`,
				margin: pxToRem(8),
				"& > .MuiGrid-item": {
					padding: pxToRem(8),
				},
			},
		},
		MuiPaper: {
			root: {
				backgroundColor: "#181818",
			},
			rounded: {
				borderRadius: pxToRem(4),
			},
			elevation8: {
				boxShadow: `0px ${pxToRem(5)} ${pxToRem(5)} -${pxToRem(
					3
				)} rgba(0,0,0,0.2), 0px ${pxToRem(8)} ${pxToRem(10)} ${pxToRem(
					1
				)} rgba(0,0,0,0.14), 0px ${pxToRem(3)} ${pxToRem(14)} ${pxToRem(
					2
				)} rgba(0,0,0,0.12)`,
			},
		},
		MuiFormControl: {
			fullWidth: {
				margin: `${pxToRem(10)} 0`,
			},
		},
		MuiOutlinedInput: {
			input: {
				padding: `${pxToRem(28.75)} ${pxToRem(14)}`,
			},
			root: {
				"&:hover $notchedOutline": {
					borderColor: "#BB86FC",
				},
				"& $Mui-focused": {
					borderWidth: pxToRem(1),
				},
				borderRadius: pxToRem(4),
				borderWidth: pxToRem(1),
			},
			notchedOutline: {
				borderColor: "#FFFFFFA6",
				borderWidth: pxToRem(1),
			},
		},
		MuiInputLabel: {
			outlined: {
				transform: `translate(${pxToRem(25)}, ${pxToRem(30)}) scale(1)`,
			},
			root: {
				transform: `translate(${pxToRem(0)}, ${pxToRem(24)}) scale(1)`,
			},
		},
		PrivateNotchedOutline: {
			root: {
				padding: `0 ${pxToRem(8)}`,
				top: `-${pxToRem(5)}`,
				borderWidth: pxToRem(1),
				marginInlineStart: pxToRem(2),
				marginInlineEnd: pxToRem(2),
			},
			legendNotched: {
				maxWidth: pxToRem(1000),
				paddingInlineStart: pxToRem(2),
				paddingInlineEnd: pxToRem(2),
			},
			legendLabelled: {
				height: pxToRem(11),
				"& > $span": {
					paddingLeft: pxToRem(5),
					paddingRight: pxToRem(5),
				},
			},
		},
		MuiInputBase: {
			root: {
				color: "#FFFFFFA5",
			},
			input: {
				padding: `${pxToRem(6)} 0 ${pxToRem(7)}`,
			},
		},
		PrivateSwitchBase: {
			root: {
				padding: pxToRem(9),
			},
		},
		MuiIconButton: {
			sizeSmall: {
				padding: pxToRem(3),
			},
			root: {
				padding: pxToRem(12),
			},
		},
		MuiTableCell: {
			root: {
				padding: pxToRem(16),
				borderBottom: `${pxToRem(1)} solid #FFFFFFA5`,
			},
			paddingNone: {
				padding: pxToRem(16),
				"&:last-child": {
					padding: `${pxToRem(16)} 0 ${pxToRem(16)} ${pxToRem(16)}`,
				},
			},
			paddingCheckbox: {
				width: pxToRem(48),
				padding: `0 0 0 ${pxToRem(4)}`,
			},
		},
		MuiTableSortLabel: {
			icon: {
				fontSize: pxToRem(28),
				marginLeft: pxToRem(4),
				marginRight: pxToRem(4),
			},
		},
		MuiTablePagination: {
			toolbar: {
				minHeight: pxToRem(52),
				paddingRight: pxToRem(2),
				paddingLeft: pxToRem(2),
			},
			selectRoot: {
				marginRight: pxToRem(32),
				marginLeft: pxToRem(8),
			},
			select: {
				paddingRight: pxToRem(24),
				paddingLeft: pxToRem(8),
				paddingTop: pxToRem(10),
			},
			actions: {
				marginLeft: pxToRem(20),
			},
			input: {
				fontSize: pxToRem(20),
			},
		},
		MuiSelect: {
			icon: {
				top: `calc(50% - ${pxToRem(12)})`,
				color: "#FFFFFFA6",
			},
			root: {
				paddingRight: `${pxToRem(24)} !important`,
			},
			select: {
				minWidth: pxToRem(16),
			},
			nativeInput: {
				padding: `${pxToRem(1)} ${pxToRem(2)}`,
				borderWidth: `${pxToRem(2)}`,
			},
		},
		MuiPopover: {
			paper: {
				maxWidth: `calc(100% - ${pxToRem(32)})`,
				maxHeight: `calc(100% - ${pxToRem(96)}) !important`,
				minWidth: `${pxToRem(5)} !important`,
				minHeight: pxToRem(16),
			},
		},
		MuiList: {
			padding: {
				paddingTop: pxToRem(8),
				paddingBottom: pxToRem(8),
				paddingInlineStart: pxToRem(0),
			},
		},
		MuiMenuItem: {
			root: {
				paddingTop: pxToRem(6),
				paddingBottom: pxToRem(6),
				paddingRight: pxToRem(16),
				paddingLeft: pxToRem(16),
				minHeight: pxToRem(48),
				"&:hover": {
					background: "#282828",
				},
			},
		},
		MuiListItem: {
			root: {
				"&.Mui-selected": {
					backgroundColor: "#282828",
					"&:hover": {
						backgroundColor: "#282828",
					},
				},
				"&:hover": {
					backgroundColor: "#282828A5",
				},
			},
		},
	},
});
