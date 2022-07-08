import {
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
	Image
} from 'react-native';
import { Colors } from '../constants/values';


/* Components */
import Column from '../components/ui/Column';
import BoxedTitle from '../components/BoxedTitle';
import PrimaryButton from '../components/PrimaryButton';


export default function GameOverScreen({ numberToGuess, attemptsMade, onRestart }) {
	return (
		<Column style={styles.screen}>
			<BoxedTitle title="Game Over!"></BoxedTitle>
			<View style={styles.imageContainer}>
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
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
		paddingTop: 50,
	},
	imageContainer: {
		height: 350,
		width: 350,
		marginVertical: 20,
		borderRadius: 175,
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