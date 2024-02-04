import { StatusBar } from 'expo-status-bar'
import {
	Alert,
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
} from 'react-native'

import AddTodo from './components/AddTodo'
import Header from './components/Header'

export default function App() {
	const handleTestPress = () =>
		Alert.alert('Kangaroo', 'YA RODILSA?', [
			{ text: 'DA', onPress: () => console.log('ON RODILSA') },
			{ text: 'NE', onPress: () => console.log('ON NE RODILSA') },
		])

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('./assets/8bit.jpg')}
				style={{ height: '100%', width: '100%' }}
			>
				<Header></Header>
				<AddTodo></AddTodo>

				<TextInput style={styles.input} placeholder='Шо добавить...' />
				<TouchableOpacity onPress={handleTestPress} style={styles.button}>
					<Text style={{ fontSize: 20 }}>Кнопка</Text>
				</TouchableOpacity>

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
	paragraph: {
		textAlign: 'center',
		color: 'blue',
		fontSize: 20,
	},
	button: {},
	input: {},
})
