//import { configureStore } from '@reduxjs/toolkit';
//import { rootReducer } from "./reducer";
import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";
import { nanoid } from 'nanoid';

const initialState = {
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
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);



/*export const store = configureStore({
    reducer: {},
})*/


