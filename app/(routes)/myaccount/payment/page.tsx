'use client'

import { Button } from '@/components/ui/button';
import { CartProps} from '@/lib/interface';
import{ useEffect, useState } from 'react'

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import AddressComponent from '@/components/payment/address/address';
import { checkoutCart, fetchCart } from '@/app/api/cart/route';
import PaymentProduct from '@/components/payment/payment-product';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import Link from 'next/link';
import { formatToVND } from '@/lib/format';


const Payment = () => {
    const [cartList,setCartList] = useState<CartProps[] | null>([]);
    const [name,setName] = useState<string>("");
    const [mail,setMail] = useState<string>("");
    const [phone,setPhone] = useState<string>("");
    const [address,setAddress] = useState<string>("");
    const [addressField,setAddressField] = useState<string>("");
    const [completed,setCompleted] = useState<boolean>(false)
    const [checkout,setCheckout] = useState<boolean>(false)

    const handleCheckout = async () => {
      const response = await checkoutCart({
        id_payment_method: 2,
        description: `${name} - ${phone}`,
        userLat: "10.846011726386639",
        userLng: "106.77740348320262",
        address: `${addressField} ${address}`
      })
      console.log(response);
      
      setCheckout(true)
      
    }
    useEffect(()=>{
      const fetchData = async ()=>{
          const data = await fetchCart()
          setCartList(data)
      }
      fetchData()
      
    },[])

    useEffect(()=>{
      setCompleted(name !== '' && mail !== '' && phone !== '' && address !== '' && addressField !=='')
    },[name,mail,phone,address,addressField])

    if ( checkout) {
      return (
        <div className='w-full p-20'>
          <h1>Đặt hàng thành công</h1>
        </div>
      )
    }
    
  return (
    // <div className='flex flex-col items-center'>
    //   {/* <div className='w-full flex justify-center py-10 space-x-4'>
    //       <h1 className={cn([itemSelected === "order" ? "text-blue-600" : " text-gray-500","cursor-pointer"])} onClick={()=>setItemSelected("order")}>Kiểm tra đơn hàng</h1>
    //       <h1 className={cn([itemSelected === "infor" ? "text-blue-600" : " text-gray-500",'cursor-pointer'])} onClick={()=>setItemSelected("infor")}>Thông tin người nhận</h1>
    //       <h1 className={cn([itemSelected === "payment" ? "text-blue-600" : " text-gray-500",'cursor-pointer'])} onClick={()=>setItemSelected("payment")}>Phương thức thanh toán</h1>
    //   </div> */}
      
      <div className='w-full flex px-20 py-20 justify-center'>
        <div className='space-y-4 w-1/2 flex flex-col items-center px-20'>
          <div className=" w-full items-center">
              <Label htmlFor="name">Họ tên</Label>
              <Input id="name" placeholder="Họ tên" className='rounded-lg' onChange={e => setName(e.target.value)}/>
            </div>
            <div className="w-full flex items-center space-x-2">
              <div className='w-2/3'>
                <Label htmlFor="email">Email</Label>
                <Input  id="email" placeholder="Emai" className='rounded-lg'  onChange={e => setMail(e.target.value)}/>
              </div>
              <div className='w-1/3'>
                <Label htmlFor="phoneNumber">Số điện thoại</Label>
                <Input  id="phoneNumber" placeholder="Điện thoại" className='rounded-lg'  onChange={e => setPhone(e.target.value)}/>
              </div>
            </div>
            <div className="w-full items-center">
              <Label htmlFor="address">Địa chỉ</Label>
              <Input id="address" placeholder="Địa chỉ" className='rounded-lg'  onChange={e => setAddressField(e.target.value)}/>
            </div>
            <AddressComponent sendDataToParent={setAddress}/>
            <div className='border border-gray-500 rounded-lg w-full py-8 px-4'>
              <RadioGroup defaultValue="default">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="default" id="r1" />
                  <Label htmlFor="r1" className='text-gray-500'>Thanh toán khi giao hàng (COD)</Label>
                </div>
              </RadioGroup>
            </div>
            <div className='flex justify-between w-full pt-6'>
              <Link href="/myaccount/cart" className="text-blue-600 text-sm">Giỏ hàng</Link>
              <Button 
                variant={"outline"} className='bg-blue-500 text-white p-6'
                disabled={!completed}
                onClick={()=> handleCheckout()}
              >
                Đặt hàng
              </Button>
            </div>
        </div>
        {/**Cart */}
        <div className='w-full border-l border-black p-8 pr-32'>
          {cartList && cartList.map((cart,index)=>(
            <div key={index}>
              <PaymentProduct name={cart.name} id_item={cart.id_item} size={cart.size} price={cart.price} quantity={cart.quantity}/>
            </div>
          ))}

          <div className='w-full py-4 space-y-2 border-b border-gray-300 text-gray-500'>
            <div className='w-full flex justify-between'>
              <p>Tạm tính</p>
              <p>{formatToVND(cartList ? cartList?.reduce(((total,num)=> { return total + num.price}),0) : 0)}</p>
            </div>
            <div className='w-full flex justify-between'>
              <p>Phí ship</p>
              <p>{formatToVND(35000)}</p>
            </div>
          </div>
          <div className='w-full flex justify-between py-4 text-xl'>
            <h2>Tổng tiền</h2>
            <p>{formatToVND(cartList ? cartList?.reduce(((total,num)=> { return total + num.price}),35000) : 0)}</p>
          </div>
        </div>
      </div>
  )
}

export default Payment