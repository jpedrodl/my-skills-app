import React from "react"
import {
	Text,
	StyleSheet,
	TouchableOpacity,
} from 'react-native'

export function SkillCard(){
	return (
		<TouchableOpacity
		style={styles.buttonSkill}
		activeOpacity={.58}
		>
			<Text key="1" style={styles.textSkill}>
				skill
			</Text>
		</TouchableOpacity>
	)
}


const styles = StyleSheet.create({
	buttonSkill: {
		backgroundColor: '#1F1E25',
		padding: 16,
		borderRadius: 50,
		marginVertical: 10,
		alignItems: 'center',
	},
	textSkill: {
		color: '#FFF',
		fontSize: 22,
		fontWeight: 'bold',
	}
})
