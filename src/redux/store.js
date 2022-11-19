import { configureStore } from '@reduxjs/toolkit';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { persistedContactReducer } from "./contactsSlice";
//import { filterReducer } from "./filtersSlice";


export const store = configureStore({
    reducer: {
        contacts: persistedContactReducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
});

//filter: persistedContactReducer,

export const persistor = persistStore(store)


//filter: filtersReducer,

// , filterReducer


/*const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);*/



/*export const store = configureStore({
    reducer: {},
})*/