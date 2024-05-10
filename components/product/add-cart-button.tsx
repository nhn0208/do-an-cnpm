'use client'
import { isLogin } from "@/app/api/auth/route"
import { Button } from '../ui/button'
import { addProductId } from '@/app/api/cart/route'
import { ProfileProps } from "@/lib/interface"
import { useEffect, useState } from "react"
import { notification } from "antd"

const AddCartButton = ({id_item_detail} : { id_item_detail : number} ) => {
  const [profile,setProfile] = useState<ProfileProps | null>();
    const addHandle = async () => {
        await addProductId(id_item_detail)
    }

    useEffect(()=>{
      const fetchProfile = async () => {
          const res = await isLogin();
          setProfile(res);
      }
      fetchProfile();
      
      
  },[profile])
  return (
    <div>
        <Button
        className='dark:hover:bg-slate-950 dark:text-white border-2 dark:border-white'
      onClick={() => {
        if (profile !== null){
          addHandle()
        }else{
          notification.open({
            message: "Bạn chưa đăng nhập",
            description:'',
            placement: 'bottomRight',
            type: 'error',
        })
        }
      }}
    >
      Thêm vào giỏ hàng
    </Button>
    </div>
  )
}

export default AddCartButton