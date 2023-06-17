import Message from '@/components/Home/Home_Container/Message'
import Navbar from '@/components/Home/Navbar'
import User from '@/components/Home/Home_Container/User'
import { AiOutlineMessage, AiFillPlusSquare } from 'react-icons/ai'
import { BsEmojiKissFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'

export default function Home() {
  return (
    <div className='LandingPage relative'>
      <Navbar></Navbar>

      <main className='relative w-fit m-auto mt-[30px]'>
        <section>
          <span className='flex justify-center relative gap-[25px] mr-[630px]'>
            <Message></Message>
            <span>
              <User type={'message'} className={'absolute bottom-0'}></User>
            </span>
          </span>
        </section>

        <section>
          <span className='flex justify-center relative gap-[25px] mt-[45px]'>
            <div className='w-fit h-fit p-[10px] rounded-full bg-[#70A9FF] text-[35px] text-white relative'>
              <AiOutlineMessage></AiOutlineMessage>
              <div className='bg-white text-black font-semibold text-[12px] absolute w-fit h-fit rounded-full px-[5px] right-0 top-0'>3</div>
            </div>
            <span>
              <User type={'message_detail'}></User>
            </span>
          </span>
        </section>

        <section className='mr-[290px]'>
          <span className='flex justify-center relative gap-[25px] mt-[45px]'>
            <User type={'message_detail_option'}></User>
            <span>
              <div className='absolute bottom-0'>
                <div className='flex items-center gap-1'>
                  <div className='text-green-400 text-[20px] flex items-center relative'>
                    <TiTick></TiTick>
                    <div className='absolute left-[5px]'>
                      <TiTick></TiTick>
                    </div>
                  </div>
                  <p className='ml-2 text-white text-[12px]'>06:00 am</p>
                </div>
              </div>
            </span>
          </span>
        </section>

        <section className='flex items-center justify-center'>
          <span className='flex justify-center gap-[25px] mt-[45px] w-[350px] bg-[#2D2D2D] text-white py-[10px] px-[8px] rounded-md'>
            <button className='flex items-center w-full justify-between'>
              <span className='flex items-center gap-2'>
                <div className='text-[20px]'><AiFillPlusSquare></AiFillPlusSquare></div>
                <div>Hey, how about Messaging?</div>
              </span>
              <div className=''><BsEmojiKissFill></BsEmojiKissFill></div>
            </button>
          </span>
        </section>
      </main>

      <main className=' absolute bottom-16 flex items-center'>
        <p className='text-[25px] font-medium text-[#E3FF71]'>secure</p> 
        <p className='text-[25px] font-medium text-white'>messaging</p> 
      </main>
    </div>
  )
}
