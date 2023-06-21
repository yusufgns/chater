'use client'
import React, { useEffect, useState } from 'react'
import { BsFillPinAngleFill } from 'react-icons/bs'
import supabase from '@/libs/supabase-client'

export default function Room({ group }: any) {
    const [users, setUsers] = useState<any>()


    useEffect(() => {
        async function private_message() {
            const { data } = await supabase.from('group').select('*')
            setUsers(data)
        }
        private_message()
    }, [])

    console.log(group)

    return (
        <>
            <ul className='w-[250px] h-fit text-white' >
                {/* {users && <div>
                    {users.map((e: any) => (
                        <button key={e.id} className='bg-[#2E343D] mt-2 flex rounded-xl w-full items-center gap-3 py-[10px] px-[10px] justify-between' onClick={() => openChats}>
                            <span className='flex gap-2'>
                                <div className='w-[48px] h-[48px] bg-orange-300 rounded-lg'></div>
                                <div>
                                    <h1 className='font-medium text-[14px] mb-2'>{e.user_name}</h1>
                                    <p className='text-[13px] opacity-70  font-medium'>{e.description}</p>
                                </div>
                            </span>

                            <span>
                                <div className='flex items-center gap-2 text-[12px] mt-2'>
                                </div>
                            </span>
                        </button>
                    ))}
                </div>} */}

                {group &&
                    group.map((e: any) => (
                        <div key={e.id} className='flex items-center gap-3 py-[10px] px-[10px] justify-between bg-[#2E343D] rounded-md'>
                            <span className='flex gap-3 items-center'>
                                <div className='w-[48px] h-[48px] bg-blue-300 rounded-lg'></div>
                                <span className='flex flex-col'>
                                    <h1 className='font-medium text-[14px]'>{e.group_name}</h1>
                                    <p className='text-[13px] opacity-70  font-medium'>{e.group_description}</p>
                                </span>
                            </span>
                        </div>
                    ))
                }
            </ul >
        </>
    )
}
