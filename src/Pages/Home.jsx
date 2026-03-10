import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Search from '../Components/Search'
import Filter from '../Components/Filter'
import RecipeCard from '../Components/RecipeCard'


const Home = () => {
  const navigate =useNavigate();
  const {recipes,search,diet,cuisine,difficulty,}=useSelector((state)=>state.recipes)
  const filteredRecipes = recipes.filter((recipe)=>{
    return(
      recipe?.name?.toLowerCase().includes(search.toLowerCase())&&
      (diet==="All"||recipe.diet===diet)&&
      (cuisine==="All"||recipe.cuisine===cuisine)&&
      (difficulty==="All"||recipe.difficulty===difficulty)
    )
  })
  return (
    <div className='bg-white shadow-md rounded-lg p-4 mb-6'>
      <h2 className='text-xl font-semibold mb-3'> Recipes</h2>
      <Search/>
      <div className='flex flex-wrap gap-3 mt-4'>
        <Filter/>
      </div>

      <div className='grid grid-cols-3 gap-4'>
        {filteredRecipes.map((recipe)=>(
          <RecipeCard key={recipe.id} recipe={recipe}/>
        )
        )}
      <div>
      <button 
      onClick={()=>navigate("/favourites")}
      className='bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 flex justify-center '>View Favourites</button>
      </div>
      </div>

    </div>
  )
}

export default Home