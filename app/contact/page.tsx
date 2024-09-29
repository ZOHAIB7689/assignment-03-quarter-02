
'use client'
import { useRouter } from "next/navigation"


export default function About() {
    const route = useRouter()
  return ( 
    <div className='flex flex-col items-center justify-center h-screen'>
        <p className='text-5xl text-yellow-600 font-semibold font-mono' >This is <span className='text-lime-600 '> contact us</span> page</p>
      
        <button className='bg-sky-600 hover:font-semibold text-3xl rounded-lg p-6 mt-6' onClick={()=>{route.push("/")}}>Back to Home</button>
      
    </div>
  )
}
