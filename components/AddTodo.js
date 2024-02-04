import React from "react";
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

export default function AddTodo() {
    const [title, setTitle] = React.useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (title !== "") {
            await addDoc(collection(db, "todos"), {title, completed:false});
            setTitle("");
        };
    };

    return (
        <View>
            <TextInput
                placeholder='Шо добавить...'
                onChangeText={(e) => setTitle(e.target.value)}
                style={{fontSize: 20}}
            />
            <TouchableOpacity onPress={handleSubmit} >
              <Text style={{fontSize: 20}}>Добавить</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    todo: {
    },
})