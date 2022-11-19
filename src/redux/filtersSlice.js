import { createSlice } from "@reduxjs/toolkit";

//const filterInitialState = filter: ''

const filtersSlice = createSlice({
    name: "filter",
    initialState: '',
    reducers: {
        setFilter(state, action) {
            return (state = action.payload);
        },
    },
});


export const { setFilter } = filtersSlice.actions;
export const filterReducer = filtersSlice.reducer;