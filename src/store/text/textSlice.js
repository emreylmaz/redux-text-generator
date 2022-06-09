import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    text: '',
    paras: 5,
    format: 'text',
    loading: true,
    error: null
}
export const fetchAsyncText = createAsyncThunk('text/fetchText', async (value = 0, { getState }) => {
    const { paras, format } = getState().text;

    try {
        const { data } = await axios.get(`https://baconipsum.com/api/?type=all-meat&paras=${paras}&start-with-lorem=1&format=${format}`);
        return data;
    } catch (e) {
        return e.message;
    }
})


export const textSlice = createSlice({
    name: "text",
    initialState,
    reducers: {
        changeText: (state, action) => {
            state.text = action.payload
        },
        changeParas: (state, action) => {
            state.paras = action.payload
        },
        changeFormat: (state, action) => {
            state.format = action.payload
        },
    },
    extraReducers: {
        [fetchAsyncText.pending]: (state) => {
            state.loading = true;
        },
        [fetchAsyncText.error]: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        [fetchAsyncText.fulfilled]: (state, action) => {
            state.loading = false;
            state.text = action.payload;
        }
    }

})

export const { changeText, changeParas, changeFormat } = textSlice.actions;
export default textSlice.reducer;