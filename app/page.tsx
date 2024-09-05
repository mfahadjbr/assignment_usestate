'use client'
import {useState} from 'react'
import Usstate from './components/Usstate'

export default function Home() {
  const [state, setState]=useState<boolean>(true);
  return (
    <div>
      <button onClick={()=>setState(!state)} className='h-[50px] ml-[150px] w-[100px] mt-[30px] bg-gray-600 rounded-xl'>Unmount</button>
      {state ? <Usstate/> : ""}
      
    </div>
  );
}
