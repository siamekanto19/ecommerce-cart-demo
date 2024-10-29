import { cn } from '@/lib/utils'
import React, { FC } from 'react'

type Props = {
  text: string
  className?: string
}

const DiscountTag: FC<Props> = ({ text, className }) => {
  return (
    <div className={cn('relative', className)}>
      <svg className='absolute inset-0 z-0' width='74' height='30' viewBox='0 0 74 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <p className='text-white absolute top-0 right-0 text-sm font-medium z-10'>{text}</p>
        <path d='M0 4C0 1.79086 1.79086 0 4 0H62V24H0V4Z' fill='url(#paint0_linear_5313_10444)' />
        <path d='M62 24H70.7639C72.2507 24 73.2177 22.4354 72.5528 21.1056L62 0V24Z' fill='#6B3DEB' />
        <path d='M62 0H70.7639C72.2507 0 73.2177 1.56462 72.5528 2.89443L62 24V0Z' fill='#A180FF' />
        <path d='M0 24H4V30L0 24Z' fill='url(#paint1_linear_5313_10444)' />
        <defs>
          <linearGradient id='paint0_linear_5313_10444' x1='62' y1='24' x2='-2.04104' y2='15.6455' gradientUnits='userSpaceOnUse'>
            <stop stop-color='#9670FF' />
            <stop offset='1' stop-color='#6B3DEB' />
          </linearGradient>
          <linearGradient id='paint1_linear_5313_10444' x1='2' y1='30' x2='2' y2='24' gradientUnits='userSpaceOnUse'>
            <stop stop-color='#A180FF' />
            <stop offset='1' stop-color='#6B3DEB' />
          </linearGradient>
        </defs>
      </svg>
      <p className='text-white z-10 absolute top-[3px] left-2.5 text-xs font-medium'>{text}</p>
    </div>
  )
}

export default DiscountTag
