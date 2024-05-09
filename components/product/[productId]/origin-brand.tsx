'use client'

import { getOriginById } from '@/app/api/origin/route'
import  { useEffect, useState } from 'react'

const OriginProduct = ({id_origin} : {id_origin: number}) => {
  const [origin,setOrigin] = useState<any>()

  useEffect(()=>{
    const fetch = async () => {
      const data = await getOriginById(id_origin)
      setOrigin(data)
    }
    fetch()
    
  },[])
  return (
    <p>Xuất xứ: {origin ? origin.name : ''}</p>
  )
}

export default OriginProduct