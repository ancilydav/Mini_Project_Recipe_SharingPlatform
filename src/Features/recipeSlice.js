import { createSlice } from "@reduxjs/toolkit";
import { recipesData } from "../data/Recipe";

const user = JSON.parse(localStorage.getItem("user"));
const storedFavourites = user
  ? JSON.parse(localStorage.getItem(`favourites_${user.name}`)) || []
  : [];
const storedRecipes = JSON.parse(localStorage.getItem("recipes")) || [];
const initialState = {
  recipes: storedRecipes.length > 0 ? storedRecipes : recipesData,
  search: "",
  diet: "All",
  cuisine: "All",
  difficulty: "All",
  favourites: storedFavourites,
};

const recipeSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    // Filters

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

    // Favourites

    addFavourite: (state, action) => {
      const exists = state.favourites.find(
        (recipe) => recipe.id === action.payload.id,
      );
      if (!exists) {
        state.favourites.push(action.payload);

        const user = JSON.parse(localStorage.getItem("user"))
        localStorage.setItem(`favourites_${user.name}`, JSON.stringify(state.favourites));
      }
    },

    removeFavourite: (state, action) => {
      state.favourites = state.favourites.filter(
        (recipe) => recipe.id !== action.payload,
      );

      const user = JSON.parse(localStorage.getItem("user"))
      localStorage.setItem(`favourites_${user.name}`, JSON.stringify(state.favourites));
    },

    // UserRecipes

    addRecipe: (state, action) => {
      state.recipes.push(action.payload);
      localStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
    deleteRecipe: (state, action) => {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.id !== action.payload,
      );
      localStorage.setItem("recipes", JSON.stringify(state.recipes));
    },
  },
});

export const {
  setSearch,
  setCuisine,
  setDiet,
  setDifficulty,
  addFavourite,
  removeFavourite,
  addRecipe,
  deleteRecipe,
} = recipeSlice.actions;
export default recipeSlice.reducer;
