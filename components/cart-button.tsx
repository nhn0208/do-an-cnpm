import { ShoppingBag } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

const CartButton = () => {
  return (
    <Sheet>
        <SheetTrigger>
            <div className="bg-white dark:bg-slate-950 text-slate-950 dark:text-white border-slate-950
             dark:border-white border rounded-full px-2 py-[6px] hover:opacity-80">
                <ShoppingBag width={20} height={24} />
            </div>
        </SheetTrigger>
        <SheetContent className="bg-white dark:bg-black">
            <SheetHeader className="pb-8">
                <SheetTitle className="text-[20px]">Shopping Cart</SheetTitle>
            </SheetHeader>
            
        </SheetContent>
        
    </Sheet>
  )
}

export default CartButton