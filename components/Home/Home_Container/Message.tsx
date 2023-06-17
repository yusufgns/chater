import React from 'react'
import Room_User from '@/components/Home/Room_User'
import Messages from '@/components/Home/Messages'

export default function Message() {
    return (
    <div
        className='
      bg-white 
      w-[160px]
      p-[18px]
      h-[160px] 
      rounded-3xl
      flex
      flex-col
      justify-between
      font-medium'>
        <Messages></Messages>
        <Room_User></Room_User>
    </div>
  )
}
