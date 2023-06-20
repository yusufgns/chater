'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { channel } from 'diagnostics_channel'
import supabase from '@/libs/supabase-client'
import { useEffect, useState } from 'react'
import '../app/globals.css'

export default function Home({ serverPost }: any) {
    const [post, setPosts] = useState<any>(serverPost)
    const [processed, setProcessed] = useState<any>(null)

    useEffect(() => {
        const channel = supabase.channel('realtime posts')
            .on(
                'postgres_changes',
                { event: '*', schema: 'public', table: 'private_message' },
                (payload) => {
                    setPosts((prevPosts: any) => [...prevPosts, payload.new as any])
                }
            )
            .subscribe()

        return () => {
            supabase.removeChannel(channel)
        }
    }, [supabase])

    useEffect(() => {
        const processedData: any[] = [];
        let currentUser = null;

        for (const item of post) {
            if (currentUser !== item.sender_user_name) {
                if (
                    processedData.length > 0 &&
                    processedData[processedData.length - 1].user === item.sender_user_name &&
                    processedData[processedData.length - 1].avatar_url === item.avatar_url
                ) {
                    processedData[processedData.length - 1].grouped = [];
                } else {
                    processedData.push({
                        user: item.sender_user_name,
                        avatar_url: item.avatar_url, // Eklenen kısım
                        grouped: []
                    });
                }
            }

            processedData[processedData.length - 1].grouped.push({
                message: item.message
            });

            currentUser = item.sender_user_name;
        }

        setProcessed(processedData);
    }, [post]);


    return (
        <>
            <div className='overflow-auto mb-4 h-screen'>
                {processed?.map((posts: any) => (
                    <div key={posts.id} className='flex items-end mt-3'>
                        {!posts.avatar_url && (
                            <div className='bg-orange-500 w-[40px] h-[40px] rounded-md mr-3'></div>
                        )}
                        <div className='relative'>
                            {posts.avatar_url && (
                                <div className='sticky left-[50px] -top-7'>{posts.avatar_url}</div>
                            )}
                            <div className='bg-[#2E343D] px-[20px] py-[10px] w-fit rounded-lg mb-1'>
                                <p className='text-[14px]'>{posts.user}</p>
                                {posts.grouped.slice(0, 1).map((e: any) => (
                                    <div key={e.id}>{e.message}</div>
                                ))}
                            </div>
                            <div>
                                {posts.grouped.slice(1, -1).map((e: any) => (
                                    <div key={e.id} className='bg-[#2E343D] px-[20px] py-[10px] w-fit rounded-lg mb-1'>
                                        {e.message}
                                    </div>
                                ))}
                            </div>
                            <div className='bg-[#2E343D] px-[20px] py-[10px] w-fit rounded-bl-none rounded-lg flex'>
                                {posts.grouped[posts.grouped.length - 1].message}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}
