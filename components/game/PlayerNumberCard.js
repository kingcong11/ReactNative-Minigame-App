import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native'
import { Colors } from '../../constants/values';

/* Components */
import PrimaryButton from '../PrimaryButton';
import BoxedTitle from '../BoxedTitle';

export default function PlayerNumberCard({ onSuccessConfirmNumber }) {

	/* Hooks */
	const [enteredNumber, setEnteredNumber] = useState('');

	/* Functions */
	function textInputHandler(enteredNumber) {
		setEnteredNumber(enteredNumber);
	}

	function resetNumber() {
		setEnteredNumber('');
	}

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
						onpress: resetNumber,
					},
				],
			);
		}
	}

	return (
		<View style={styles.inputContainer}>
			<Text style={styles.subHeading}>Enter a freakin number</Text>
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
					<PrimaryButton btnOnTap={confirmNumber}
					>Confirm</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: "column",
		alignItems: "center",
		backgroundColor: "#3b021f",
		padding: 24,
		marginTop: 10,
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
		color: Colors.white,
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
	},
	subHeading: {
		fontFamily: 'open-sans-regular',
		fontSize: 16,
		color: Colors.white,
		marginVertical: 10,
	},
});