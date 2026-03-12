import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Search from "../Components/Search";
import Filter from "../Components/Filter";
import RecipeCard from "../Components/RecipeCard";
import { setSearch } from "../Features/recipeSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { recipes, search, diet, cuisine, difficulty } = useSelector(
    (state) => state.recipes,
  );
  const filteredRecipes = recipes.filter((recipe) => {
    return (
      recipe?.name?.toLowerCase().includes(search.toLowerCase()) &&
      (diet === "All" || recipe.diet === diet) &&
      (cuisine === "All" || recipe.cuisine === cuisine) &&
      (difficulty === "All" || recipe.difficulty === difficulty)
    );
  });

  // Webspeech
  const handleVoiceSearch = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.start();
    recognition.onresult = (event) => {
      const text = event.results[0][0].transcript;
      dispatch(setSearch(text));
    };
  };

  

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      <h2 className="text-xl font-semibold mb-3"> Recipes</h2>
      <Search handleVoiceSearch={handleVoiceSearch} />
      
      <div className="flex flex-wrap gap-3 mt-4">
        <Filter />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {filteredRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
        <div></div>
      </div>
    </div>
  );
};

export default Home;
