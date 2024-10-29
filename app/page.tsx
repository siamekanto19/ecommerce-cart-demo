import CartSheet from '@/components/core/CartSheet'
import ProductCardList from '@/components/core/ProductCardList'
import { fetchProducts } from '@/lib/server-requests'
import React from 'react'

const Home = async () => {
  const { products } = await fetchProducts()

  return (
    <section className='x-container py-10 lg:py-20 mx-auto'>
      <ProductCardList products={products} />
      <CartSheet />
    </section>
  )
}

export default Home
