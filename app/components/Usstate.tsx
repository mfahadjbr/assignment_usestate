'use client'
import React, {useEffect, useState} from 'react'

export default function Usstate() {
    const [counter, setcounter]=useState(0);
    const increament=()=>{
        setcounter(counter + 1)
    };
    const decrement=()=>{
        if(counter === 0) return;
        setcounter(counter - 1)
    }

    useEffect(()=>{
        console.log('mount count')

        return function(){
            console.log('unmount count')
        }
    },[])
    useEffect(()=>{
        console.log('new update count',counter)
    },[counter])
  return (
    <div>
    <div className='h-[130px] w-[300px] bg-gray-300 rounded-2xl ml-[50px] mt-[20px]'>
      <h1 className='text-3xl font-bold ml-[140px] mb-[10px]'>{counter}</h1>
      <button onClick={increament} className='h-[50px] ml-[20px] w-[100px] bg-gray-600 rounded-xl'>Increment</button>
      <button onClick={decrement} className='h-[50px] ml-[60px] w-[100px] bg-gray-600 rounded-xl'>Decrement</button>
    </div>
    </div>
  )
}
