import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    value:0
}
const CounterSlice = createSlice({
    name:'Counter',
    initialState,
    reducers:{
        increamentValue:(state)=>{
            state.value +=1
        },
        decrementValue:(state)=>{
            if (state.value ==0 ) {
                return state
            }
            state.value -=1
        },
        resetValue:(state)=>{
            state.value = initialState.value
        },
        setValue:(state,action)=>{
            state.value = action.payload
        }
    }
})
export const {increamentValue,decrementValue,resetValue,setValue} = CounterSlice.actions
export default CounterSlice.reducer
