import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../Features/authSlice'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("")
    const dispatch=useDispatch();
    const naviagte=useNavigate();

    const handleLogin=(e)=>{
        e.preventDefault();

         const user = {
            id:Date.now(),
            name:username
        };
        dispatch(login(user));
        naviagte("/");
        }

    
  return (
    <div className='flex justify-center items-center h-screen'>
        <form 
        onSubmit={handleLogin}
        className='bg-white p-6 shadow-md rounded w-80'>
            <h2 className='text-xl font-bold mb-4 text-center'>Login</h2>

         {/* Username */}
            <input
            type='text'
            placeholder='Enter User Name'
            required
            value={username}
            className='border p-2 w-full mb-3 rounded'
            onChange={(e)=>setUsername(e.target.value)}/>

            {/* Password */}

            <input
            type='password'
            placeholder='Enter Password'
            required
            value={password}
            className='border p-2 w-full mb-3 rounded'
            onChange={(e)=>setPassword(e.target.value)}/>
            
             <button
            type='submit'
            className='bg-orange-500 text-white w-full p-2 rounded'>Login</button>
            </form>
        </div>
    
  )
}

export default Login;