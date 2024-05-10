'use client'

import { getMaterialById } from '@/app/api/material/material'
import  { useEffect, useState } from 'react'

const MaterialProduct = ({id_material} : {id_material: number}) => {
  const [material,setMaterial] = useState<any>()

  useEffect(()=>{
    const fetch = async () => {
      const data = await getMaterialById(id_material)
      setMaterial(data)
    }
    fetch()
    
  },[])
  return (
    <p>Chất liệu: {material ? material.name : ''}</p>
  )
}

export default MaterialProduct