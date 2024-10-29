'use client'
import { Product } from '@/types'
import React, { FC } from 'react'
import DiscountTag from './DiscountTag'
import { addPercentage, formatCurrency } from '@/lib/utils'
import Image from 'next/image'
import ProductActions from './ProductActions'

type Props = {
  product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
  return (
    <div className='w-full p-4 rounded-[8px] hover:shadow-md group bg-white relative flex flex-col h-full group'>
      <div className='relative w-full group-hover:bg-black/25 rounded-[8px]'>
        <Image className='rounded-[6px]' width={210} height={210} src={product.thumbnail} alt={product.title} />
        <div className='absolute w-full bottom-2 hidden group-hover:flex flex-col gap-2 px-4 z-20'>
          <ProductActions product={product} />
        </div>
      </div>
      <p className='pt-1 text-sm text-muted-foreground'>{product.brand}</p>
      <h2 className='pt-0.5 font-medium'>{product.title}</h2>
      <div className='pt-1 mt-auto flex gap-2 items-center'>
        <h3 className='text-brand font-medium text-[20px] line-clamp-2'>{formatCurrency(product.price)}</h3>
        {Math.round(product.discountPercentage) > 0 ? <h4 className='text-muted-foreground text-sm line-through'>{formatCurrency(addPercentage(product.price, product.discountPercentage))}</h4> : null}
      </div>
      {Math.round(product.discountPercentage) > 0 ? (
        <div className='absolute inset-0 -ml-1 mt-6'>
          <DiscountTag text={`${Math.round(product.discountPercentage)}% Off`} />
        </div>
      ) : null}
    </div>
  )
}

export default ProductCard
