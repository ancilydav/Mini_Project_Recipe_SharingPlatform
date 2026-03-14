import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Timer from "../Components/Timer";

const Recipedetails = () => {
  const { id } = useParams();
  const { recipes } = useSelector((state) => state.recipes);
  const recipe = recipes.find((r) => r.id == id);
  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  // Hands-free cooking

const speakSteps = () => {
  const allSteps = [
    "Ingredients are",
    ...recipe.ingredients,
    "Preparation steps are",
    ...recipe.preparation
  ];

  let i = 0;

  const speakNext = () => {
    if (i < allSteps.length) {
      const speech = new SpeechSynthesisUtterance(allSteps[i]);
      speech.rate=0.3;
      speech.onend = () => {
        i++;
        speakNext();
      };
      window.speechSynthesis.speak(speech);
    }
  };

  speakNext();
};
  

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      <img src={recipe.image} className="w-100 h-80 object-cover rounded" />
      <h2 className="text-xl font-semibold mt-4">Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <h2 className="text-xl mt-4 font-bold">Preparation Steps</h2>
      <ul>
        {recipe.preparation.map((preparation, index) => (
          <li key={index}>{preparation}</li>
        ))}
      </ul>
      <p className="text-l font-semibold mt-4">Time:{recipe.time}</p>
      <p className="text-l font-semibold">Difficulty:{recipe.difficulty}</p>

       <button
        onClick={speakSteps}
        className="bg-purple-500 text-white px-4 py-2 rounded mt-4 hover:bg-purple-700">🔈 Hands-free Cooking</button>

      <Timer />
    </div>
  );
};

export default Recipedetails;
