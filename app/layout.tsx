import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { ErrorBoundary } from '@/Components/ErrorBoundary'
import Link from 'next/link'

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
    follow: true
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
    maximumScale: 1
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <ErrorBoundary>
          <div className="min-h-screen">
            <nav className="bg-white shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">QuickEats</span>
                    </Link>
                  </div>
                  <div className="flex space-x-8">
                    <Link href="/CustomerOrders" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                      Orders
                    </Link>
                    <Link href="/DeliveryPartners" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                      Partners
                    </Link>
                    <Link href="/SurgeControl" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                      Surge Control
                    </Link>
                    <Link href="/LiveAnalytics" className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-gray-600">
                      Analytics
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
            <main className="container mx-auto py-10 px-4">
              {children}
            </main>
          </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}