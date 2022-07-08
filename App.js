import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	ImageBackground,
	SafeAreaView,
	Platform,
	StatusBar,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useCallback, useEffect, useState } from 'react';
import * as Fonts from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

/* Screens */
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

	/* Hooks */
	const [numberToGuess, setNumberToGuess] = useState(null);
	const [gameIsOver, setGameIsOver] = useState(false);
	const [appIsReady, setAppIsReady] = useState(false);
	const fontsToLoad = {
		'open-sans-regular': require('./assets/fonts/OpenSans/OpenSans-Regular.ttf'),
		'open-sans-bold': require('./assets/fonts/OpenSans/OpenSans-Bold.ttf'),
	};



	/* Functions */

	useEffect(() => {



		initializeApp();
		// return () => {}; //on disposefunction
	}, []);

	async function initializeApp() {
		try {
			console.log(`INITIALIZING APPLICATION`);
			await SplashScreen.preventAutoHideAsync();
			await Fonts.loadAsync(fontsToLoad);
		} catch (error) {
			console.warn(error);
		} finally {
			setAppIsReady(true);
		}
	}

	const onLayoutRootView = useCallback(async () => {
		if (appIsReady) {
			console.log(`APPLICATION INITIALIZED`);
			await SplashScreen.hideAsync();
		}
	}, [appIsReady]);

	function confirmNumberToGuess(confirmedNumber) {
		setNumberToGuess(confirmedNumber);
		console.log(`NUMBER TO GUESS: ${confirmedNumber}`);
	}

	function succesfulGuessHandler() {
		setGameIsOver(true);
	}


	/* Screen Manager */

	if (!appIsReady) {
		return null;
	}

	let screenToShow = <StartGameScreen onSuccessConfirmNumber={confirmNumberToGuess} />;

	if (numberToGuess !== null) {
		screenToShow = <GameScreen numberToGuess={numberToGuess} onSuccesfulGuess={succesfulGuessHandler} />;
	}

	if (gameIsOver && numberToGuess !== null) {
		screenToShow = <GameOverScreen />
	}

	/* ============================================================ */


	return (
		<LinearGradient colors={["#4e0329", "#ddb52f",]} style={styles.rootScreen} onLayout={onLayoutRootView}>
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
