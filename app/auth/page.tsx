import { createServerActionClient } from '@supabase/auth-helpers-nextjs'
import { revalidatePath } from 'next/cache'
import { cookies } from 'next/headers'
import type { Database } from '@/types/supabase'
import RouterPush from '@/components/RouterPush'
import { redirect } from 'next/navigation'

export default async function Login() {
  const supabase = createServerActionClient<Database>({ cookies })
  const {data: session} = await supabase.auth.getSession()
  if(session.session) {
    redirect('/chats')
  }

  const handleSignUp = async (formData: FormData) => {
    'use server'
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createServerActionClient<Database>({ cookies })
    const {data, error} = await supabase.auth.signUp({
      email,
      password,
    })
    console.log(data)
    console.log(error)

    revalidatePath('/')
  }

  const handleSignIn = async (formData: FormData) => {
    'use server'
    const email = String(formData.get('email'))
    const password = String(formData.get('password'))

    const supabase = createServerActionClient<Database>({ cookies })
    const {data, error} = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    console.log(data)
    console.log(error)

    revalidatePath('/')
  }

  const handleSignOut = async () => {
    'use server'
    const supabase = createServerActionClient<Database>({ cookies })
    await supabase.auth.signOut()
    revalidatePath('/')
  }

  const handleHome = async () => {
    'use server'
    revalidatePath('/')
  }

  return (
    <div className='text-white flex flex-col items-center justify-center h-screen'>
      <form>
        <span className='flex flex-col w-[350px]'>
          <label>E-mail</label>
          <input className='rounded-sm h-[35px] bg-[#1D1C23] px-[10px] outline-none' name="email" />
          <label className='mt-3'>Password</label>
          <input className='rounded-sm h-[35px] bg-[#1D1C23] px-[10px] outline-none' type="password" name="password" />
        </span>
        <span className='flex gap-6 mt-5 w-full items-center justify-center'>
          <button formAction={handleSignUp} className='bg-[#fff] text-black font-medium px-[20px] py-[5px] rounded-sm'>Sign up</button>
          <button formAction={handleSignIn} className='bg-[#fff] text-black font-medium px-[20px] py-[5px] rounded-sm'>Sign in</button>
        </span>
      </form>
    </div>
  )
}