import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { pxToRem } from "../../utils/theme/theme";

const styles = () => ({
	rootColumn: {
		display: "flex",
		flexDirection: "column",
	},
	rootRow: {
		display: "flex",
	},
	column: {
		display: "flex",
		flexDirection: "column",
	},
	rowInColumn: {
		display: "flex",
		flexShrink: "0",
	},
	row: {
		display: "flex",
		flexGrow: 1,
	},
});

function getRootWidth(root, outerMargin, width, spacing) {
	if (root) {
		if (outerMargin) {
			return `calc(${width} + ${pxToRem(spacing)})`;
		}
		return "100%";
	}
	return width;
}

function getRootMargin(root, outerMargin, spacing) {
	if (root) {
		if (outerMargin) {
			return pxToRem(-spacing / 2);
		}
		return "";
	}
	return "";
}

function renderElement(data, getComponent, classes, spacing, outerMargin) {
	const layoutType = data.alignment === "horizontal" ? "row" : "column";
	return (
		<div
			className={(() => {
				if (layoutType === "row") {
					if (data.root) {
						return classes.rootRow;
					}
					return classes.row;
				}
				if (data.root) {
					return classes.rootColumn;
				}
				return classes.column;
			})()}
			style={{
				width: getRootWidth(data.root, outerMargin, data.width, spacing),
				height: data.height,
				margin: getRootMargin(data.root, outerMargin, spacing),
			}}
		>
			{data.content.map((cardData, index) =>
				!cardData.content ? (
					<div
						className={classes.rowInColumn}
						key={`${index.toString().concat(cardData.height) + Math.random()}`}
						style={{
							boxSizing: "border-box",
							height: cardData.height,
							width: cardData.width,
							padding: pxToRem(spacing / 2),
						}}
					>
						{cardData.component ? getComponent(cardData.component) : ""}
					</div>
				) : (
					renderElement(cardData, getComponent, classes, spacing)
				)
			)}
		</div>
	);
}

function FlexGrid(props) {
	const { classes, getComponent, layoutConfiguration, outerMargin = false } = props;

	const { spacing } = layoutConfiguration;

	return renderElement(layoutConfiguration, getComponent, classes, spacing, outerMargin);
}

export default withStyles(styles)(FlexGrid);
