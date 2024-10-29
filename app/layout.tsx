import React from 'react'
import './globals.css'
import { Murecho } from 'next/font/google'

const murecho = Murecho({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-murecho',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${murecho.className} antialiased`}>{children}</body>
    </html>
  )
}
