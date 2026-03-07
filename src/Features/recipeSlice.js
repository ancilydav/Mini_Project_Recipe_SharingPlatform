import { createSlice } from "@reduxjs/toolkit";
import { recipesData } from "../data/Recipe";

const initialState = {
  recipes: recipesData,
  search: "",
  diet: "All",
  cuisine: "All",
  difficulty: "All",
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
  },
});

export const { setSearch, setCuisine, setDiet, setDifficulty } =
  recipeSlice.actions;
export default recipeSlice.reducer;
