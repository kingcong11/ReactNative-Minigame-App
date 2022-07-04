import {
	View,
	Text,
	Pressable,
	StyleSheet
} from 'react-native';

function PrimaryButton({ children }) {
	return (
		<View style={styles.buttonContainer}>
			<Text>{children}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonContainer: {
		backgroundColor: "lightgreen",
		flexDirection: "column",
		alignItems: "center",
		width: 120,
		padding: 8,
		borderRadius: 25,
	}
});

export default PrimaryButton;