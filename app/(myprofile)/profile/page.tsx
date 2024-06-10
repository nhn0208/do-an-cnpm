'use client'

import { useEffect, useState } from "react";
import Image from "next/image";
import { ProfileProps } from "@/lib/interface";
import { isLogin } from "@/app/api/login/login";

const AccountPage = () => {
  const [profile,setProfile] = useState<ProfileProps>({});
  
  useEffect(()=>{
    const fetchProfile = async () => {
      const res = await isLogin();
      setProfile(res);    
    }
    fetchProfile()
    //fetchInvoiceData()
  })

  return (
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
  )
}

export default AccountPage