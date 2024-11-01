'use client'
import { Product } from '@/types'
import React, { Dispatch, FC, SetStateAction, useMemo } from 'react'
import { Dialog, DialogContent } from '../ui/dialog'
import { AspectRatio } from '../ui/aspect-ratio'
import { addPercentage, formatCurrency } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { useCartStore } from '@/stores'
import { Button } from '../ui/button'
import { Minus, Plus } from 'lucide-react'
import ProductTags from './ProductTags'

type Props = {
  product: Product
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

const ProductInfoDialog: FC<Props> = ({ product, isOpen, setIsOpen }) => {
  const cartProducts = useCartStore((state) => state.products)
  const addProduct = useCartStore((state) => state.addProduct)
  const updateQuantity = useCartStore((state) => state.updateQuantity)

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
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className='w-screen md:max-w-xl'>
        <img className='w-full h-[20rem] object-cover rounded-t-sm' src={product.thumbnail} alt={product.title} />
        <p className='text-sm text-muted-foreground'>{product.brand}</p>
        <h2 className='text-xl font-medium'>{product.title}</h2>
        <div className='flex items-center gap-5'>
          <h3 className='text-2xl font-semibold text-brand'>{formatCurrency(product.price)}</h3>
          <h3 className='text-lg text-muted-foreground line-through'>{formatCurrency(addPercentage(product.price, product.discountPercentage))}</h3>
        </div>
        <p className='text-base text-muted-foreground'>{product.description}</p>
        <ProductTags tags={product.tags} />
        <div className='pt-6'>
          {productInCart ? (
            <div className='h-12 w-full rounded-[6px] px-2 flex items-center justify-between bg-green-600 text-white text-sm font-medium'>
              <Minus onClick={() => updateQuantity(productInCart.id, productInCart.quantity - 1)} className='hover:text-muted cursor-pointer' size={25} absoluteStrokeWidth strokeWidth={1.5} />
              <p>{productInCart.quantity} Added in Cart</p>
              <Plus onClick={() => updateQuantity(productInCart.id, productInCart.quantity + 1)} className='hover:text-muted cursor-pointer' size={25} absoluteStrokeWidth strokeWidth={1.5} />
            </div>
          ) : (
            <Button onClick={handleAddToCart} className='w-full h-12 bg-brand hover:bg-blue-600'>
              Add To Cart
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductInfoDialog
