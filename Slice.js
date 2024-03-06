import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            return [...state, action.payload];
        },
        removeTodo: (state, action) => {
            console.log('Silindi', action.payload);
            let newArray = state.slice()
            newArray.splice(action.payload, 1)
            return newArray
        },
    }
});

export default Slice;
export const { addTodo, removeTodo } = Slice.actions;
