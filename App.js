import { StatusBar } from 'expo-status-bar';
import { collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import { StyleSheet, TextInput, Text, SafeAreaView, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { db } from './components/firebase';

import Header from './components/Header';
import AddTodo from './components/AddTodo';

export default function App() {

  const handleTestPress = () => Alert.alert('Kangaroo', 'YA RODILSA?', [
    {text: 'DA', onPress: () => console.log('ON RODILSA')},
    {text: 'NE', onPress: () => console.log('ON NE RODILSA')}
  ]);

  return (
    <SafeAreaView style={styles.container}>
        <ImageBackground source={
          require('./assets/8bit.jpg')
          }
          style={{height: '100%', width: '100%'}}
        >
        <Header></Header>
        <AddTodo></AddTodo>

        {/* <Text style={styles.paragraph}>Анастейша зацени</Text> */}
        <TextInput
          style={styles.input}
          placeholder='Шо добавить...'
        />
        <TouchableOpacity onPress={handleTestPress} style={styles.button}>
          <Text style={{fontSize: 20}}>Кнопка</Text>
        </TouchableOpacity>
        
        <StatusBar style="auto" />
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  paragraph: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 20,
  },
  button: {
    display: 'flex',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: 150,
    height: 40,
    margin: 5,
    borderRadius: 15,
  },
  input: {
    alignSelf: 'center',
    backgroundColor: 'white',
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    margin: 5,
    width: 300,
    height: 40,
    borderRadius: 5,
  }
});
