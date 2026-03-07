import React from 'react'
import { useNavigate } from 'react-router-dom';

const RecipeCard = ({recipe}) => {
  const navigate =useNavigate();
  return (
    <div className='border rounded shadow p-3'>
      <img 
      src={recipe.image}
      className='w-full h-40 object-cover'/>
      <h2 className='text-xl font-bold mt-2'>{recipe.name}</h2>
      <p>{recipe.cuisine}</p>
      <p>{recipe.diet}</p>
      <p>{recipe.time} mins</p>
      <button
      onClick={()=>navigate(`/recipe/${recipe.id}`)}
      className='bg-green-500 text-white p-2 mt-2 rounded'>View Recipe</button>

</div>
  )
}

export default RecipeCard;