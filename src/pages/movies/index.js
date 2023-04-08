import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
	container: {
		backgroundColor: 'blue',
		height: '100%'
	}
})

const Movies = () => {
	return (
		<View style={styles.container}>
			<Text>Movies</Text>
		</View>
	)
}

export default Movies