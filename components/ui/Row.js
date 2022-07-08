import { StyleSheet, Text, View } from 'react-native'

export default function Row({ children, style }) {
	return (
		<View style={[styles.defaultStyle, style]}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	defaultStyle: {
		flexDirection: "row",
	}
})