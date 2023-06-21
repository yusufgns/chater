'use client'
import React, { useState } from 'react';
import supabase from '@/libs/supabase-client';
import {FiSend} from 'react-icons/fi'

export default function Form({ session }: any) {
    const [messages, setMessages] = useState('')
    const user_id = session.session ? session.session.user.id : ''

    const sendMessage = async (e: any) => {
        e.preventDefault();

        if (messages !== '') {
            const { data, error } = await supabase
                .from('private_message')
                .insert([
                    {
                        sender: user_id,
                        receiver: '84430c8e-74aa-4a0a-ac22-013db143c460',
                        message: messages,
                        sender_user_name: 'YusufGunes',
                        receiver_user_name: 'Group',
                        avatar_url: ''
                    },
                ])

            if (data) console.log(data)
            else console.log(error)
        }

        setMessages('')
    };

    return (
        <div className='pr-7 flex items-center text-white'>
            <span className='flex items-center w-full py-3 px-3 rounded-xl bg-[#2E343D]'>
                <div></div>
                <form onSubmit={sendMessage} className='flex items-center justify-between w-full mr-4'>
                    <input
                        required
                        type='text'
                        value={messages}
                        onChange={(e: any) => setMessages(e.target.value)}
                        placeholder='Send Message'
                        className='mx-[20px] w-full h-[22px] bg-transparent outline-none'
                    ></input>
                    <button type='submit'><FiSend></FiSend></button>
                </form>
                <div></div>
            </span>
        </div>
    );
}
