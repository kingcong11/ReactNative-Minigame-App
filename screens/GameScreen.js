import {
	StyleSheet,
	View,
	Text,
	StatusBar,
	Platform,
	Alert,
	FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import { Colors } from '../constants/values';

/* Components */
import BoxedTitle from '../components/BoxedTitle.js';
import PrimaryButton from '../components/PrimaryButton.js';
import OpponentGuessCard from '../components/game/OpponentGuessCard.js';
import Column from '../components/ui/Column';
import Row from '../components/ui/Row';
import TranslucentCard from '../components/ui/TranslucentCard';


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

function GameScreen({ numberToGuess, onSuccesfulGuess }) {

	/* Hooks */
	const initialGuess = generateRandomBetween(1, 100, numberToGuess);
	const [currentGuess, setCurrentGuess] = useState(initialGuess);
	const [guessRounds, setGuessRounds] = useState(
		[
			{
				id: Math.random().toString(),
				guess: initialGuess
			}
		]
	);

	useEffect(() => {
		/* 
		|| this useEffect is only executed when this component is first evaluated or removed from ui and then back again.
		*/

		//this ensures that whenever the gamescreen is evaluated for the first time or reevaluated, min and max boundary is reset.
		minBoundary = 1;
		maxBoundary = 100;
	}, []);

	useEffect(() => {
		/* 
		|| this useEffect serves as 'onUpdateFunction' whenever the component reevaluated or there are changes in the dependecies listed below this function
		*/
		if (currentGuess === numberToGuess) {
			const totalAttemps = guessRounds.length;
			onSuccesfulGuess(totalAttemps);
		}
	}, [currentGuess]);

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
		setGuessRounds((currentGuessRounds) => [
			{
				id: Math.random().toString(),
				guess: NEW_GUESSED_NUMBER
			},
			...currentGuessRounds,
		]);
	}

	return (
		<Column style={styles.screen}>
			<OpponentGuessCard currentGuess={currentGuess} onChooseDirection={nextGuess} />
			<TranslucentCard style={styles.card}>
				<Column style={styles.cardColumn}>
					<Text style={styles.cardTitle}>Round Logs</Text>
					<View style={styles.listContainer}>
						<FlatList
							data={guessRounds}
							keyExtractor={(item, index) => item.id}
							renderItem={(guessRoundsObject) => {
								return (
									<Row style={styles.guessItem}>
										<Text style={styles.guessItemText}>Opponent's guess no. {guessRounds.length - guessRoundsObject.index}</Text>
										<Text style={styles.guessItemText}>{guessRoundsObject.item.guess}</Text>
									</Row>
								);
							}}
						/>
					</View>
				</Column>
			</TranslucentCard>
		</Column>
	);
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "flex-start",
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
	},
	card: {
		flex: 1,
		alignItems: "stretch",

	},
	cardColumn: {
		flex: 1,
	},
	listContainer: {
		flex: 1,
		marginTop: 15,
		paddingHorizontal: 15,
		paddingVertical: 10,
		borderRadius: 15,
		borderWidth: 2,
		borderColor: Colors.appForeground,
	},
	cardTitle: {
		// borderWidth: 2,
		fontFamily: 'open-sans-bold',
		fontSize: 20,
		color: Colors.appForeground,
		textAlign: "center"
	},
	guessItem: {
		backgroundColor: 'orange',
		marginVertical: 4,
		paddingVertical: 4,
		paddingHorizontal: 6,
		justifyContent: 'space-between',
	},
	guessItemText: {
		fontFamily: 'open-sans-regular',
		fontSize: 16,
	},
});

export default GameScreen;