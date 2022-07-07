import { StyleSheet, Text, View } from 'react-native'
import { useState } from 'react';
import { Colors } from '../../constants/values';

/* Components */
import BoxedTitle from '../BoxedTitle';
import PrimaryButton from '../PrimaryButton';





export default function OpponentGuessCard({ currentGuess, onChooseDirection }) {
	return (
		<View style={styles.containerOne}>
			<BoxedTitle title="Opponent's Guess" />
			<Text style={styles.guessText}>{currentGuess}</Text>
			<Text style={styles.subHeading}>Higher or Lower?</Text>


			<View style={styles.btnsContainer}>
				<View style={styles.btnContainer}>
					<PrimaryButton btnOnTap={onChooseDirection.bind(this, "LOWER")}>Lower</PrimaryButton>
				</View>
				<View style={styles.btnContainer}>
					<PrimaryButton btnOnTap={() => onChooseDirection("HIGHER")}>Higher</PrimaryButton>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	containerOne: {
		flexDirection: "column",
		alignItems: "center",
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
		color: Colors.appForeground,
		marginVertical: 10,
	},
	guessText: {
		padding: 10,
		color: Colors.white,
		fontWeight: "bold",
		fontSize: 55,
		textAlign: "center",
	},
	btnsContainer: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		// backgroundColor: Colors.white,
		paddingHorizontal: 30,
	},
	btnContainer: {
		flex: 1,
	}
});