'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/lib/server-requests'
import ProductCardSkeleton from './ProductCardSkeleton'
import ErrorSection from '../shared/ErrorSection'
import { Fragment, useState } from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select'
import { useDebounceValue } from 'usehooks-ts'
import { Input } from '../ui/input'
import { Search } from 'lucide-react'

const ProductCardList = () => {
  const [limit, setLimit] = useState(5)
  const [keyword, setKeyword] = useDebounceValue('', 500)

  const { data, isLoading, error } = useQuery({
    queryKey: ['products', limit, keyword],
    queryFn: () => fetchProducts({ limit, keyword }),
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
            <div className='w-full flex flex-col md:flex-row justify-between'>
              <div className='relative flex items-center w-full md:w-1/2 group'>
                <Input onChange={(e) => setKeyword(e.target.value)} placeholder='Search Products...' className='w-full pl-9 pr-4' />
                <Search absoluteStrokeWidth strokeWidth={1.25} size={20} className='absolute left-2 text-muted-foreground group-focus:text-black' />
              </div>
              <div>
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
            </div>
            {data?.products.length ? (
              <div className='mt-5 w-full grid grid-flow-row grid-cols-1 @md:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4 @7xl:grid-cols-5 gap-5'>
                {data?.products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className='pt-20 w-full flex justify-center text-lg font-medium'>No Product Found</div>
            )}
          </Fragment>
        )}
      </div>
    </section>
  )
}

export default ProductCardList
