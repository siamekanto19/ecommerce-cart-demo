import { CartState } from '@/types'
import { create } from 'zustand'

export const useCartStore = create<CartState>((set) => ({
  products: [],

  addProduct(product) {
    return set((state) => {
      const existingProduct = state.products.find((cartProduct) => cartProduct.id === product.id)
      if (existingProduct) {
        return {
          products: state.products.map((cartProduct) => (cartProduct.id === product.id ? { ...cartProduct, quantity: cartProduct.quantity + product.quantity } : cartProduct)),
        }
      } else {
        return { products: [...state.products, product] }
      }
    })
  },

  removeProduct(productId) {
    return set((state) => ({
      products: state.products.filter((product) => product.id !== productId),
    }))
  },

  updateQuantity(id, quantity) {
    return set((state) => ({
      products: quantity > 0 ? state.products.map((product) => (product.id === id ? { ...product, quantity } : product)) : state.products.filter((product) => product.id !== id),
    }))
  },

  clearCart() {
    return set({ products: [] })
  },

  getTotal() {
    let total = 0
    const state = useCartStore.getState()
    for (const product of state.products) {
      total = total + product.price * product.quantity
    }

    return total
  },
}))
