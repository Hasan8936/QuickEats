import { useState } from 'react'

const LOCATIONS = [
  'Aliganj', 'Hazratganj', 'Gomti Nagar', 'Indira Nagar', 'Aminabad', 'Alambagh'
]

export default function LocationSelector(){
  const [location, setLocation] = useState(LOCATIONS[0])
  return (
    <div className="flex items-center space-x-3">
      <select value={location} onChange={(e)=>setLocation(e.target.value)} className="rounded-md border px-3 py-2 bg-white">
        {LOCATIONS.map(l=> <option key={l} value={l}>{l}</option>)}
      </select>
      <button className="px-3 py-2 bg-orange-600 text-white rounded-md">Apply</button>
    </div>
  )
}
