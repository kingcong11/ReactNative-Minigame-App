import {
	View,
	Text,
	Pressable,
	StyleSheet,
	Platform
} from 'react-native';
import { Colors, Texts } from '../constants/values';

function PrimaryButton({ children, btnOnTap }) {
	return (
		<View style={styles.buttonOuterContainer}>
			<Pressable
				style={(pressedData) => {
					if (pressedData.pressed && Platform.OS == "ios") {
						return [styles.buttonInnerContainer, styles.iosButtonPressed];
					}
					return styles.buttonInnerContainer;
				}}
				android_ripple={{ color: Colors.primary600 }}
				onPress={btnOnTap}
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
		backgroundColor: Colors.primary500,
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