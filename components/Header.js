import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';

function Header(props) {
    if (props.result === 'Victory!')
        return (<Text style={styles.textWin}>{props.result}</Text>);
    if (props.result === 'Defeat!')
        return (<Text style={styles.textLoose}>{props.result}</Text>);
    else
        return (<Text style={styles.text}>{props.result}</Text>);

}

const styles = StyleSheet.create({

    text:
    {
        fontSize: 24,
        fontWeight: '600',
    },
    textWin:
    {
        fontSize: 24,
        fontWeight: '600',
        color: 'green',
    },
    textLoose:
    {
        fontSize: 24,
        fontWeight: '600',
        color: 'red',
    }
})

export default Header;