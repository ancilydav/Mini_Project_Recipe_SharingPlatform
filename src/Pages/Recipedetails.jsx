import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Recipedetails = () => {
  const {id} = useParams()
  const {recipes} = useSelector((state)=>state.recipes)
  const recipe = recipes.find((r)=>r.id==id)
  if(!recipe){
    return <h2>Recipe not found</h2>
  }
  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-4'>{recipe.name}</h1>
      <img
      src={recipe.image}
      className='w-full h-60 object-cover rounded'/>
      <h2 className='text-xl font-semibold mt-4'>Ingredients</h2>
      <ul>
        {recipe.ingredients.map((item,index)=>(
          <li key ={index}>{item}</li>
       ))}
      </ul>
      <h2 className='text-xl mt-4 font-bold'>Preparation Steps</h2>
      <ul>
        {recipe.preparation.map((preparation,index)=>(
          <li key={index}>{preparation}</li>
        ))}
      </ul>
    </div>
  )
}

export default Recipedetails