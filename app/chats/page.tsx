import React from 'react'
import Search from '@/components/Chats/Search'
import Room from '@/components/Chats/Room'
import { AiFillPlusCircle } from 'react-icons/ai'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Realtime_Message from '@/components/Realtime_Message'
import '../globals.css'
import Input from '@/components/uı/Inputs'
import Navbar from '@/components/Navbar'

export default async function page() {
    const supabase = createServerComponentClient({ cookies })
    
    
    const {data: session} = await supabase.auth.getSession()
    const user_id = session.session ? session.session?.user.id : []
    const {data: user} = await supabase.from('user').select("*")

    const { data } = await supabase.from('private_message').select("*")

    return (
        <>
            <main className='flex h-screen'>
                <section className='w-[80px] h-screen text-white min-w-[80px]'>
                    <Navbar></Navbar>
                </section>

                <section className='w-fit px-[15px] h-screen text-white rounded-l-3xl bg-[#202329] flex flex-col items-center pt-5'>
                    <Search></Search>
                    <span className='flex flex-col gap-0'>
                        <Room private_user={user} user_id={user_id}></Room>
                    </span>
                </section>

                <div className='text-white bg-[#202329] w-full flex flex-col rounded-r-3xl px-4 py-4'>
                    <div className='flex justify-between items-center mr-7 bg-[#202329] pb-5'>
                        <div>
                            <h1>Yusuf Güneş</h1>
                            <p className='text-[10px]'>02:00 am</p>
                        </div>
                        <div>
                            ...
                        </div>
                    </div>
                    <Realtime_Message serverPost={data}></Realtime_Message>
                    <div className='pr-7 flex items-center text-white'>
                        <span className=' flex items-center w-full py-3 px-3 rounded-xl bg-[#2E343D]'>
                            <div>A</div>
                            <input className='mx-[20px] w-full h-[22px] bg-transparent outline-none'></input>
                            <div>A</div>
                        </span>
                    </div>
                </div>

                <section className='w-[350px] h-screen text-white min-w-[350px]'>
                    asdasdasdasd
                </section>
            </main>
        </>
    )
}
