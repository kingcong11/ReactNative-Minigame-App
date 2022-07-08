import { StyleSheet, Text, View } from 'react-native'

export default function TranslucentCard({ children, style }) {
	return (
		<View style={[styles.card, style]}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	card: {
		flexDirection: "column",
		justifyContent: "flex-start",
		alignItems: "center",
		backgroundColor: "rgba(78, 3, 41, 0.5)",
		padding: 15,
		marginVertical: 10,
		borderRadius: 25,
		elevation: 3,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 6,
		shadowOpacity: .25,
	}
})