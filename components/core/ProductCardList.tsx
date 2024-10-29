'use client'
import { Product } from '@/types'
import React, { FC } from 'react'
import ProductCard from './ProductCard'

type Props = {
  products: Product[]
}

const ProductCardList: FC<Props> = ({ products }) => {
  return (
    <div className='w-full @container'>
      <div className='w-full grid grid-flow-row grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 gap-5'>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductCardList
