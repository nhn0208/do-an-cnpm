import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ProductProps } from '@/lib/interface'

const ProductCard = ( data : any) => {
    const router = useRouter();
    
  return (
    <div className="w-[300px] h-[450px] flex flex-col px-14 items-center justify-center my-4 mx-2 border-2 border-slate-950 dark:border-white rounded-md" >
        <span className='cursor-pointer' onClick={()=> router.push(`/product/${data.id_item}`)}>{data.title}</span>
        <Image src={data.image} alt='' width={200} height={400} decoding='async' data-nimg='1'/>
    </div>
  )
}

export default ProductCard