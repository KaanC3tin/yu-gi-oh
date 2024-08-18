import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="isolate aspect-video w-full h-[60px] rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 text-center items-center">
      <div className='max-w-screen-xl mx-32'>
        <div className='flex justify-between items-center p-4'>
          <div className='flex space-x-6'>
            <Link href="/">Home</Link>
            <Link href="/cards">Cards</Link>
            <Link href="/collection">Collection</Link>
          </div>
          <div className=' flex  space-x-6 '>
            <Link href="/auth/signup">Signup</Link>
            <Link href="/auth/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar