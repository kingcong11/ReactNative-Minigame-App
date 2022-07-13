import { Dimensions } from 'react-native'

const deviceWindowSize = Dimensions.get('window');

module.exports = Object.freeze({
	Colors: {
		primary500: "#6e053a",
		primary600: "#541333",
		appBackground: "#4e0329",
		appForeground: "#ddb52f",
		white: "#FFFFFF",
		black: "#000000",
	},
	Texts: {
		greeting: "Hello Player! Welcome to this app!",
	},
	// breakpoints is considered as ascending value
	Dimens: {
		deviceWindowWidth: deviceWindowSize.width,
		deviceWindowHeight: deviceWindowSize.height,
		smallDeviceWidthBreakpoint: 370,
		normalDeviceWidthBreakpoint: 395,
	}
});