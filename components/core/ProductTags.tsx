import React, { FC } from 'react'
import { Badge } from '../ui/badge'

type Props = {
  tags: string[]
}

const ProductTags: FC<Props> = ({ tags }) => {
  return (
    <div className='flex items-center gap-2 flex-wrap'>
      {tags.map((tag) => (
        <Badge variant='secondary' className='text-sm py-1 px-4 font-normal'>
          {tag}
        </Badge>
      ))}
    </div>
  )
}

export default ProductTags
