import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';

const contactsInitialState = [
    {
        id: nanoid(),
        name: 'Boby Rante',
        number: '213-21-32',
    },
    {
        id: nanoid(),
        name: 'Rut Mango',
        number: '213-27-68',
    },
    {
        id: nanoid(),
        name: 'Tony Hytro',
        number: '687-86-86',
    }
];

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,

    reducers: {
        addContacts(state, action) {
            state.push(action.payload);
        },
        deleteContacts(state, action) {
            const index = state.findIndex(contact => contact.id === action.payload);
            state.splice(index, 1);
        },
    }
});

export const { addContacts, deleteContacts } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;