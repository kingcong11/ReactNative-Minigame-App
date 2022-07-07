import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	Platform,
	Alert,
} from 'react-native';
import { useState } from 'react';
import { Colors } from '../constants/values';

/* Components */
import BoxedTitle from '../components/BoxedTitle.js';
import PrimaryButton from '../components/PrimaryButton.js';
import OpponentGuessCard from '../components/game/OpponentGuessCard.js';





/* Functions */
function generateRandomBetween(min, max, exclude) {
	/* 
	|| exclude is only used to remove the possibility of the the computer guessing the actual number on its first guess
	*/
	const RANDOM_NUMBER = Math.floor(Math.random() * (max - min)) + min;

	if (RANDOM_NUMBER === exclude) {
		return generateRandomBetween(min, max, exclude);
	} else {
		return RANDOM_NUMBER;
	}
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ numberToGuess }) {

	/* Hooks */
	const initialGuess = generateRandomBetween(minBoundary, maxBoundary, numberToGuess);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);

	/* Functions */
	function nextGuess(direction) {

		/*
		||	DIRECTION -> ["HIGHER", "LOWER"]
		*/


		if ((direction === "LOWER" && currentGuess < numberToGuess) || (direction === "HIGHER" && currentGuess > numberToGuess)) {
			/* Player mistakenly chosen the wrong direction or lying */
			Alert.alert(
				"That doesn't seems right?",
				"play fair!",
				[
					{
						text: "okay",
						style: 'destructive',
					},
				],
				{
					cancelable: false,
				}
			);
			return;
		}



		console.log(`OPPONENT'S GUESS: ${currentGuess}`);
		console.log(`CHOSEN DIRECTION: ${direction}`);
		if (direction === "LOWER") {
			maxBoundary = currentGuess; //the current guess is too high so we set the max boundary to the current guess
		} else {
			minBoundary = currentGuess + 1; //the current guess is too low so we set the max boundary to the current guess
		}

		const NEW_GUESSED_NUMBER = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
		console.log(`NEW BOUNDERIES:`, { min: minBoundary, max: maxBoundary - 1 });
		setCurrentGuess(NEW_GUESSED_NUMBER);
	}

	return (
		<View style={styles.screen}>
			<OpponentGuessCard currentGuess={currentGuess} onChooseDirection={nextGuess} />
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: "column",
		justifyContent: "flex-start",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
	},
});

export default GameScreen;