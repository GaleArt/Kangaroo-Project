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
		<View style={styles.addTodo}>
			<TextInput
				placeholder='Шо добавить...'
				onChangeText={e => setTitle(e.target.value)}
				style={styles.input}
			/>
			<TouchableOpacity style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Добавить</Text>
			</TouchableOpacity>
		</View>
	)
}

const styles = StyleSheet.create({
	addTodo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	input: {
		alignSelf: 'center',
		backgroundColor: 'white',
		color: 'black',
		textAlign: 'left',
		paddingHorizontal: 12,
		fontSize: 18,
		marginVertical: 10,
		marginHorizontal: 5,
		width: 270,
		height: 40,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: '#666666',
	},
	button: {
		display: 'flex',
		alignSelf: 'center',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fffc3c',
		width: 100,
		height: 40,
		borderWidth: 2,
		borderRadius: 10,
		borderColor: '#666666',
		marginVertical: 10,
		marginHorizontal: 5,
	},
	buttonText: {
		fontSize: 18,
		color: 'black',
	},
})
