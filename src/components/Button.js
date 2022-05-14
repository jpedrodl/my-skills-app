import React from 'react'
import {
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'

export function Button(){
	return (
		<TouchableOpacity
		style={styles.button}
		activeOpacity={.58}
		// onPress={handleAddNewSkill}
		>
			<Text style={styles.buttonText}>Add</Text>
		</TouchableOpacity>
)
}


const styles = StyleSheet.create({
	button: {
		backgroundColor: '#002BFF',
		padding: 15,
		alignItems: 'center',
		borderRadius: 6,
		marginTop: 10
	},
	buttonText: {
		color: '#FFF',
		fontSize: 18,
	}
})
