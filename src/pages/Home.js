import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	TouchableOpacity
} from 'react-native';

export function Home(){
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome, @jpedrodl</Text>
			<TextInput
				style={styles.input}
				placeholder="New skill"
				placeholderTextColor="#555"
			/>
			<TouchableOpacity
				style={styles.button}
				activeOpacity={.66}
			>
				<Text style={styles.buttonText}>Add</Text>
			</TouchableOpacity>
				<Text style={[styles.title, {marginTop: 50}]}>My Skills</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 30,
		paddingVertical: 60

	},
	title: {
		color: '#FFF',
		fontSize: 24
		,
		fontWeight: 'bold'
	},
	input: {
		backgroundColor: '#1F1E25',
		color: '#FFF',
		fontSize: 18,
		padding: 15,
		marginTop: Platform.OS === 'IOS' ? 15 : 10,
		borderRadius: 6
	},
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
