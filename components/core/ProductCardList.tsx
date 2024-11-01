'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/lib/server-requests'
import ProductCardSkeleton from './ProductCardSkeleton'
import ErrorSection from '../shared/ErrorSection'
import { Fragment, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'

const ProductCardList = () => {
  const [limit, setLimit] = useState(5)

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', limit],
    queryFn: () => fetchProducts({ limit }),
  })

  if (error) {
    return <ErrorSection error={error} className='w-full md:w-2/3 lg:w-1/2 mx-auto' />
  }

  return (
    <section>
      <div className='w-full @container'>
        {isLoading ? (
          <div className='w-full grid grid-flow-row grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 gap-5'>
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
            <ProductCardSkeleton />
          </div>
        ) : (
          <Fragment>
            <div className='w-full flex justify-end'>
              <Select value={limit.toString()} onValueChange={(limit) => setLimit(parseInt(limit))}>
                <SelectTrigger className='w-[200px]'>
                  <SelectValue placeholder='Product limit' />
                  <SelectContent>
                    <SelectItem value='5'>5 Products</SelectItem>
                    <SelectItem value='10'>10 Products</SelectItem>
                    <SelectItem value='25'>25 Products</SelectItem>
                    <SelectItem value='50'>50 Products</SelectItem>
                  </SelectContent>
                </SelectTrigger>
              </Select>
            </div>
            <div className='mt-5 w-full grid grid-flow-row grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 gap-5'>
              {data?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </Fragment>
        )}
      </div>
    </section>
  )
}

export default ProductCardList
