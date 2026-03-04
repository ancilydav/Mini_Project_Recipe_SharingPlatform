import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex bg-orange-500 justify-between p-3 text-white'>
      <h1 className=' font-bold text-xl'>FlavourLoop</h1>
      <div className='space-x-4 text-l'>
        <Link to="/">Home</Link>
        <Link to="/recipe">RecipeDetails</Link>
        <Link to="/favourites">Favourites</Link>
      </div>

    </div>
  )
}

export default Navbar