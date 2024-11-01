import { ProductsResponse } from '@/types'
import axios from 'axios'

const ENDPOINT = 'https://dummyjson.com/products'

type FetchProductParams = {
  limit?: number
  skip?: number
  sortBy?: string
  order?: 'asc' | 'desc'
}

export const fetchProducts = async (params: FetchProductParams) => {
  const resp = await axios<ProductsResponse>({
    method: 'GET',
    url: ENDPOINT,
    params: {
      limit: params.limit ? params.limit : 5,
      skip: params.skip ? params.skip : undefined,
      sortBy: params.sortBy ? params.sortBy : undefined,
      order: params.order ? params.order : undefined,
    },
  })

  return resp.data
}
