import { configureStore } from "@reduxjs/toolkit";
import { goldRateReducer } from "./goldRate/goldRateSlice";

export const store = configureStore(
    {reducer:{
        goldRate:goldRateReducer
    }}
)