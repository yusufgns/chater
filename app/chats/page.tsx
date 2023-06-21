import React from 'react'
import Search from '@/components/Chats/Search'
import Room from '@/components/Chats/Room'
import { AiFillPlusCircle } from 'react-icons/ai'
import Time from '@/components/Time'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Realtime_Message from '@/components/Realtime_Message'
import '../globals.css'
import Input from '@/components/uı/Inputs'
import Navbar from '@/components/Navbar'
import Right_Menu from '@/components/Right_Menu'
import Form from '@/components/Form'

export default async function page() {
    const supabase = createServerComponentClient({ cookies })


    const { data: session } = await supabase.auth.getSession()
    const user_id = session.session ? session.session?.user.id : []
    const { data: user } = await supabase.from('user').select("*")
    const { data: group } = await supabase.from('group').select("*")

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
                        <Room group={group}></Room>
                    </span>
                </section>

                <div className='text-white bg-[#202329] w-full flex flex-col rounded-r-3xl px-4 py-4'>
                    <div className='flex justify-between items-center mr-7 bg-[#202329] pb-5'>
                        <div>
                            <h1>Blue Room</h1>
                            <Time></Time>
                        </div>
                        <div>
                            ...
                        </div>
                    </div>
                    <Realtime_Message serverPost={data}></Realtime_Message>

                    <Form session={session}></Form>
                </div>

                <section className='w-[350px] h-screen text-white min-w-[350px]'>
                    <Right_Menu user={user}></Right_Menu>
                </section>
            </main>
        </>
    )
}
