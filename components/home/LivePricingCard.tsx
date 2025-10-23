export default function LivePricingCard(){
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-semibold">Live Pricing</h3>
          <div className="mt-3">
            <div className="inline-flex items-center space-x-2 bg-red-100 text-red-700 px-3 py-1 rounded-full">High Surge</div>
            <div className="mt-4 text-2xl font-bold">2.5x <span className="text-sm font-medium text-gray-500">(+150%)</span></div>
          </div>
        </div>

        <div className="hidden sm:block flex-shrink-0 ml-4">
          <img src="/illustrations/smart-pricing.svg" alt="Smart pricing" className="w-36 h-24 object-contain" />
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 text-sm text-gray-600">
        <div className="bg-gray-50 p-3 rounded">Active Orders<br/><strong>42</strong></div>
        <div className="bg-gray-50 p-3 rounded">Available Partners<br/><strong>7</strong></div>
      </div>
    </div>
  )
}
