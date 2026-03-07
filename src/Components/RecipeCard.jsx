import React from 'react'

const RecipeCard = ({recipe}) => {
  return (
    <div className='border rounded shadow p-3'>
      <img 
      src={recipe.image}
      className='w-full h-40 object-cover'/>
      <h2 className='text-xl font-bold mt-2'>{recipe.name}</h2>
      <p>{recipe.cuisine}</p>
      <p>{recipe.diet}</p>
      <p>{recipe.time} mins</p>
</div>
  )
}

export default RecipeCard;