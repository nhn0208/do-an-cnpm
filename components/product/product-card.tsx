import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { formatToVND } from '@/lib/format';

const ProductCard = ( data : any) => {
    const router = useRouter();
    
  return (
    <div
    onClick={()=> router.push(`/product/${data.id_item}`)}
     className="w-[300px] h-[450px] flex flex-col px-14 items-center justify-between my-4 mx-2 hover:border-2 border-slate-950 dark:border-white rounded-md hover:shadow-3xl transition-shadow dark:hover:shadow-white" >
        <span className='cursor-pointer' >{data.title}</span>
        <Image src={data.image} alt='' width={200} height={400}  decoding='async' data-nimg='1' priority/>
        <p>{formatToVND(data.price)}</p>
    </div>
  )
}

export default ProductCard