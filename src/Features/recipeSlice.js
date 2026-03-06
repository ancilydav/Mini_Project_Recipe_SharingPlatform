import { createSlice } from "@reduxjs/toolkit";
import Recipes from "../data/Recipe"

const initialState={
    allRecipies :Recipes,
    filtredRecipies:Recipes,
    search:"",
    filter:"All"

};

const recipeSlice = createSlice({
    name:"recipes",
    initialState,
    reducers:{}
});

export default recipeSlice.reducer;