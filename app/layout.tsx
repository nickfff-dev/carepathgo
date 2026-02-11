import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono, Poppins } from 'next/font/google'

import './globals.css'

const _geist = Geist({ subsets: ['latin'] })
const _geistMono = Geist_Mono({ subsets: ['latin'] })
const _poppins = Poppins({weight: ['100','200', '300', '400', '500', '600', '700', '800', '900' ]})

export const metadata: Metadata = {
  title: 'DoseVana - Scalable Wellness Solution',
  description: 'A done-for-you medical partnership that pays off from Patient #1. HIPAA-compliant services with 50+ physician network.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
