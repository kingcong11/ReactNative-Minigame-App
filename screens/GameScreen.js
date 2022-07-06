import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	Platform,
} from 'react-native';
import BoxedTitle from '../components/BoxedTitle.js';
import { Colors } from '../constants/values'

function GameScreen() {
	return (
		<View style={styles.screen}>
			<View style={styles.containerOne}>
				<BoxedTitle title="Opponent's Guess" />
				<Text style={styles.subHeading}>Higher or Lower?</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
	},
	containerOne: {
		flexDirection: "column",
		alignItems: "center",
		height: 300,
		backgroundColor: 'rgba(78, 3, 41, 0.5)',
		paddingVertical: 10,
		marginTop: 10,
		borderRadius: 25,
		elevation: 3,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: .25,
	},
	subHeading: {
		fontSize: 16,
		fontWeight: "bold",
		marginTop: 10,
		color: Colors.appForeground,
	}
});

export default GameScreen;