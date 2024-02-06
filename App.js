import { StatusBar } from 'expo-status-bar'
import {
	ImageBackground,
	SafeAreaView,
	StyleSheet,
	Text,
	TouchableOpacity
} from 'react-native'

import AddTodo from './components/AddTodo'
import Header from './components/Header'

export default function App() {

	return (
		<SafeAreaView style={styles.container}>
			<ImageBackground
				source={require('./assets/8bit.jpg')}
				style={{ height: '100%', width: '100%' }}
			>
				<Header></Header>
				<AddTodo></AddTodo>

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
