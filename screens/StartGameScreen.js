import {
	TextInput,
	View,
	StyleSheet,
} from 'react-native';

import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='0'
				style={styles.textInput}
				placeholderTextColor="#FFFFFF"
				underlineColorAndroid={'transparent'}
				maxLength={2}
			/>
			<PrimaryButton>Reset</PrimaryButton>
			<PrimaryButton>Confirm</PrimaryButton>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#72063c",
		justifyContent: "space-between",
		alignItems: "center",
		height: "30%",
		padding: 24,
		marginTop: 100,
		marginHorizontal: 24,
		borderRadius: 25,
		elevation: 5,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: .25
	},
	textInput: {
		padding: 8,
		fontSize: 32,
		fontWeight: "bold",
		borderWidth: 2,
		borderRadius: 12,
		borderColor: "#ddb52f",
		width: 100,
		color: "#ddb52f",
		marginVertical: 8,
		textAlign: 'center',
	}
});

export default StartGameScreen;