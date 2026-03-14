import React from "react";
import { useNavigate } from "react-router-dom";
import { addFavourite, removeFavourite } from "../Features/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth.user);
  const storedFavourites = user ? JSON.parse(localStorage.getItem(`favourites_${user.name}`)) || [] : [];
  const isFavourite = storedFavourites.find((item) => item.id === recipe.id);

  const handleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite(recipe.id));
      toast.error("Removed from favourites");
    } else {
      dispatch(addFavourite(recipe));
      toast.success("Added to favourites");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-80 relative mb-4">
      <img src={recipe.image} className="w-full h-60 object-cover" />

      <div className="p-5">
        <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
        <p className="text-l font-semibold "> Cuisine: {recipe.cuisine}</p>
        <p>Diet: {recipe.diet}</p>
        <p> Rating: {recipe.Rating}</p>
      </div>

      <button
        onClick={() => navigate(`/recipe/${recipe.id}`)}
        className="w-full border-2 border-orange-400 text-orange-500 py-2 rounded-full font-medium hover:bg-orange-500 hover:text-white transition"
      >
        View Recipe
      </button>

      <button
        onClick={handleFavourite}
        className="absolute bottom-40 right-6 bg-orange-400 w-12 h-12 rounded-full shadow-lg flex items-center justify-center text-2xl hover:scale-110 transition"
      >
        {isFavourite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default RecipeCard;
