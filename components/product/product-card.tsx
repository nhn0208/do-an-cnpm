import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { formatToVND } from '@/lib/format';

const ProductCard = ( data : any) => {
    const router = useRouter();
    
  return (
    <div
    onClick={()=> router.push(`/product/${data.id_item}`)}
     className="w-[300px] h-[400px] flex flex-col px-14 items-center justify-between my-4 mx-2
       hover:border-2 hover:border-primary rounded-md hover:shadow-3xl transition-shadow hover:shadow-primary" >
        <div className='mb-8'></div>
        <div className='w-full h-3/4'><Image src={data.image} alt='' width={200} height={400}  decoding='async' data-nimg='1' priority/></div>
        <span className='cursor-pointer' >{data.title}</span>
        <p></p>
    </div>
  )
}

export default ProductCard