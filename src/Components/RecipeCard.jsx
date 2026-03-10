import React from 'react'
import { useNavigate } from 'react-router-dom';
import { addFavourite } from '../Features/recipeSlice';
import { useDispatch } from 'react-redux';

const RecipeCard = ({recipe}) => {
  const dispatch=useDispatch();
  const navigate =useNavigate();
  return (
    <div className='border rounded shadow p-3'>
      <img 
      src={recipe.image}
      className='w-100 h-80 object-cover'/>
      <h2 className='text-xl font-bold mt-2'>{recipe.name}</h2>
      <p className='text-l font-semibold '> Cuisine: {recipe.cuisine}</p>
      <p>Diet: {recipe.diet}</p>
      <p> Rating: {recipe.Rating}</p>

      <div className='flex gap-4'>
      <button
      onClick={()=>navigate(`/recipe/${recipe.id}`)}
      className='bg-green-500 text-white p-2 mt-4 hover:bg-green-300 rounded'>View Recipe</button>
      <button
         onClick={()=>{
          dispatch(addFavourite(recipe)); alert("Added to favourites")}}
         className='bg-orange-500 text-white p-2 mt-4 hover:bg-orange-300 rounded'>Add to Favourites</button>
         </div>

</div>
  )
}

export default RecipeCard;