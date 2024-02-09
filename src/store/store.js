import { configureStore } from "@reduxjs/toolkit"; 
import counterSlice from "../states/counter/counterSlice";
import fetchDataSlice from "../states/fetchdata/fetchData";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        fetchdata: fetchDataSlice
    }
})