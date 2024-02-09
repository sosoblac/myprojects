import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    data:[],
    loading: false,
    error: null
}

export const fetchDataAsync = createAsyncThunk(
    'fetchdata/fetchDataAsync',
    async()=>{
        try {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            return res.data

        } catch (error) {
            return error
        }
});

const fetchDataSlice = createSlice({
    name:'fetchdata',
    initialState,
    reducers:{
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchDataAsync.pending,(state)=>{
            state.loading = true
            state.error = null
        });
        builder.addCase(fetchDataAsync.fulfilled, (state,action)=>{
            // setTimeout(()=>{},5000);
            state.data = action.payload
            state.loading = false;
        });
        builder.addCase(fetchDataAsync.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        });
    }
})

// export {fetchDataAsync}
export default fetchDataSlice.reducer
