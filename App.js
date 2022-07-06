import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Platform,
	StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';

/* Screens */
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {

	/* Hooks */
	const [numberToGuess, setNumberToGuess] = useState(null);

	/* Functions */
	function confirmNumberToGuess(confirmedNumber) {
		setNumberToGuess(confirmedNumber);
		console.log(`value of number to guess: ${numberToGuess}`);
	}

	let screenToShow = <StartGameScreen onSuccessConfirmNumber={confirmNumberToGuess} />;

	if (numberToGuess !== null) {
		screenToShow = <GameScreen />;
	}


	return (
		<LinearGradient colors={["#4e0329", "#ddb52f",]} style={styles.rootScreen}>
			<ExpoStatusBar style='light' />
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.actulImageBackground}
			>
				<SafeAreaView
					style={styles.safeArea}
				>
					{screenToShow}
				</SafeAreaView>
			</ImageBackground>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	rootScreen: {
		flex: 1,
	},
	actulImageBackground: {
		opacity: 0.17,
	},
	safeArea: {
		flex: 1,
	},
});
