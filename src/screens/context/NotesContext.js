import React, { useReducer, createContext } from "react";

const NotesContext = createContext()

const notesReducer = (state, action) => {
    switch (action.type) {
        case 'create':
            return ({ ...state, count: state.count + 1 });
        case 'read':
            return ({ ...state, count: state.count - 1 });
        case 'update':
            return ({ ...state, count: state.count + action.payload });
        case 'delete':
            return ({ ...state, count: state.count - action.payload });
        default:
            return ({ ...state })
    }
}


const NotesProvider = ({ children }) => {

    const [state, dispatch] = useReducer(notesReducer, [{}])

    const create = () => {
        dispatch({ type: 'create' })
    }

    return (
        <CounterContext.Provider value={{ state, create }} >
            {children}
        </CounterContext.Provider>
    )
}

export { NotesContext, NotesProvider }
