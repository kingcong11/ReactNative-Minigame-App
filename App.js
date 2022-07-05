import { StatusBar } from 'expo-status-bar';
import {
	StyleSheet,
	ImageBackground,
	Text,
	View
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import StartGameScreen from './screens/StartGameScreen';

export default function App() {
	return (
		<LinearGradient colors={["#4e0329", "#ddb52f",]} style={styles.rootScreen}>
			<ImageBackground
				source={require('./assets/images/background.png')}
				resizeMode='cover'
				style={styles.rootScreen}
				imageStyle={styles.actulImageBackground}
			>
				<StartGameScreen />
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
	}
});
