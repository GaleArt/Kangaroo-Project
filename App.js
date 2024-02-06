import { StatusBar } from 'expo-status-bar'
import React from "react";
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
	Image
} from 'react-native'
import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection } from "firebase/firestore";

export default function App() {

	const [title, setTitle] = React.useState('')

	const handleSubmit = async e => {
		e.preventDefault()
		if (title !== '') {
			await addDoc(collection(db, 'todos'), { title, completed: false })
			setTitle('')
		}
	}

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('./assets/8bit.jpg')}
				style={{ height: '100%', width: '100%' }}
			>
				{/* Header :) */}
				<View style={styles.header}>
            		<Image source={
            		    require('./assets/kangaroo-icon.png')
            		    } 
            		    style={{height: 40, width: 40}}
            		    />
            		<Text style={styles.headerText}>Kangaroo Project</Text>
        		</View>

				{/* Input + "Add" button */}
				<View style={styles.addTodo}>
					<TextInput
						placeholder='Шо добавить...'
						onChangeText={e => setTitle(e.target.value)}
						style={styles.addInput}
					/>
					<TouchableOpacity style={styles.addButton} onPress={handleSubmit}>
						<Text style={styles.addButtonText}>Добавить</Text>
					</TouchableOpacity>
				</View>

				{/* Todo list */}

				<StatusBar style='auto' />
			</ImageBackground>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
	},
	header: {
		backgroundColor: 'white',
        width: '100%',
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
	},
	headerText: {
		fontSize: 20,
        color: 'blue',
        textAlign: 'right',
        margin: 5,
        marginLeft: 25,
	},
	addTodo: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	addInput: {
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
	addButton: {
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
	addButtonText: {
		fontSize: 18,
		color: 'black',
	},
})
