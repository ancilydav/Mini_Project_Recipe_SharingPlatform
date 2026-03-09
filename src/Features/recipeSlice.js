import { createSlice } from "@reduxjs/toolkit";
import { recipesData } from "../data/Recipe";

const initialState = {
  recipes: recipesData,
  search: "",
  diet: "All",
  cuisine: "All",
  difficulty: "All",
  favourites:[]
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setCuisine(state, action) {
      state.cuisine = action.payload;
    },
    setDiet(state, action) {
      state.diet = action.payload;
    },
    setDifficulty(state, action) {
      state.difficulty = action.payload;
    },

    addFavourite:(state,action)=>{
      const exists=state.favourites.find(
        (recipe)=>recipe.id===action.payload.id
      )
      if(!exists){
        state.favourites.push(action.payload)
      }
    },

    removeFavourite:(state,action)=>{
      state.favourites=state.favourites.filter(
        (recipe)=>recipe.id!==action.payload
      );
    }
 }
});

export const { setSearch, setCuisine, setDiet, setDifficulty,addFavourite,removeFavourite } =
  recipeSlice.actions;
export default recipeSlice.reducer;
