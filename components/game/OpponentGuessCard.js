import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../constants/values';
import { FontAwesome } from '@expo/vector-icons/';

/* Components */
import BoxedTitle from '../BoxedTitle';
import PrimaryButton from '../PrimaryButton';
import Column from '../ui/Column';
import Row from '../ui/Row';


export default function OpponentGuessCard({ currentGuess, onChooseDirection }) {
	return (
		<Column style={styles.containerOne}>
			<BoxedTitle title="Opponent's Guess" />
			<Text style={styles.guessText}>{currentGuess}</Text>
			<Text style={styles.subHeading}>Higher or Lower?</Text>

			<Row style={styles.btnsContainer}>
				<View style={styles.btnContainer}>
					<PrimaryButton btnOnTap={onChooseDirection.bind(this, "LOWER")}>
						<FontAwesome name='arrow-down' size={25} />
					</PrimaryButton>
				</View>
				<View style={styles.btnContainer}>
					<PrimaryButton btnOnTap={() => onChooseDirection("HIGHER")}>
						<FontAwesome name='arrow-up' size={25} />
					</PrimaryButton>
				</View>
			</Row>
		</Column>
	);
}

const styles = StyleSheet.create({
	containerOne: {
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
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
		// backgroundColor: Colors.white,
		paddingHorizontal: 28,
	},
	btnContainer: {
		flex: 1,
	}
});