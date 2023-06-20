import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <header className='justify-between flex'>
        <span className='flex text-white font-bold text-[26px]'>chat <p className='text-[#E3FF71]'>er</p> </span>

        <nav className='flex items-center gap-[35px] font-medium text-white'>
            <Link href="">product</Link>
            <Link href="">abouts</Link>
            <Link href="">career</Link>
        </nav>

        <span className='font-medium flex gap-4 text-[12px]'>
          <button
          className='
          border-2
          px-4 
          py-1
          text-white
          rounded-3xl'>
            SIGN UP
          </button>

          <button
          className='
          border-2
          border-white
          px-4 
          py-1 
          bg-white
          rounded-3xl'>
            LOGIN
          </button>
        </span>
      </header>
  )
}
