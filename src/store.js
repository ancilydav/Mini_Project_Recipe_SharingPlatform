import { configureStore } from "@reduxjs/toolkit";
import recipeReducer from "../Features/recipeSlice"

export const store = configureStore({
    reducer:{
       recipes:recipeReducer 
    }
})

