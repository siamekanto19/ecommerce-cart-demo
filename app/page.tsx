'use client'
import CartSheet from '@/components/core/CartSheet'
import ProductCardList from '@/components/core/ProductCardList'

const Home = () => {
  return (
    <section className='x-container py-10 lg:py-20 mx-auto'>
      <ProductCardList />
      <CartSheet />
    </section>
  )
}

export default Home
