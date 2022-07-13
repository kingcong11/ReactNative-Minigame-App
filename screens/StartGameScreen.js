import {
	View,
	StyleSheet,
	Platform,
	StatusBar,
	useWindowDimensions,
	KeyboardAvoidingView,
	ScrollView,
	Text
} from 'react-native';
import { Colors, Dimens } from '../constants/values';

/* Components */
import PlayerNumberCard from '../components/game/PlayerNumberCard';
import BoxedTitle from '../components/BoxedTitle';

function StartGameScreen({ onSuccessConfirmNumber }) {

	const { width, height } = useWindowDimensions();

	// if the device is in landscape mode, the original device width becomes the hight so we compare it to the current height
	const paddingTopByOrientation = (height <= Dimens.smallDeviceWidthBreakpoint) ? 10 : 50;

	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
			<KeyboardAvoidingView style={styles.flex} behavior="padding">
				< View style={[styles.screen, { paddingTop: paddingTopByOrientation }]} >
					<BoxedTitle title="Guess my Number"></BoxedTitle>
					<PlayerNumberCard onSuccessConfirmNumber={onSuccessConfirmNumber} />
				</View >
			</KeyboardAvoidingView>
		</ ScrollView>
	);
}



const styles = StyleSheet.create({
	screen: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'flex-start',
		alignItems: 'center',
		paddingHorizontal: 24,
		marginTop: (Platform.OS == 'android') ? StatusBar.currentHeight : 0,
		paddingTop: 80,
	},
	flex: {
		flex: 1,
	},

});

export default StartGameScreen;