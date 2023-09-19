import { configureStore } from "@reduxjs/toolkit";
import { goldRateReducer } from "./goldRate/goldRateSlice";
import { homeTopNavReducer } from "./homeTopNav/homeTopNavSlice";

export const store = configureStore(
    {
        reducer: {
            goldRate: goldRateReducer,
            homeTopNav: homeTopNavReducer
        }
    }
)