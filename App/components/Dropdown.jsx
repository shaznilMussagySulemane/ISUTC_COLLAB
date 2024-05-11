// import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import DropdownButton from "./DropdownButton";

export default function Dropdown(props) {
    
    const [active, setActive] = useState(false);
    const [value, setValue] = useState(props.initialValue);
    
    function _addValues(values) {
        let _values = []
    
        // const [value, setValue] = useState('Estado Civil');
    
        for (let i = 0; i < values.length; i++) {
            const element = values[i];
            
            _values.push(<DropdownButton onPress={()=>{setValue(element), setActive(false)}} value={element} />)
        }
        return (_values)
    }

    return (
        <TouchableOpacity touchSoundDisabled={false} onPress={() => setActive(!active)} style={styles.input_div}>
            <View style={styles.input_field}>
                <View style={{
                    flexDirection: "row",
                    alignItems: "center"
                }}>
                    <FontAwesomeIcon icon={props.icon_start} />
                    <Text style={styles.text}>
                        {value}
                    </Text>
                </View>

                <View>
                    <FontAwesomeIcon icon={props.icon_end} />
                </View>
            </View>

            {active ? 
            (
                <View style={styles_dropdown.cardView}>
                    {_addValues(props.values)}
                    {/* <DropdownButton onPress={()=>{setValue('Casado'), setActive(false)}} value="Casado" /> */}
                </View>
            ) : null}

        </TouchableOpacity>
    )
}

const styles_dropdown = StyleSheet.create({
    cardView: {
        zIndex:1,
        // position: "absolute",
        backgroundColor: "transparent",
        width: "100%",
        borderColor: "#DDDDDD",
        borderWidth: 2,
        borderRadius: 8,
        gap: 1,
        marginBottom: 20
    }
})

const styles = StyleSheet.create({
    input_field: {
        zIndex:0,
        width: "100%",
        position: "relative",
        alignItems: "center",
        justifyContent: "space-between",
        height: 50,
        marginBottom: 20,
        maxWidth: 350,
        flexDirection: "row",
        paddingHorizontal: 20,

        maxHeight: 50,
        borderRadius: 8,
        backgroundColor: "#EEEEEE"
    },
    input_div: {
        width: "100%",
        maxWidth: 350,
        gap: 10,
    },
    text: {
        paddingLeft: 15,
        fontSize: 16
    }
})