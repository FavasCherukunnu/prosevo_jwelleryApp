import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value:{
        showShadow:false
    }
}

const homeTopNavSlice = createSlice(
    {
        name:'homeTipNav',
        initialState,
        reducers:{
            showShadow:(state,action)=>{
                state.value.showShadow = true
            },
            hideShadow:(state,action)=>{
                state.value.showShadow = false
            }
        }
    }
)

export const homeTopNavReducer = homeTopNavSlice.reducer;
export const {showShadow,hideShadow} = homeTopNavSlice.actions;