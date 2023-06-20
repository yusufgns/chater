'use client'
import React, { useEffect, useState } from 'react'
import { BsFillPinAngleFill } from 'react-icons/bs'
import supabase from '@/libs/supabase-client'

export default function Room({ private_user, user_id }: any) {
    const [users, setUsers] = useState<any>()


    useEffect(() => {
        async function private_message() {
            const { data } = await supabase.from('private_message').select('*').eq('sender', user_id)

            const uniqueReceivers: any[] = []
            const visitedReceivers: any[] = []

            data?.forEach((item: any) => {
                if (!visitedReceivers.includes(item.receiver)) {
                    visitedReceivers.push(item.receiver)
                    const userData = private_user.find((e: any) => e.id === item.receiver)
                    uniqueReceivers.push(userData)
                }
            })
            setUsers(uniqueReceivers)
        }
        private_message()
    }, [])


    const openChats = () => {

    }

    return (
        <>
            <ul className='w-[250px] h-fit text-white' >
                {users && <div>
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
                </div>}

                {private_user == null &&
                    <div className='flex items-center gap-3 py-[10px] px-[10px] justify-between'>
                        <span className='flex gap-2'>
                            <div className='w-[48px] h-[48px] bg-blue-300 rounded-lg'></div>
                            <div>
                                <h1 className='font-medium text-[14px] mb-2'>Yusuf Güneş</h1>
                                <p className='text-[13px] opacity-70  font-medium'>Selam nasılsın....</p>
                            </div>
                        </span>

                        <span>
                            <div className='text-[12px] text-end'>4m</div>
                            <div className='flex items-center gap-2 text-[12px] mt-2'>
                                <div className='px-[5px] bg-blue-500 rounded-md'>99+</div>
                                <div><BsFillPinAngleFill></BsFillPinAngleFill></div>
                            </div>
                        </span>
                    </div>
                }
            </ul >
        </>
    )
}
