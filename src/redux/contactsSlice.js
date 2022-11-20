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
            const index = state.contact.findIndex(item => item.id === action.payload);
            state.contact.splice(index, 1);
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

//Selector
export const getContacts = state => state.contacts.contact;
export const getFilter = state => state.contacts.filter;