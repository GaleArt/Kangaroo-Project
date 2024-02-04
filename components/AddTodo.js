import { addDoc, collection } from 'firebase/firestore'
import React from 'react'
import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native'
import { db } from './firebase'

export default function AddTodo() {
	const [title, setTitle] = React.useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		if (title !== '') {
			await addDoc(collection(db, 'todos'), { title, completed: false })
			setTitle('')
		}
	}

	return (
		<View style={styles.todo}>
			<TextInput
				placeholder='Шо добавить...'
				onChangeText={e => setTitle(e.target.value)}
				style={styles.input}
			/>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={{ fontSize: 20 }}>Добавить</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	todo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		alignSelf: 'center',
		backgroundColor: 'white',
		color: 'black',
		textAlign: 'center',
		fontSize: 20,
		margin: 5,
		width: 250,
		height: 40,
		borderRadius: 10,
	},
	button: {
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#f6f676',
		color: 'black',
		width: 120,
		height: 40,
		fontSize: 20,
		borderRadius: 10,
		margin: 5,
	},
})
