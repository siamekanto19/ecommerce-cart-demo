'use client'
import { useCartStore } from '@/stores'
import { ShoppingCart } from 'lucide-react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { ScrollArea } from '../ui/scroll-area'
import CartItem from './CartItem'
import { formatCurrency } from '@/lib/utils'

const CartSheet = () => {
  const products = useCartStore((state) => state.products)
  const getTotal = useCartStore((state) => state.getTotal)

  if (!products.length) {
    return null
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className='fixed top-6 right-6 z-30'>
          <button className='h-12 px-5 rounded-full flex justify-center items-center gap-2 bg-blue-100 hover:bg-blue-200 text-brand relative'>
            <ShoppingCart size={20} />
            <p className='font-medium'>{products.length}</p>
          </button>
        </div>
      </SheetTrigger>
      <SheetContent className='w-screen md:max-w-lg p-0'>
        <SheetHeader className='h-[6rem] p-4 space-y-1'>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>You have {products.length} item(s) in your cart</SheetDescription>
        </SheetHeader>
        <ScrollArea className='h-[calc(100vh-6rem-4rem)]'>
          <div className='px-4 pb-4 flex flex-col gap-6'>
            {products.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>
        </ScrollArea>
        <div className='h-[4rem] border-t text-lg px-4 flex items-center justify-between font-medium'>
          <h3>Subtotal</h3>
          <h3>{formatCurrency(getTotal())}</h3>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
