'use client'
import { isLogin } from "@/app/api/login/login"
import { Button } from '../ui/button'
import { addProductId } from '@/app/api/cart/cart'
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
        variant={"custom"}
      onClick={() => {
        if (profile){
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