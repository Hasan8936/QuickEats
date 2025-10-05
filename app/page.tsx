import { Card } from '@/components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Welcome to QuickEats
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Fast, reliable, and delicious food delivery at your fingertips — built for operators to manage
            orders, partners and pricing in real time.
          </p>
          <div className="mt-8 flex justify-center">
            <Link href="/orders" className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
              Go to Orders
            </Link>
          </div>
        </header>

        <section>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/orders">
              <Card className="p-6 hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-indigo-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 7h18M5 11h14M7 15h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Orders</h3>
                    <p className="mt-2 text-sm text-gray-600">Manage and track customer orders in real time.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/partners">
              <Card className="p-6 hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-green-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12c2.5 0 4.5-2 4.5-4.5S14.5 3 12 3 7.5 5 7.5 7.5 9.5 12 12 12zM4 20c0-3.5 3-6 8-6s8 2.5 8 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Partners</h3>
                    <p className="mt-2 text-sm text-gray-600">View and manage delivery partner assignments and status.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/surge-control">
              <Card className="p-6 hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-yellow-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2v6M12 22v-6M4.9 4.9l4.2 4.2M18.1 19.1l-4.2-4.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Surge Control</h3>
                    <p className="mt-2 text-sm text-gray-600">Monitor and adjust dynamic pricing policies quickly.</p>
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/analytics">
              <Card className="p-6 hover:shadow-xl transform hover:-translate-y-1 transition">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="w-10 h-10 text-pink-600" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 13l4-4 4 4 4-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-semibold text-gray-900">Analytics</h3>
                    <p className="mt-2 text-sm text-gray-600">View real-time performance metrics and trends.</p>
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}