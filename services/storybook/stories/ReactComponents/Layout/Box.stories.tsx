import "@ds/react-components/src/styles.css";
import { Box as _Box } from "@ds/react-components-layout/src/layout/Box";

export default {
	title: "ReactComponents/Layout/Box",
	component: _Box,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"]
}

export const BoxStory = {
	args: {
		as: 'button',
		padding: '5',
		background: 'blue',
		boxShadow: 'xl',
		borderRadius: 'md',
	}
}