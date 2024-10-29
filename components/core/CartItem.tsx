'use client'
import { formatCurrency } from '@/lib/utils'
import { CartProduct, useCartStore } from '@/stores'
import { Minus, Plus } from 'lucide-react'
import Image from 'next/image'
import React, { FC } from 'react'

type Props = {
  product: CartProduct
}

const CartItem: FC<Props> = ({ product }) => {
  const updateQuantity = useCartStore((state) => state.updateQuantity)

  return (
    <div className='w-full flex items-start gap-2'>
      <Image className='rounded-[6px]' src={product.imageUrl} width={100} height={100} alt={product.name} />
      <div className='w-full'>
        <h3 className='font-medium line-clamp-1'>
          {product.quantity}X {product.name}
        </h3>
        <div className='pt-2 text-brand flex items-center justify-between w-full'>
          <p className='text-muted-foreground'>{formatCurrency(product.price)}</p>
          <p className='text-brand font-medium'>{formatCurrency(product.price * product.quantity)}</p>
        </div>
        <div className='pt-2 flex items-center gap-4'>
          <button className='size-7 bg-blue-100 rounded-full flex justify-center items-center text-brand hover:bg-blue-200'>
            <Minus onClick={() => updateQuantity(product.id, product.quantity - 1)} className='cursor-pointer' size={20} absoluteStrokeWidth strokeWidth={1.5} />
          </button>
          <button className='size-7 bg-blue-100 rounded-full flex justify-center items-center text-brand hover:bg-blue-200'>
            <Plus onClick={() => updateQuantity(product.id, product.quantity + 1)} className='cursor-pointer' size={20} absoluteStrokeWidth strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartItem
