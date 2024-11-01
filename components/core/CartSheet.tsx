'use client'
import { formatCurrency } from '@/lib/utils'
import { useCartStore } from '@/stores'
import { AnimatePresence, motion } from 'framer-motion'
import { ShoppingCart } from 'lucide-react'
import { Fragment, useState } from 'react'
import { ScrollArea } from '../ui/scroll-area'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from '../ui/sheet'
import CartItem from './CartItem'

const CartSheet = () => {
  const [isOpen, setIsOpen] = useState(false)
  const products = useCartStore((state) => state.products)
  const getTotal = useCartStore((state) => state.getTotal)

  return (
    <Fragment>
      <AnimatePresence>
        {products.length ? (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ type: 'keyframes' }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className='z-30 font-medium fixed bottom-4 right-4 lg:bottom-6 lg:right-6 h-14 px-5 rounded-full flex justify-center items-center gap-2 bg-brand text-white hover:bg-blue-600'
          >
            <ShoppingCart size={25} />
            <p>{products.length} Product in cart</p>
          </motion.button>
        ) : null}
      </AnimatePresence>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
    </Fragment>
  )
}

export default CartSheet
