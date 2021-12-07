import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { NotesContext } from '../context/NotesContext';

const EditScreen = ({ navigation, route }) => {

    const notesContext = useContext(NotesContext);

    const { id } = route.params;
    const [content, setContent] = useState(notesContext.read(id).content);

    const updateNote = () => {
        notesContext.update(id, content)
        navigation.goBack();
    }

    const removeNote = () => {
        notesContext.remove(id)
        navigation.goBack();
    }

    return (
        <View>
            <Text>Note:</Text>
            <TextInput
                onChangeText={setContent}
                value={content} />
            <Button title='save' onPress={updateNote} />
            <Button title='remove' onPress={removeNote} />
            <Button title='back' onPress={navigation.goBack}/>
        </View>
    );
}

const styles = StyleSheet.create({})

export default EditScreen;