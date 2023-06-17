import React from 'react'
import { BsPersonFill } from 'react-icons/bs'

export default function Messages() {
    return (
        <>
            <span className='text-[19px] flex items-center justify-between'>
                <BsPersonFill></BsPersonFill>
                <div className='flex items-center relative'>
                    <div className='w-[19px] h-[19px] bg-black rounded-full absolute right-6 border border-gray-300'></div>
                    <div className='w-[19px] h-[19px] bg-black rounded-full absolute right-3 border border-gray-300'>''</div>
                    <div className='w-[19px] h-[19px] bg-black rounded-full absolute right-0 border border-gray-300'>''</div>
                </div>
            </span>
        </>
    )
}
