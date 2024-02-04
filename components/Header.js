import React from "react";
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Header() {
    return (
        <View style={styles.main}>
            <Image source={
                require('../assets/kangaroo-icon.png')
                } 
                style={{height: 40, width: 40}}
                />
            <Text style={styles.text}>Kangaroo Project</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: '100%',
        paddingTop: 30,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 20,
        color: 'blue',
        textAlign: 'right',
        margin: 5,
        marginLeft: 25,
    },
})