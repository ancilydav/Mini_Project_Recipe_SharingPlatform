import React from 'react'
import { useDispatch } from 'react-redux';
import { setSearch } from "../Features/recipeSlice";

const Search = () => {
     const dispatch = useDispatch();
  return (
    <input
    type='text'
    placeholder='Search recipe'
    className='border rounded-md p-2 w-full'
    onChange={(e)=>dispatch(setSearch(e.target.value))}
    />
)
}

export default Search;