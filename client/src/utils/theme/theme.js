import { createTheme } from "@material-ui/core";

export const pxToRem = (px) => `${px / 22.5}rem`;

export const pxToVh = (px) => `${px * 0.09259}vh`;

export const pxToVh1974 = (px) => `${px * 0.10266940451}vh`;

export const pxToVw = (px) => `${px * 0.05208}vw`;

export default createTheme({
	palette: {},
	spacing: 8,
	typography: {},
	overrides: {},
});
