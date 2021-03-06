import React, { useState } from 'react';
import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Platform
} from 'react-native';

import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home(){
	const [newSkill, setNewSkill] = useState('')
	const [mySkills, setMySkills] = useState([])

	function handleAddNewSkill() {
		setMySkills(oldState => [...oldState, newSkill])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Welcome, @jpedrodl</Text>
			<TextInput
				style={styles.input}
				placeholder="New skill"
				placeholderTextColor="#555"
				onChangeText={setNewSkill}
			/>

			<Button />

			<Text style={[styles.title, {marginTop: 50}]}>My Skills</Text>

			{
				mySkills.map(skill => (
					<SkillCard />
				))
			}
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
	},
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
