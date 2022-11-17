import { createSlice } from "@reduxjs/toolkit";

const contactsInitialState = [
    {
        id: 0,
        name: 'wqewwqewqe',
        number: '213213213123',
    },
    {
        id: 1,
        name: 'ghgjgjghjgj',
        number: '2132768687678',
    },
    {
        id: 2,
        name: 'bnmnbmbnmmn',
        number: '687868678768',
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