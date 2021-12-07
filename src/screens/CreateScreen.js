import React, { useContext } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { useState } from 'react/cjs/react.development';
import { NotesContext } from '../context/NotesContext';

const CreateScreen = ({ navigation }) => {

    const notesContext = useContext(NotesContext);

    const [content, setContent] = useState("");

    const createNote = () => {
        notesContext.create(content);
        navigation.goBack();
    }

    return (
        <View>
            <Text>Note:</Text>
            <TextInput
                style={styles.textInput}
                onChangeText={setContent}
                value={content} />
            <Button title='save' onPress={createNote} />
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        padding: 10
    }
})

export default CreateScreen;