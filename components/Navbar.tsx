'use client'
import React from 'react'
import { AiFillHome } from 'react-icons/ai'
import { BsFillChatSquareDotsFill } from 'react-icons/bs'
import { IoIosSettings } from 'react-icons/Io'
import Link from 'next/link'

export default function Navbar() {
    return (
        <div className='flex flex-col justify-between items-center h-screen py-[20px]'>
            <div className='flex items-center flex-col gap-[30px]'>
                <div className='font-semibold text-[28px] mb-[30px]'>CH</div>
                <Link href={'/'}>
                    <span className='flex flex-col items-center'>
                        <div className='text-[22px]'><AiFillHome></AiFillHome></div>
                        <div className='text-[12px] mt-1'>Home</div>
                    </span>
                </Link>
                <Link href={'/chats'}>
                    <span className='flex flex-col items-center'>
                        <div className='text-[22px]'><BsFillChatSquareDotsFill></BsFillChatSquareDotsFill></div>
                        <div className='text-[12px] mt-1'>Chats</div>
                    </span>
                </Link>
            </div>

            <div className='flex flex-col items-center'>
                <div className='text-[22px]'>
                    <IoIosSettings></IoIosSettings>
                </div>
                <div className='text-[12px] mt-1'>Settings</div>
            </div>
        </div>
    )
}
