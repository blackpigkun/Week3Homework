import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';


function GameplayGroup(props){
        return (
            <View style={styles.column}>
                <Text>{props.playerName}</Text>
                <Image
                    source={{uri:props.choice.uri }} resizeMode="contain" style={styles.choiceImage} />
                <Text>{props.choice.name}</Text>
            </View>
        );
}

const styles = StyleSheet.create({
    column: {
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    choiceImage: {
        height: 150,
        width:150,
    },

})
export default GameplayGroup;