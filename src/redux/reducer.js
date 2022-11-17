//=============== Reducer Slice ========================
//этот файл больше не нужен для слайса
//import { addContacts, deleteContacts } from "./actions";




/*export const contactsReducer = (state = contactsInitialState, action) => {
    switch (action.type) {
        case addContacts.type:
            return [...state, action.payload];
        case deleteContacts.type:
            return state.filter(contact => contact.id !== action.payload);

        default:
            return state;
    }
};*/

/*const filterInitialState = {
    filter: [],
}

export const filterReducer = (state = filterInitialState, action) => {
    switch (action.type) {
        case "filters/setStatusFilter":
            return {
                ...state,
                status: action.payload,
            };
        default:
            return state;
    }
};


/*export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/addContacts":
            return {
                ...state,
                contacts: [
                    ...state.contacts,
                    action.payload,
                ],
            };

        case "contacts/deleteСontacts":
            return {
                ...state,
                contacts: state.contacts.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    };
};*/

