import {
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
	Image,
	Dimensions,
	useWindowDimensions,
	ScrollView
} from 'react-native';
import { Colors, Dimens } from '../constants/values';


/* Components */
import Column from '../components/ui/Column';
import BoxedTitle from '../components/BoxedTitle';
import PrimaryButton from '../components/PrimaryButton';


const isDeviceIsSmall = (Dimens.deviceWindowWidth <= Dimens.smallDeviceWidthBreakpoint);
console.log(`SMALL_DEVICE?: ${isDeviceIsSmall}`);


export default function GameOverScreen({ numberToGuess, attemptsMade, onRestart }) {

	/* Hooks */
	const { width, height } = useWindowDimensions();
	const isInPortraitMode = (height > width);


	let imageContainerSize, paddingTop;

	if (isInPortraitMode) {
		console.log({
			aa_mode: "PORTRAIT",
			bb_height: height,
			cc_width: width,
		});


		if (width <= Dimens.smallDeviceWidthBreakpoint) {
			//small device
			imageContainerSize = 260;
		} else {
			//large device
			imageContainerSize = 340;
		}
		paddingTop = 50;

	} else {
		console.log({
			aa_mode: "LANDSCAPE",
			bb_height: height,
			cc_width: width,
		});
		/* 
		||	in landscape mode our height here is actully the device's width so we compare the breakpoint to height when
		||	the device is is landscape mode
		*/

		if (height <= Dimens.smallDeviceWidthBreakpoint) {
			//small device
			imageContainerSize = 130;
			paddingTop = 0;

		} else {
			//large device
			imageContainerSize = 180;
			paddingTop = 10;
		}

	}

	const imageStyle = {
		height: imageContainerSize,
		width: imageContainerSize,
		borderRadius: imageContainerSize / 2,
	};


	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<Column style={[styles.screen, { paddingTop: paddingTop }]}>
				<BoxedTitle title="Game Over!"></BoxedTitle>
				<View style={[styles.imageContainer, imageStyle]}>
					<Image
						source={require('../assets/images/success.png')}
						style={styles.image}
					/>
				</View>
				<Text style={styles.summaryText}>
					The computer takes
					<Text style={styles.highlightText}> {attemptsMade} </Text>
					attempts to guess the number
					<Text style={styles.highlightText}> {numberToGuess}</Text>
					.
				</Text>
				<PrimaryButton btnOnTap={onRestart}>Start New Game</PrimaryButton>
			</Column >
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
		paddingTop: 50,
		backgroundColor: Colors.white
	},
	imageContainer: {
		// height: (Dimens.deviceWindowWidth <= Dimens.smallDeviceWidthBreakpoint) ? 260 : 340,
		// width: (Dimens.deviceWindowWidth <= Dimens.smallDeviceWidthBreakpoint) ? 260 : 340,
		// borderRadius: (Dimens.deviceWindowWidth <= Dimens.smallDeviceWidthBreakpoint) ? 130 : 170,
		marginVertical: 20,
		justifyContent: "center",
		alignItems: "center",
		overflow: "hidden",
		borderWidth: 6,
		borderColor: Colors.white,
	},
	image: {
		height: "100%",
		width: "100%",
	},
	summaryText: {
		textAlign: 'center',
		fontFamily: 'open-sans-regular',
		fontSize: 18,
		marginBottom: 10,
	},
	highlightText: {
		color: Colors.appBackground,
		fontFamily: "open-sans-bold",
		fontSize: 22,
	}
});