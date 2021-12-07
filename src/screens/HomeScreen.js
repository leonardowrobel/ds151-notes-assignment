import React, { useContext } from 'react';
import { Button, FlatList, Text } from 'react-native';
import { NotesContext } from '../context/NotesContext';
import Note from '../components/Note';

const HomeScreen = ({ navigation }) => {

    const notesContext = useContext(NotesContext)

    if (notesContext.state.length == 0) {
        return (
            <>
                <Text>Notes list is empty</Text>
                <Button
                    title='add note'
                    onPress={() => navigation.navigate('Create')}
                />
            </>
        )
    }
    return (
        <>
            <Text>Your notes:</Text>
            <FlatList
                data={notesContext.state}
                renderItem={(item) => <Note navigation={navigation} item={item} />}
                keyExtractor={item => item.id.toString()}
            />
            <Button
                title='add note'
                onPress={() => navigation.navigate('Create')}
            />
        </>
    )
}

export default HomeScreen