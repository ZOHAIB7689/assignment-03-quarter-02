'use client'

import { useRouter } from "next/navigation"
export default function Navbar() {
    const route = useRouter()
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-5xl text-sky-400 font-semibold font-mono' >This is <span className=' text-green-300 '> Navbar</span> page</p>
      
        <button className='bg-sky-600 hover:font-semibold text-3xl rounded-lg p-6 mt-6' onClick={()=>{route.push("/")}}>Back to Home</button>
      
    </div>
  )
}
