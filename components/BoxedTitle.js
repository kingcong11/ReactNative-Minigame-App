import { StyleSheet, Text, View } from 'react-native'
import { Colors } from '../constants/values.js'

export default function BoxedTitle({ title }) {
	return (
		<Text style={styles.title}>{title}</Text>
	);
}

const styles = StyleSheet.create({
	title: {
		fontFamily: 'open-sans-bold',
		fontSize: 24,
		color: Colors.appForeground,
		textAlign: "center",
		borderWidth: 2,
		borderColor: Colors.appForeground,
		padding: 12,
		maxWidth: "80%",
		minWidth: "60%"
	}
});