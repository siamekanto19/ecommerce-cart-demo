'use client'
import { Product } from '@/types'
import React, { FC, Fragment, useMemo, useState } from 'react'
import Image from 'next/image'
import { useCartStore } from '@/stores'
import { Minus, Plus } from 'lucide-react'
import ProductInfoDialog from './ProductInfoDialog'

type Props = {
  product: Product
}

const ProductActions: FC<Props> = ({ product }) => {
  const cartProducts = useCartStore((state) => state.products)
  const addProduct = useCartStore((state) => state.addProduct)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const [productInfoDialogOpen, setProductInfoDialogOpen] = useState(false)

  const productInCart = useMemo(() => {
    return cartProducts.find((cartProduct) => cartProduct.id === product.id)
  }, [cartProducts])

  const handleAddToCart = () => {
    addProduct({
      id: product.id,
      imageUrl: product.thumbnail,
      name: product.title,
      price: product.price,
      quantity: 1,
    })
  }

  return (
    <Fragment>
      {productInCart ? (
        <div className='h-9 border-2 border-green-600 w-full rounded-[6px] px-2 flex items-center justify-between bg-green-600 text-white text-sm font-medium'>
          <Minus onClick={() => updateQuantity(productInCart.id, productInCart.quantity - 1)} className='hover:text-muted cursor-pointer' size={20} absoluteStrokeWidth strokeWidth={1.5} />
          <p>{productInCart.quantity} Added in Cart</p>
          <Plus onClick={() => updateQuantity(productInCart.id, productInCart.quantity + 1)} className='hover:text-muted cursor-pointer' size={20} absoluteStrokeWidth strokeWidth={1.5} />
        </div>
      ) : (
        <button onClick={handleAddToCart} className='bg-white/30 rounded-[6px] cursor-pointer border-[1.5px] border-white w-full h-9 text-white backdrop-blur-[8px] text-sm font-medium flex justify-center items-center gap-2'>
          <Image src='/images/cart-add.svg' width={20} height={20} alt='Cart' />
          Add to Cart
        </button>
      )}
      <button onClick={() => setProductInfoDialogOpen(true)} className='bg-white/30 rounded-[6px] cursor-pointer border-[1.5px] border-white w-full h-9 text-white backdrop-blur-[8px] text-sm font-medium flex justify-center items-center gap-2'>
        <Image src='/images/eye.svg' width={20} height={20} alt='Eye' />
        Quick View
      </button>
      <ProductInfoDialog isOpen={productInfoDialogOpen} setIsOpen={setProductInfoDialogOpen} product={product} />
    </Fragment>
  )
}

export default ProductActions
