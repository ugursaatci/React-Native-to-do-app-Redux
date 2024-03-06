import { ConfigureStore, configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

export const Store = configureStore({
    reducer:{
        todos: Slice.reducer
    },
});

