import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addRecipe, deleteRecipe } from "../Features/recipeSlice";
import { toast } from "react-toastify";

const UserRecipe = () => {
  const [title, setTitle] = useState("");
  const [diet, setDiet] = useState("");
  const [image, setImage] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const recipes = useSelector((state) => state.recipes.recipes);

  const myRecipes = recipes.filter((recipe) => recipe.author === user.name);
  const handleAdd = () => {
    if (!title) return;

    const newRecipe = {
      id: Date.now(),
      title,
      diet,
      image,
      ingredients,
      steps,
      author: user.name,
    };

    dispatch(addRecipe(newRecipe));
    toast.success("Recipe Added");
    setTitle("");
    setDiet("");
    setImage("");
    setIngredients("");
    setSteps("");
  };
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-lg font-bold mb-4">Add Recipe</h2>
      <div className="space-y-4 mb-8">
        {/* title */}
        <input
          type="text"
          placeholder="Recipe Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 w-full rounded"
        />

        {/* Diet */}
        <select
          value={diet}
          onChange={(e) => setDiet(e.target.value)}
          className="border p-2 w-full rounded"
        >
          <option value="">Select Diet</option>
          <option value="Veg">Veg</option>
          <option value="Non-Veg">Non-Veg</option>
        </select>

        {/* image */}

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-2 flex-1 rounded"
        />
        {/* Ingredients */}

        <textarea
          placeholder="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="border p-2 w-full rounded  h-24 resize-none"
        />

        {/* Steps */}

        <textarea
          placeholder="Preparation Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          className="border p-2 w-full h-28 rounded resize-none"
        />

        <button
          onClick={handleAdd}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <h2 className="text-xl font-bold mb-4"> My Recipe</h2>
      {myRecipes.map((recipe) => (
        <div
          key={recipe.id}
          className="flex justify-between border p-3 mb-2 rounded"
        >
          <p>{recipe.title}</p>
          <button
            onClick={() => dispatch(deleteRecipe(recipe.id))}
            className="bg-red-500 text-white px-3 py-1 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default UserRecipe;
