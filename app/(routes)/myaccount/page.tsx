'use client'

import { useEffect, useState } from "react";
import SignIn from "@/components/sign-in"
import SignUp from "@/components/sign-up"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { ProfileProps } from "@/lib/interface";
import { isLogin } from "@/app/api/login/login";
import { ReceiptTextIcon, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import CartInAccount from "@/components/myaccount/cart";
import Invoices from "@/components/myaccount/invoices";

const AccountPage = () => {
  const router = useRouter();
    const [profile,setProfile] = useState<ProfileProps>({});
    
    //const [invoices,setInvoices] = useState<InvoiceProps[] | null>([])
    useEffect(()=>{
      const fetchProfile = async () => {
        const res = await isLogin();
        setProfile(res);    
      }
      fetchProfile()
      //fetchInvoiceData()
    })
  
  const pathname = usePathname()
  const searchParams = useSearchParams();
  const menu = searchParams.get('menu')
  const search = searchParams.get('action')
  const [ isSignUp , setSignUp] = useState( search === 'register' ? true : false || true);
  const [sidebar,setSidebar] = useState<string>(menu ?? 'infor')

  if (profile) return (
    <div className="flex">
      {/* Sidebar account */}
      <div className="pt-20 w-[250px] h-screen border-r border-primary">
        <div 
        onClick={()=>setSidebar('infor')}
        className={cn(["h-12 w-full flex items-center space-x-2 pl-4", sidebar === 'infor' ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
          <div className={cn("border-2 rounded-full p-2", sidebar === 'infor' ? 'border-white' : 'border-primary')}>
            <User className={cn([sidebar === 'infor' ? 'text-white' : 'text-primary'])} width={20} height={20}/>
          </div>
          <p className="text-slate-950 dark:text-white">Thông tin cá nhân</p>
        </div>
        <div 
        onClick={()=>setSidebar('cart')}
        className={cn(["h-12 w-full flex items-center space-x-2 pl-4", sidebar === 'cart' ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
          <div className={cn("border-2 rounded-full px-2 py-[6px]", sidebar === 'cart' ? 'border-white' : 'border-primary')}>
            <ShoppingBag className={cn([sidebar === 'cart' ? 'text-white' : 'text-primary'])} width={20} height={24}/>
          </div>
          <p className="text-slate-950 dark:text-white">Giỏ hàng</p>
        </div>
        <div 
        onClick={()=>setSidebar('invoices')}
        className={cn(["h-12 w-full flex items-center space-x-2 pl-4", sidebar === 'invoices' ? 'text-white bg-primary border-r-8 border-slate-950':'text-slate-950'])}>
          <div className={cn("border-2 rounded-full p-2", sidebar === 'invoices' ? 'border-white' : 'border-primary')}>
            <ReceiptTextIcon className={cn([sidebar === 'invoices' ? 'text-white' : 'text-primary'])} width={20} height={20}/>
          </div>
          <p className="text-slate-950 dark:text-white">Lịch sử mua hàng</p>
        </div>
        
      </div>
      {/* Main account page */}
      {sidebar === 'infor' &&
      <div className="w-full p-20 flex justify-center">
          <div className="w-1/3">
              <Image src={profile.image || '/google.png'} 
                alt="" width={200} height={200} 
                className="rounded-full" style={{width: "200px", height: "200px"}}
                priority
              />
          </div>
          <div>
            <h1>Username: {profile.name}</h1>
            <h1>Email: {profile.email}</h1>
            <h1>Số điện thoại: {profile.phone}</h1>
            <h1>Vai trò: {profile.role}</h1>
          </div>
      </div>
      }
      {sidebar === 'cart' &&
        <CartInAccount/>
      }
      {sidebar === 'invoices' &&
        <Invoices />
      }
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