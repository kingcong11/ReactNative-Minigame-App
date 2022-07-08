import {
	TextInput,
	View,
	StyleSheet,
	Alert,
	Platform,
	StatusBar,
	Text
} from 'react-native';
import { useState } from 'react';
import { Colors } from '../constants/values';

/* Components */
import PlayerNumberCard from '../components/game/PlayerNumberCard';
import BoxedTitle from '../components/BoxedTitle';

function StartGameScreen({ onSuccessConfirmNumber }) {

	return (
		<View style={styles.screen}>
			<BoxedTitle title="Guess my Number"></BoxedTitle>
			<PlayerNumberCard onSuccessConfirmNumber={onSuccessConfirmNumber} />
		</View>
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
		paddingTop: 30
	},

});

export default StartGameScreen;