import {
	StyleSheet,
	Text,
	View,
	Platform,
	StatusBar,
} from 'react-native';

export default function GameOverScreen() {
	return (
		<View style={styles.screen}>
			<Text style={styles.text}>GameOverScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		alignItems: "stretch",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
	},
	text: {
		borderWidth: 2,
	}
});