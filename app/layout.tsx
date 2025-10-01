import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { ErrorBoundary } from '@/components/ErrorBoundary'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'QuickEats',
    template: '%s | QuickEats'
  },
  description: 'Fast and reliable food delivery platform',
  keywords: ['food delivery', 'quick delivery', 'restaurants', 'food ordering'],
  authors: [{ name: 'QuickEats Team' }],
  creator: 'QuickEats',
  publisher: 'QuickEats',
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://quickeats.com',
    siteName: 'QuickEats',
    title: 'QuickEats - Fast and Reliable Food Delivery',
    description: 'Fast and reliable food delivery platform',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'QuickEats'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'QuickEats',
    description: 'Fast and reliable food delivery platform',
    images: ['/og-image.png']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </body>
    </html>
  )
}