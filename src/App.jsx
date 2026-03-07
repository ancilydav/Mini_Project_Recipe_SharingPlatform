import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import RecipeDetails from './Pages/Recipedetails'
import Favourites from './Pages/Favourites'


const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recipe/:id' element={<RecipeDetails/>}/>
        <Route path='/favourites' element={<Favourites/>}/>
    </Routes>
    </div>
  )
}

export default App