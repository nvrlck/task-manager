import { createSlice } from "@reduxjs/toolkit";


const dateSlice = createSlice({
    name: 'date',
    initialState: {
        date: ''
    },
    reducers: {
        addDate(state, action) {
            state.date = action.payload.date
        }
    }
})

export const {addDate} = dateSlice.actions;

export default dateSlice.reducer;