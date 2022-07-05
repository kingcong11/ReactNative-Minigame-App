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
				keyboardType='number-pad'
				autoCorrect={false}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		backgroundColor: "#3b021f",
		alignItems: "center",
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
		height: 60,
		color: "#ddb52f",
		marginVertical: 8,
		textAlign: 'center',
	},
	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',

	},
	buttonContainer: {
		flex: 1
	}
});

export default StartGameScreen;