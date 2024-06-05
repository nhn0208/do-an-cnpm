'use client'

import { useEffect, useState } from "react";
import SignIn from "@/components/sign-in"
import SignUp from "@/components/sign-up"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";
import { CartProps,  ProfileProps } from "@/lib/interface";
import { isLogin } from "@/app/api/login/login";
import { ReceiptTextIcon, ShoppingBag, User } from "lucide-react";
import Image from "next/image";
import { fetchCart } from "@/app/api/cart/cart";
import CartItem from "@/components/cart/cart-item";
import CheckoutButton from "@/components/payment/checkout-button";
//import { getAllInvoice } from "@/app/api/invoice/invoice";
const AccountPage = () => {
  const router = useRouter();
    const [profile,setProfile] = useState<ProfileProps>({});
    const [cartList,setCartList] = useState<CartProps[] | null>([]);
    //const [invoices,setInvoices] = useState<InvoiceProps[] | null>([])
    useEffect(()=>{
      const fetchProfile = async () => {
        const res = await isLogin();
        setProfile(res);    
      }
      const fetchCartData = async ()=>{
        const data = await fetchCart()
        setCartList(data)
      }
      // const fetchInvoiceData = async () => {
      //   const data = await getAllInvoice()
      //   setInvoices(data)
      // }
      fetchCartData()
      fetchProfile()
      //fetchInvoiceData()
    })
    useEffect(()=>{
      
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
      <div className="pt-20 w-1/6 h-screen border-r border-slate-400">
        <div 
        onClick={()=>setSidebar('infor')}
        className={cn(["h-12 flex items-center space-x-2 pl-4", sidebar === 'infor' ? 'text-white bg-blue-400 border-r-8 border-slate-900':'text-slate-950'])}>
          <div className="border-2 border-white rounded-full p-2"><User width={20} height={20}/></div>
          <p>Thông tin cá nhân</p>
        </div>
        <div 
        onClick={()=>setSidebar('cart')}
        className={cn(["h-12 flex items-center space-x-2 pl-4", sidebar === 'cart' ? 'text-white bg-blue-400 border-r-8 border-slate-900':'text-slate-950'])}>
          <div className="border-2 border-white rounded-full px-2 py-[6px] "><ShoppingBag width={20} height={24}/></div>
          <p>Giỏ hàng</p>
        </div>
        <div 
        onClick={()=>setSidebar('invoices')}
        className={cn(["h-12 flex items-center space-x-2 pl-4", sidebar === 'invoices' ? 'text-white bg-blue-400 border-r-8 border-slate-900':'text-slate-950'])}>
          <div className="border-2 border-white rounded-full p-2"><ReceiptTextIcon width={20} height={20}/></div>
          <p>Lịch sử mua hàng</p>
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
      <div className="w-full p-20 flex flex-col space-y-4">
        <div className="w-full flex justify-center">
          {cartList && cartList.map((cart,index)=>(
                      <div key={index} className="w-1/2">
                          <CartItem name={cart.name} 
                          id_item_detail={cart.id_item_detail} 
                          id_item={cart.id_item} 
                          size={cart.size}
                          quantity={cart.quantity}
                          price={cart.price} />
                      </div>
                  ))}
        </div>
        <div className="w-full flex justify-end pr-[300px]"><CheckoutButton/></div>
      </div>
      }
      {sidebar === 'invoices' &&
      <div className="w-full p-20 flex flex-col space-y-4">
      </div>
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