import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { logout } from '../Features/authSlice'

const Navbar = () => {
  const user=useSelector((state)=>state.auth.user);
  const dispatch = useDispatch();
  return (
    <div className='flex bg-orange-500 justify-between p-3 text-white'>
      <h1 className=' font-bold text-xl'>FlavourLoop</h1>
      <div className='space-x-4 text-l'>
        <Link to="/">Home</Link>
       <Link to="/favourites">Favourites</Link>
        {user && <Link to="/myrecipes">Add Recipe</Link>}
        {/* authentication Protected Route */}
        {user?(
          <button
          onClick={()=>dispatch(logout())}
          className='bg-red-500 px-3 py-1 rounded'>Logout</button>
        ):(<Link to="/login"
          className='bg-green-500 px-3 py-1 rounded'>Login</Link>
        )}
      </div>

    </div>
  )
}

export default Navbar