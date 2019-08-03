import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { CHOICES } from '../Const';
function ButtonGroup(props) {
    return CHOICES.map(item => {
        return (
            <TouchableOpacity key={item.name} style={styles.button} onPress={() => props.onPressButton(item.name)} /*onPressOut={()=> props.updateScore()}*/>
                <Text style={styles.text}>{item.name}</Text>
            </TouchableOpacity>
        );
    })
}


const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button:
    {
        backgroundColor: 'brown',
        marginVertical: 15,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
    },
    text:
    {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
    }
})

export default ButtonGroup;