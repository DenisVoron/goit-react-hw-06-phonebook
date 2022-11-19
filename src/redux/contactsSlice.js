import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

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
    initialState: {
        contact: contactsInitialState,
        filter: '',
    },

    reducers: {
        addContacts(state, action) {
            state.contact.push(action.payload);
        },
        deleteContacts(state, action) {
            state.contact = state.contact.filter(item => item.id !== action.payload);

            /*const index = state.items.findIndex(item => item.id === action.payload);
            state.items.splice(index, 1);*/
        },
        changeFilter(state, { payload }) {
            state.filter = payload;
        },
    }
});

const persistConfig = {
    key: 'contacts',
    storage,
    blacklist: ['filter'],
}

export const persistedContactReducer = persistReducer(
    persistConfig,
    contactsSlice.reducer
)

export const { addContacts, deleteContacts, changeFilter } = contactsSlice.actions;
//export const contactsReducer = contactsSlice.reducer;

//selector
export const getContacts = state => state.contacts;
export const getFilter = state => state.filter;