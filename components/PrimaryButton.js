import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Platform
} from 'react-native';

function PrimaryButton({ children }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={(pressedData) => {
					if (pressedData.pressed && Platform.OS == "ios") {
						return [styles.buttonInnerContainer, styles.iosButtonPressed];
					}
					return styles.buttonInnerContainer;
				}}
				android_ripple={{ color: "#541333" }}
			>
				<Text style={styles.buttonText}>{children}</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
	buttonOuterContainer: {
		borderRadius: 25,
		overflow: 'hidden',
		marginVertical: 5,
		marginHorizontal: 5,
	},
	buttonInnerContainer: {
		backgroundColor: "#6e053a",
		flexDirection: "column",
		alignItems: "center",
		padding: 14,
		elevation: 3,
	},
	iosButtonPressed: {
		opacity: 0.75,
	},
	buttonText: {
		color: "#FFFFFF",
		fontSize: 16,
	}

});

export default PrimaryButton;