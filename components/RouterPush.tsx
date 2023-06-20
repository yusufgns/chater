'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import supabase from '@/libs/supabase-client'

export default async function RouterPush() {
    const router = useRouter()
    return (
        <button onClick={() => router.push('/')} className='text-white'>
            Home
        </button>
    )
}
