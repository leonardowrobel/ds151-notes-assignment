import React, { useReducer, createContext, useState } from "react";

const NotesContext = createContext();

const NotesProvider = ({ children }) => {

    const [id, setId] = useState(1);

    const notesReducer = (state, action) => {
        switch (action.type) {
            case 'create':
                const newState = [...state]
                newState.push({ id: id, content: action.content });
                return newState
            case 'update':
                const updateState = [...state]
                updateState.forEach(note => {
                    if (note.id == action.id) {
                        note.content = action.content
                    }
                })
                return updateState
            case 'remove':
                const deleteState = [...state].filter((note) => note.id != action.id)
                return deleteState
            default:
                return { ...state };
        }
    };

    const [state, dispatch] = useReducer(notesReducer, [{ id: 0, content: 'none' }]);

    const create = (content) => {
        dispatch({ type: "create", content: content });
        setId(id + 1);
    }

    const read = (id) => {
        return state.find(x => x.id === id)
    }

    const update = (id, content) => {
        dispatch({ type: 'update', id: id, content: content })
    }

    const remove = (id) => {
        dispatch({ type: 'remove', id: id })
    }

    return (
        <NotesContext.Provider value={{ state, create, read, update, remove }}>
            {children}
        </NotesContext.Provider>
    );
};

export { NotesContext, NotesProvider };