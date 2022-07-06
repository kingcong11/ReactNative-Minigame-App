import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	Platform,
} from 'react-native';

function GameScreen() {
	return (
		<View style={styles.screen}>
			<View style={styles.containerOne}>
				<Text>sample text</Text>
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
		backgroundColor: "red",
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
	},
	containerOne: {
		height: 100,
		backgroundColor: 'limegreen',
	}
});

export default GameScreen;