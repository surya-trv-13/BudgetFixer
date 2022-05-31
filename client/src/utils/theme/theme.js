import { createTheme } from "@material-ui/core";

export const pxToRem = (px) => `${px / 22.5}rem`;

export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVh1974 = (px) => `${px * 0.10266940451}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export default createTheme({
	palette: {},
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
			color: "#5DAAE0",
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
		// used call prep
		subtitle2: {
			fontSize: pxToRem(18),
			color: "rgb(255,255,255,0.85)",
		},
		body1: {
			fontSize: pxToRem(20),
			color: "rgb(255,255,255)",
		},
		// used call prep
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
	overrides: {},
});
