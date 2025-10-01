import { Card } from '@/Components/ui/card'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl text-center mb-8">
          Welcome to QuickEats
        </h1>
        <p className="text-xl text-gray-500 text-center mb-12">
          Fast, reliable, and delicious food delivery at your fingertips
        </p>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Link href="/CustomerOrders">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Orders</h2>
              <p className="text-gray-600">Manage and track customer orders in real-time</p>
            </Card>
          </Link>
          
          <Link href="/DeliveryPartners">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Partners</h2>
              <p className="text-gray-600">View and manage delivery partner assignments</p>
            </Card>
          </Link>
          
          <Link href="/SurgeControl">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Surge Control</h2>
              <p className="text-gray-600">Monitor and adjust dynamic pricing</p>
            </Card>
          </Link>
          
          <Link href="/LiveAnalytics">
            <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
              <h2 className="text-2xl font-bold mb-4">Analytics</h2>
              <p className="text-gray-600">View real-time performance metrics</p>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  )
}