import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

export default function User({
    type,
    className
}: { type: string | null, className?: string | null }) {
    return (
        <>
            {type === 'message' &&
                <section className={clsx('bg-[#E3FF71] w-[250px] h-[50px] rounded-3xl flex items-center px-[8px] justify-between', className)}>
                    <span className='flex items-center gap-3'>
                    <Image alt='' src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/public/360ec6ff-26f6-44a1-ac22-2475f467091fIMG_20220718_121044_374.jpg?t=2023-06-17T11%3A33%3A00.257Z'} width={35} height={35} className='rounded-full'></Image>

                        <h1 className='font-semibold'>Yusuf Güneş</h1>
                    </span>

                    <div className='bg-black px-[8px] py-[1px] text-white font-medium rounded-full'>
                        3
                    </div>
                    {/* bg-[#2D2D2D] */}
                </section>
            }

            {type === 'message_detail' &&
                <div className={clsx('w-[380px] h-fit rounded-xl bg-[#2D2D2D] gap-3 px-[10px] py-[8px] text-white', className)}>
                    <div className='flex items-center w-full'>
                        <Image alt='' src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/public/360ec6ff-26f6-44a1-ac22-2475f467091fIMG_20220718_121044_374.jpg?t=2023-06-17T11%3A33%3A00.257Z'} width={46} height={46} className='rounded-full'></Image>
                        <div className='w-full ml-[10px]'>
                            <span className='flex items-center justify-between w-full'>
                                <h1 className='font-semibold'>Yusuf Güneş</h1>
                                <div className='bg-black px-[8px] py-[1px] text-white font-medium rounded-full'>
                                    3
                                </div>
                            </span>

                            <span className='text-[14px] font-medium opacity-80'>
                                <p>Yep, I am so happy today 🥰</p>
                            </span>
                        </div>
                    </div>
                </div>
            }

            {type === 'message_detail_option' &&
                <div className={clsx('text-black w-[380px] h-fit rounded-xl bg-[#fff] gap-3 px-[10px] py-[8px]', className)}>
                    <div className='flex items-center w-full'>
                        <Image alt='' src={'https://nmcceegbiexzqgkclyxx.supabase.co/storage/v1/object/public/avatars/public/1129956-1701449189.jpg'} width={46} height={46} className='rounded-full object-cover max-w-[46px] min-w-[46px] max-h-[46px] min-h-[46px]'></Image>
                        <div className='w-full ml-[10px]'>
                            <span className='flex items-center justify-between w-full'>
                                <h1 className='font-semibold'>Sana</h1>
                                <div className='bg-black px-[8px] py-[1px] text-white font-medium rounded-full'>
                                    3
                                </div>
                            </span>

                            <span className='text-[14px] font-medium opacity-80'>
                                <p>Shall we go to the cinema tomorrow?</p>
                            </span>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}
