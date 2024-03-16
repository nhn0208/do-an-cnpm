import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { ProductProps } from '@/lib/interface'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import { Button } from '../ui/button'
  

const ProductCard = ( data : ProductProps) => {
    const router = useRouter();
    
  return (
    <div className="w-[300px] h-[450px] flex flex-col px-14 items-center justify-center my-4 mx-2 border-2 border-slate-950 dark:border-white rounded-md" >
        <span className='cursor-pointer' onClick={()=> router.push(`/product/${data.id}`)}>{data.title}</span>
        <Carousel className='w-full p-4'>
            <CarouselContent onClick={()=> router.push(`/product/${data.id}`)}>
                {data.images.map((image,index) => (
                    <CarouselItem key={index} className=' cursor-pointer'>
                        <Image src={image} alt='' width={200} height={400} />
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>

    </div>
  )
}

export default ProductCard