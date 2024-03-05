'use client'

import { useState } from "react";
import SignIn from "@/components/sign-in"
import SignUp from "@/components/sign-up"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
const AccountPage = () => {
  const { data : session } = useSession();

  
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const search = searchParams.get('action')
  const [ isSignUp , setSignUp] = useState( search === 'register' ? true : false || true);

  if (session?.user) return (
    <div>
      {session.user.name}
    </div>
  )
  return (
    <div className='w-full text-center'>
      <SignUp classname={cn([ isSignUp ? 'block': 'hidden','animate-fade-in'])}/>
      <SignIn classname={cn([ !isSignUp ? 'block': 'hidden','animate-fade-in'])}/>
      { isSignUp 
      ? <p className="text-slate-950 dark:text-white">Bạn đã có tài khoản? 
          <span className="underline cursor-pointer hover:opacity-80" onClick={()=> { setSignUp(!isSignUp); router.push(pathname) }}>Đăng nhập ngay</span>
        </p>
      : <p className="text-slate-950 dark:text-white">
          Bạn chưa có tài khoản? <span className="underline cursor-pointer hover:opacity-80" onClick={()=> { setSignUp(!isSignUp); router.push(pathname + '?action=register') }}>Đăng ký ngay</span>
        </p>
      }
            
    </div>
  )
}

export default AccountPage