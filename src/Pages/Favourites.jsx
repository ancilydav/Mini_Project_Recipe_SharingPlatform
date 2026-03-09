import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeFavourite } from '../Features/recipeSlice'

const Favourites = () => {
  const dispatch = useDispatch();
  const favourites=useSelector(
    state=>state.recipes.favourites)
  return (
    <div className='p-5'>
      <h1 className='text-3xl font-bold mb-4'>Favourite Recipes</h1>
      {favourites.map(recipe=>(
        <div 
        key={recipe.id}
        className='border p-3 mb-3'>
          <h2>{recipe.name}</h2>
          <button onClick={()=>dispatch(removeFavourite(recipe.id))}
            className='bg-red-500 text-white p-2 mt-2 hover:bg-red-300'>Remove</button>
            </div>

      ))}

    </div>
  )
}

export default Favourites