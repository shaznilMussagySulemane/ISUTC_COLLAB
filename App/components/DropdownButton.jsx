// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircle, faCircleCheck } from "@fortawesome/free-regular-svg-icons";


export default function DropdownButton(props) {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.input_field}>
            <FontAwesomeIcon icon={faCircle} color="#5C6265"/>
            <Text style={styles.text}>{props.value}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    input_field: {
        width: "100%",
        position: "relative",
        alignItems: "center",
        height: 50,
        maxWidth: 350,
        flexDirection: "row",
        paddingHorizontal: 20,
        borderRadius: 8,
        maxHeight: 50,
        backgroundColor: "#FFFFFF"
    },
    text: {
        width: "100%",
        fontSize: 16,
        fontWeight: "bold",
        letterSpacing: 2,
        textAlign: "left",
        paddingLeft: 10
    }
})