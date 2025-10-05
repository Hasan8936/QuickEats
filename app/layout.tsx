import React from 'react'
import { Inter } from 'next/font/google'
import './globals.css'
import { Metadata } from 'next'
import { ErrorBoundary } from '@/components/ErrorBoundary'
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

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-50">
        <ErrorBoundary>
          <div className="min-h-screen">
            <nav className="bg-orange-500 shadow-sm">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                  <div className="flex">
                    <Link href="/" className="flex items-center">
                      <span className="text-2xl font-bold text-gray-900">QuickEats</span>
                    </Link>
                  </div>
                  <div className="flex space-x-8">
                    <Link href="/orders" className="inline-flex items-center px-1 pt-1 text-white hover:text-orange-100">
                      Orders
                    </Link>
                    <Link href="/partners" className="inline-flex items-center px-1 pt-1 text-white hover:text-orange-100">
                      Partners
                    </Link>
                    <Link href="/surge-control" className="inline-flex items-center px-1 pt-1 text-white hover:text-orange-100">
                      Surge Control
                    </Link>
                    <Link href="/analytics" className="inline-flex items-center px-1 pt-1 text-white hover:text-orange-100">
                      Analytics
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
                <main className="container mx-auto py-10 px-4">
                  {children}
                </main>

                {/* Footer: brand, services, technology, contact */}
                <footer className="bg-gray-900 text-gray-200 mt-12">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 rounded-md bg-orange-500 flex items-center justify-center text-white font-bold">🍽</div>
                          <div>
                            <div className="text-lg font-bold">QuickEats</div>
                            <div className="text-sm text-orange-300">Dynamic Pricing System</div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-300">Revolutionary food delivery platform with intelligent surge pricing technology that adapts to real-time demand and supply across Lucknow.</p>

                        <ul className="mt-4 space-y-3 text-sm text-gray-300">
                          <li>📍 Serving Lucknow, Uttar Pradesh</li>
                          <li>📞 +91 9876543210</li>
                          <li>✉️ hello@quickeats.com</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Services</h3>
                        <ul className="text-sm space-y-2 text-gray-300">
                          <li>Food Delivery</li>
                          <li>Partner Registration</li>
                          <li>Restaurant Onboarding</li>
                          <li>Business Analytics</li>
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold mb-4">Technology</h3>
                        <ul className="text-sm space-y-2 text-gray-300">
                          <li>Real-time Pricing</li>
                          <li>Smart Routing</li>
                          <li>Demand Forecasting</li>
                          <li>API Documentation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-800">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                      <div>© 2024 QuickEats. All rights reserved. Built with dynamic surge pricing technology.</div>
                      <div className="flex items-center space-x-6 mt-3 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                        <Link href="#" className="hover:text-white">Support</Link>
                      </div>
                    </div>
                  </div>
                </footer>
            </div>
        </ErrorBoundary>
      </body>
    </html>
  )
}