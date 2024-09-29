import Link from "next/link";

export default function Home(){
  return(
    <div className="flex items-center justify-evenly h-screen ">
    <Link href="/about">  <h1 className="text-3xl font-semibold duration-300 p-5 rounded-lg hover:scale-125 hover:bg-slate-400/50">About us</h1></Link>
     <Link href="/contact">  <h1 className="text-3xl font-semibold duration-300 p-5 rounded-lg hover:scale-125 hover:bg-zinc-400/50">Contact us</h1></Link>
      <Link href="/navbar">  <h1 className="text-3xl font-semibold duration-300 p-5 rounded-lg hover:scale-125 hover:bg-gray-400/50">Navbar</h1></Link>
       <Link href="/footer">  <h1 className="text-3xl font-semibold duration-300 p-5 rounded-lg hover:scale-125 hover:bg-slate-600/50">Footer</h1></Link>


    </div>
  )
}