'use client'
import { cn } from '@/lib/utils'
import React from 'react'

const ErrorSection = ({ error, className }: { error: Error; className?: string }) => {
  return (
    <div className={cn('w-full flex flex-col justify-center items-center bg-muted rounded-lg min-h-[20rem]', className)}>
      <h1 className='text-2xl font-semibold text-center'>{error.message || 'Oops! Something went wrong'}</h1>
    </div>
  )
}

export default ErrorSection
