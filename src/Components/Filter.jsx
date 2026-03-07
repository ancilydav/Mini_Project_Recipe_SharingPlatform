import React from 'react'
import { useDispatch } from 'react-redux'
import {setCuisine,setDiet,setDifficulty} from "../Features/recipeSlice"

const Filter = () => {
 const  dispatch = useDispatch();
  return (
    <div>
      {/* Cuisine */}
      <select
      onChange={(e)=>dispatch(setCuisine(e.target.value))}
      className='border rounded p-2 w-full'
      >
        <option value="All">All</option>
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Kerala">Kerala</option>
      </select>
      
      {/* Diet */}
      <select
      onChange={(e)=>dispatch(setDiet(e.target.value))}
      className='border rounded p-2 w-full'
      >
        <option value="All">All</option>
        <option value="Veg">Veg</option>
        <option value="Non-Veg">Non-Veg</option>

      </select>

        {/* Difficulty */}

      <select
      onChange={(e)=>dispatch(setDifficulty(e.target.value))}
      className='border rounded p-2 w-full'
      >
        <option value="All">All</option>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>

      </select>




    </div>
  )
}

export default Filter