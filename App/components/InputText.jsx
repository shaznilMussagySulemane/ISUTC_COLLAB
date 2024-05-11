import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRef, useState } from 'react';

export default function InputText (props) {
    return (
        <View style={styles.inputField}>
            <FontAwesomeIcon icon={props.icon} color='#5C6265'/>
            <TextInput placeholderTextColor={"#5C6265"} placeholder={props.placeholder} style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputField: {
        flex: 1,
        width: "100%",
        maxWidth: 350,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "flex-start",
        height: 50,
        minHeight: 50,
        maxHeight: 50,
        paddingHorizontal: 20,
        borderRadius: 8,
        backgroundColor: "#EEEEEE",
        marginBottom: 20
    },
    input: {
        width: "auto",
        paddingLeft: 15,
        width: "100%",
        color: "#333333",
        fontSize: 16,
        
        tintColor: "#333333"
    }
})