import { ProductsResponse } from '@/types'

const ENDPOINT = 'https://dummyjson.com/products?limit=20'

export const fetchProducts = async () => {
  const resp = await fetch(ENDPOINT, { cache: 'force-cache' }).then((res) => res.json())
  return resp as ProductsResponse
}
