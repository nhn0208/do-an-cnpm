'use client'

import Link from "next/link";

export interface SidebarItemProps {
  id_brand?: number,
  name?: string | null
}

const SidebarItem = ({id_brand,name}:SidebarItemProps) => {
  
  return (
    <div className="pb-8">
      <div className="lg:text-base lg:tracking-tight text-sm uppercase font-bold group flex items-center gap-x-2">
        <Link href={id_brand === 0 ? 'http://localhost:3000/product' :`http://localhost:3000/product?id_brand=${id_brand}`} className="text-slate-950 dark:text-white hover:opacity-80">{name}</Link>         
      </div>
    </div>
    
  )
}

export default SidebarItem