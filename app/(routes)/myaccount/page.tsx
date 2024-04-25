'use client'

import { useEffect, useState } from "react";
import SignIn from "@/components/sign-in"
import SignUp from "@/components/sign-up"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProfileProps } from "@/lib/interface";
import { isLogin } from "@/app/api/auth/route";
const AccountPage = () => {
  const router = useRouter();
    //const { data: session } = useSession();
    //console.log("Session: ",session);
    const [profile,setProfile] = useState<ProfileProps>({});
    useEffect(()=>{
        const fetchProfile = async () => {
            const res = await isLogin();
            setProfile(res);
            
        }
        fetchProfile();

        return () => {}
    })

  
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const search = searchParams.get('action')
  const [ isSignUp , setSignUp] = useState( search === 'register' ? true : false || true);

  if (profile) return (
    <div>
      {profile.name}
    </div>
  )
  return (
    <div className='w-full flex flex-col items-center'>
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