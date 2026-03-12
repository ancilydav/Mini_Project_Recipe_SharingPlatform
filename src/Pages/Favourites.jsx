import React from "react";
import { useSelector } from "react-redux";
import RecipeCard from "../Components/RecipeCard";

const Favourites = () => {
  const favourites = useSelector((state) => state.recipes.favourites);
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-4">Favourite Recipes</h1>
      <div className="grid grid-cols-3 gap-6">
        {favourites.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
