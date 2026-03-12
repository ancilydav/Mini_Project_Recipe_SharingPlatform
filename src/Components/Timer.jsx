import React from 'react'
import {useState,useEffect} from "react"

const Timer = () => {
    
    const [seconds,setSeconds]=useState(0);
    const [isRunning,setIsRunning]=useState(false);
    useEffect(()=>{
        let timer;
        if (isRunning){
            timer=setInterval(()=>{
                setSeconds(prev=>prev+1);
            },1000);
        }
        return()=>clearInterval(timer);
    },[isRunning]);
    const resetTimer=()=>{
        setSeconds(0);
        setIsRunning(false);
    }
  return (
    <div className='border p-4 mt-6 rounded shadow text-center'>
        <h2 className="text-xl font-bold mb-4">⏰ Cooking Timer</h2>
        <p className='text-3xl font0bold mb-3'>{seconds}sec</p>
        <div className='flex justify-center gap-4'>
            <button
            onClick={()=>setIsRunning(true)}
            className='bg-green-500 text-white px-3 py-1 rounded hover:bg-green-700'>Start</button>
            <button
            onClick={()=>setIsRunning(false)}
            className='bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-700'>Pause</button>
             <button
            onClick={resetTimer}
            className='bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700'>Reset</button>
        </div>
    </div>
  )
}

export default Timer