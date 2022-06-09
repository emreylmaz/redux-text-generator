import {configureStore} from "@reduxjs/toolkit";
import {textSlice} from "./text/textSlice";


export const store = configureStore({
    reducer: {
       text:textSlice.reducer
    }
});