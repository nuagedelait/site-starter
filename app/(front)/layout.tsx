import { HigherOrderType } from '@/src/types'

import { Inter } from 'next/font/google'
import '@/styles/app.css'

const inter = Inter({ subsets: ['latin'] })

export default function FrontRootLayout({
  children,
}: HigherOrderType) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
