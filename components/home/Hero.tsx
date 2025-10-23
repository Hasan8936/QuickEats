export default function Hero(){
  return (
    <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between">
          <div className="max-w-3xl">
            <div className="gradient-bar mb-6 w-48" />
            <h1 className="text-5xl font-extrabold tracking-tight">Delicious Food, <span className="text-yellow-300">Smart Pricing</span></h1>
            <p className="mt-4 text-lg text-orange-100">Experience dynamic delivery pricing that adapts to real-time demand across Lucknow</p>

            <div className="mt-8 flex space-x-4">
              <button className="px-5 py-3 rounded-full bg-orange-600/90 hover:bg-orange-700 transition text-white">Real-time Pricing</button>
              <button className="px-5 py-3 rounded-full bg-orange-400/30 text-white">Fast Delivery</button>
              <button className="px-5 py-3 rounded-full bg-orange-400/20 text-white">Quality Food</button>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4 sm:w-full">
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-sm text-orange-100">Active Orders</div>
                <div className="text-2xl font-bold">44</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-sm text-orange-100">Available Partners</div>
                <div className="text-2xl font-bold">7</div>
              </div>
              <div className="bg-white/10 rounded-lg p-6 text-center">
                <div className="text-sm text-orange-100">Avg Rating</div>
                <div className="text-2xl font-bold">4.6</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex w-96 h-64 bg-white/10 rounded-lg items-center justify-center">
            <img src="/food-logos/biryani.svg" alt="Biryani" className="w-64 h-48 object-contain p-2" />
          </div>
        </div>
      </div>
    </section>
  )
}
