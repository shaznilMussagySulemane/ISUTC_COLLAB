import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";

function setProgress(numOfSteps, progress) {
    var _disable = <View style={styles.progress_disable}></View>
    var _enable = <View style={styles.progress_enable}></View>
    var _steps = []

    for (let i = 1; i <= numOfSteps; i++) {

        let _isCompleted = false

        if (i <= progress) {
            _steps.push(_enable)
        } else {
            _steps.push(_disable)
        }

    }
    return (_steps)
}

export default function ProgressHeader(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.progress_counter}>
                {props.CurrentStep}/{props.TotalSteps}
            </Text>
            <View style={styles.progress_group}>

                {setProgress(props.TotalSteps, props.CurrentStep)}

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#1FA6EC',
        height: 150,
        width: "100%",
        alignItems: 'center',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        paddingHorizontal: 20
    },
    progress_counter: {
        fontWeight: "900",
        fontSize: 20,
        color: "#ffffff",
        width: "100%",
        marginTop: "auto",
        textAlign: 'right'
    },
    progress_group: {
        width: '100%',
        marginTop: 30,
        marginBottom: 40,
        gap: 5,
        alignItems: 'center',
        justifyContent: "space-between",
        flexDirection: 'row'
    },
    progress_enable: {
        flex: 1,
        borderRadius: 10,
        backgroundColor: "#126592",
        height: 10
    },
    progress_disable: {
        borderRadius: 10,
        flex: 1,
        backgroundColor: "#C4EBFF",
        height: 10
    }
})