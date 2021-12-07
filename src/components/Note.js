import React from "react";
import { TouchableOpacity, Text } from "react-native";

const Note = ({ navigation, item }) => {

    const note = item.item
    
    return (
        <TouchableOpacity onPress={() => navigation.navigate('Edit', {id: note.id})} >
            <Text> - {note.content}</Text>
        </TouchableOpacity>
    )
}

export default Note