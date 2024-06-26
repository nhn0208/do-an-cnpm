'use client'
import { useEffect, useState } from "react";
import SignIn from "@/components/sign-in"
import SignUp from "@/components/sign-up"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProfileProps } from "@/lib/interface";
import { isLogin } from "@/app/api/login/login";
import { ReceiptTextIcon, ShoppingBag, User } from "lucide-react";
import Link from "next/link";


const ProfileLayout = ({ children} : { children : React.ReactNode}) => {
    const router = useRouter();
  const [profile,setProfile] = useState<ProfileProps>({});
  const pathname = usePathname()  
  
  useEffect(()=>{
    const fetchProfile = async () => {
      const res = await isLogin();
      setProfile(res);    
    }
    fetchProfile()
    //fetchInvoiceData()
  })
  
  const searchParams = useSearchParams();
  const search = searchParams.get('action')
  const [ isSignUp , setSignUp] = useState( search === 'register' ? true : false || true);
    if (profile) return (
        <div className="flex">
          {/* Sidebar account */}
          <div className="pt-20 w-[250px] h-screen border-r border-primary">
            <Link
            href={'/profile'}
            className={cn(["h-12 w-full flex items-center space-x-2 pl-4", pathname === '/profile' ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
              <div className={cn("border-2 rounded-full p-2", pathname === '/profile' ? 'border-white' : 'border-primary')}>
                <User className={cn([pathname === '/profile' ? 'text-white' : 'text-primary'])} width={20} height={20}/>
              </div>
              <p className="text-slate-950 dark:text-white">Thông tin cá nhân</p>
            </Link>
            <Link 
            href={'/cart'}
            className={cn(["h-12 w-full flex items-center space-x-2 pl-4", pathname === '/cart' ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
              <div className={cn("border-2 rounded-full px-2 py-[6px]", pathname === '/cart' ? 'border-white' : 'border-primary')}>
                <ShoppingBag className={cn([ pathname === '/cart' ? 'text-white' : 'text-primary'])} width={20} height={24}/>
              </div>
              <p className="text-slate-950 dark:text-white">Giỏ hàng</p>
            </Link>
            <Link 
            href={'/invoice'}
            className={cn(["h-12 w-full flex items-center space-x-2 pl-4", pathname.includes('/invoice') ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
              <div className={cn("border-2 rounded-full p-2", pathname.includes('/invoice') ? 'border-white' : 'border-primary')}>
                <ReceiptTextIcon className={cn([ pathname.includes('/invoice') ? 'text-white' : 'text-primary'])} width={20} height={20}/>
              </div>
              <p className="text-slate-950 dark:text-white">Lịch sử mua hàng</p>
            </Link>
            
          </div>
          <div className="w-full flex justify-center">{children}</div>
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

export default ProfileLayout