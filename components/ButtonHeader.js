import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ButtonHeader(props) {

    return (
        <TouchableOpacity onPress={props.onPressHeaderBtn}>
            <Icon name="th-large" size={24} color="black" />

        </TouchableOpacity>
    );

}



export default ButtonHeader;