'use client'
import React from 'react'
import { IoMdNotificationsOff } from 'react-icons/Io'
import { BsFillCalendarDateFill, BsFillCameraVideoOffFill } from 'react-icons/bs'
import { MdLocalActivity } from 'react-icons/md'

export default function Right_Menu({ user }: any) {
    return (
        <div className='w-full h-screen px-3 overflow-auto'>
            <div className='text-[18px] font-medium mt-3'>Room Details</div>

            <div className='mb-4 mt-2 flex items-center gap-3 text-red-600'>
                <div className='p-[15px] rounded-xl bg-[#2E343D]'><IoMdNotificationsOff></IoMdNotificationsOff></div>
                <div className='p-[15px] rounded-xl bg-[#2E343D]'><BsFillCalendarDateFill></BsFillCalendarDateFill></div>
                <div className='p-[15px] rounded-xl bg-[#2E343D]'><BsFillCameraVideoOffFill></BsFillCameraVideoOffFill></div>
            </div>

            <div>
                <p className='text-[18px] font-medium mt-4'>Active Events</p>
                <div className='flex flex-col gap-3 mt-2'>
                    <span className='flex items-center gap-3'>
                        <div className='p-[15px] w-fit rounded-xl bg-[#2E343D]'><MdLocalActivity></MdLocalActivity></div>
                        <div>
                            <h1>Coding</h1>
                            <p className='text-[12px]'>Let's open source code this week.</p>
                        </div>
                    </span>
                </div>
            </div>

            <div>
                <p className='text-[18px] font-medium mt-4 mb-1'>Members</p>
                {user.map((e: any) => (
                    <div key={e.id} className='flex gap-3 mt-2'>
                        <div className='p-[15px] w-fit rounded-full bg-[#2E343D]'><MdLocalActivity></MdLocalActivity></div>
                        <div className='flex flex-col justify-center'>
                            <h1 >{e.user_name}</h1>
                            {e.description &&
                                <p className='text-[12px]'>{e.description}</p>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
