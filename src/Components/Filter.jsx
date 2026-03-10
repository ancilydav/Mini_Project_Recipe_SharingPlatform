import React from 'react'
import { useDispatch } from 'react-redux'
import {setCuisine,setDiet,setDifficulty} from "../Features/recipeSlice"

const Filter = () => {
 const  dispatch = useDispatch();
  return (
    <div className="flex gap-6 items-end mb-4">
      {/* Cuisine */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Cuisine</label>
      <select
      onChange={(e)=>dispatch(setCuisine(e.target.value))}
      className='border rounded p-2 w-full'
      >
        <option value="All">All</option>
        <option value="Indian">Indian</option>
        <option value="Chinese">Chinese</option>
        <option value="Kerala">Kerala</option>
      </select>
      </div>
      
      {/* Diet */}
      <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Diet</label>
      <select
      onChange={(e)=>dispatch(setDiet(e.target.value))}
      className='border rounded p-2 w-full'
      >
        <option value="All">All</option>
        <option value="veg">Veg</option>
        <option value="non-veg">Non-Veg</option>

      </select>
      </div>

        {/* Difficulty */}
        <div className="flex flex-col">
        <label className="text-sm font-semibold mb-1">Difficulty</label>
         <select
      onChange={(e)=>dispatch(setDifficulty(e.target.value))}
      className='border rounded p-2 w-full '
      >
        <option value="All">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>

      </select>
      </div>




    </div>
  )
}

export default Filter;