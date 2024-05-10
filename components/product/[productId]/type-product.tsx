'use client'

import { getTypeById } from '@/app/api/type/type'
import  { useEffect, useState } from 'react'

const TypeProduct = ({id_type} : {id_type: number}) => {
  const [type,setType] = useState<any>()

  useEffect(()=>{
    const fetch = async () => {
      const data = await getTypeById(id_type)
      setType(data)
    }
    fetch()
    
  },[])
  return (
    <p>Chất liệu: {type ? type.name : ''}</p>
  )
}

export default TypeProduct