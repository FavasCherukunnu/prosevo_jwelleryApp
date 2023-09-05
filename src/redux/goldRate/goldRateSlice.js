import { createSlice } from "@reduxjs/toolkit";

const initialState={
    value:{}
}

const goldRateSlice = createSlice(
    {
        name:'goldRate',
        initialState,
        reducers:{
            setAllGoldRates:(state,action)=>{
                state.value = action.payload.value
            }
        }
    }
)


export const goldRateReducer = goldRateSlice.reducer;
export const {setAllGoldRates} = goldRateSlice.actions;