'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import LoginButton from './login-button'
import { isLogin } from '@/app/(auth)/route'
import { ProfileProps } from '@/lib/interface'
import { useRouter } from 'next/navigation'

interface SignInProps {
    classname?: string
}

const SignIn = ( {classname} : SignInProps ) => {
  const router = useRouter();
  const [profile,setProfile] = useState<ProfileProps | null>({});
  const [username,setUsername] = useState<string>('')
  const [password,setPassword] = useState<string>('')
  const [checked,setChecked] = useState(false)
  const [isClick,setClick] = useState(false)

  useEffect(()=>{
    const fetchProfile = async () => {
        const res = await isLogin();
        setProfile(res);
        router.refresh();
    }
    fetchProfile();
    
},[isClick])
  return (
    <div className={`${classname}`}>
        <div className='py-5'>
        <h1 className='text-3xl my-5 font-semibold text-slate-950 dark:text-white'>Tài Khoản</h1>
      </div>
      <div className='w-[500px] lg:w-[600px] mx-auto text-center'>
        <h1 className='text-3xl my-5 font-semibold text-slate-950 dark:text-white'>ĐĂNG NHẬP</h1>
        <div className='text-left  space-y-4'>
          <div>
            <Label htmlFor='email' className='text-xl font-semibold text-slate-950 dark:text-white'>Địa chỉ email / SDT <span className='text-red-600'>*</span></Label>
            <Input id='email' className='mt-2' onChange={(e)=>setUsername(e.target.value)}/>
          </div>
          <div>
            <Label htmlFor='password' className='text-xl font-semibold text-slate-950 dark:text-white'>Mật khẩu <span className='text-red-600'>*</span></Label>
            <Input id='password' className='mt-2' type='password' onChange={e=> setPassword(e.target.value)}/>
          </div>
          <div className='p-5 space-y-8 pb-12 border border-slate-950 dark:border-slate-800 shadow-md'>
            <p className='text-xl font-semibold text-slate-950 dark:text-white text-balance'>For security, use of Google's reCAPTCHA service is required which is subject to the Google <span>Privacy Policy</span> and <span>Terms of Use</span>.</p>
            <div className='flex items-center space-x-2'>
            <Checkbox id='confirm-policy' 
                  checked={checked} 
                  onCheckedChange={()=> setChecked(prev=> !prev)}
                  className={cn(!checked ? "border-red-600":"")}
                  />
              <Label htmlFor='confirm-policy'>I agree to these terms (required).</Label>
            </div>
          </div>
          <LoginButton username={username} password={password} handleClick={()=>setClick(!isClick)} />
        </div>
      </div>
    </div>
  )
}

export default SignIn