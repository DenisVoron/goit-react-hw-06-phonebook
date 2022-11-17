import { configureStore } from '@reduxjs/toolkit';

import { contactsReducer } from "./contactsSlice";


export const store = configureStore({
    reducer: {
        contacts: contactsReducer,
    }
});




//filter: filterReducer, , filterReducer


/*const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);*/



/*export const store = configureStore({
    reducer: {},
})*/


/*import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { rootReducer } from "./reducer";*/


/*const initialState = {
    contacts: [
        {
            id: nanoid(),
            name: '',
            number: '',
        }
    ],
    filter: ""
}

const rootReducer = (state = initialState, action) => {
    return state;
};*/