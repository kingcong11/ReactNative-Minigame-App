import { StyleSheet, Text, View } from 'react-native'

export default function Column({ children, style }) {
	return (
		<View style={[styles.defaultStyle, style]}>
			{children}
		</View>
	)
}

const styles = StyleSheet.create({
	defaultStyle: {
		flexDirection: "column",
	}
})