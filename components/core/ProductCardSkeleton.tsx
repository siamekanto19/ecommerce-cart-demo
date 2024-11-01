'use client'
import React from 'react'
import { Skeleton } from '../ui/skeleton'

const ProductCardSkeleton = () => {
  return (
    <div className='p-4'>
      <Skeleton className='w-full h-[15rem] rounded-[6px]' />
      <Skeleton className='mt-2 h-3 w-1/3 rounded-full' />
      <Skeleton className='mt-1.5 w-2/3 rounded-full h-5' />
      <Skeleton className='mt-2.5 h-7 w-1/3 rounded-full' />
    </div>
  )
}

export default ProductCardSkeleton
