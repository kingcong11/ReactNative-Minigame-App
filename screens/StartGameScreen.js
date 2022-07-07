import {
	TextInput,
	View,
	StyleSheet,
	Alert,
} from 'react-native';
import { useState } from 'react';
import PrimaryButton from '../components/PrimaryButton';
import { Colors } from '../constants/values';

function StartGameScreen({ onSuccessConfirmNumber }) {

	/* Hooks */
	const [enteredNumber, setEnteredNumber] = useState('');

	/* functions */
	function confirmNumber() {

		const parsedNumber = parseInt(enteredNumber);
		if ((parsedNumber > 0) && (parsedNumber < 100) && !isNaN(parsedNumber)) {
			onSuccessConfirmNumber(parsedNumber);
		} else {
			console.log(`Invalid number submitted`);
			Alert.alert(
				'Invalid Number',
				'Number has to be a number between 1 and 99 only.',
				[
					{
						text: "Okay",
						style: 'destructive',
						onPress: resetNumber,
					},
				],
			);
		}
	}

	function resetNumber() {
		setEnteredNumber('');
	}

	function textInputHandler(enteredNumber) {
		setEnteredNumber(enteredNumber);
	}

	return (
		<View style={styles.inputContainer}>
			<TextInput
				placeholder='0'
				value={enteredNumber.toString()}
				style={styles.textInput}
				placeholderTextColor="#FFFFFF"
				underlineColorAndroid={'transparent'}
				maxLength={2}
				keyboardType='number-pad'
				autoCorrect={false}
				onChangeText={textInputHandler}
			/>
			<View style={styles.buttonsContainer}>
				<View style={styles.buttonContainer}>
					<PrimaryButton btnOnTap={resetNumber}>Reset</PrimaryButton>
				</View>
				<View style={styles.buttonContainer}>
					<PrimaryButton btnOnTap={confirmNumber}>Confirm</PrimaryButton>
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
		borderColor: Colors.appForeground,
		width: 100,
		height: 60,
		color: Colors.appForeground,
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