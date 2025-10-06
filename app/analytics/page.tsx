"use client"
import React from 'react'
import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

const data = {
  labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
  datasets: [
    { label: 'Orders', data: [120,200,150,220,300,280,330], borderColor: 'rgb(255,99,71)', backgroundColor: 'rgba(255,99,71,0.2)' }
  ]
}

export default function Analytics(){
  function exportCsv(){
    const csv = 'day,orders\n' + data.labels.map((l,i)=> `${l},${(data.datasets as any)[0].data[i]}`).join('\n')
    const blob = new Blob([csv], { type: 'text/csv' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = 'orders.csv'; a.click();
    URL.revokeObjectURL(url)
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Live Analytics</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
          <h2 className="text-2xl font-semibold mb-4">Order Statistics</h2>
          <Line data={data} />
          <div className="mt-4">
            <button className="px-3 py-2 bg-orange-600 text-white rounded" onClick={exportCsv}>Export CSV</button>
          </div>
        </div>
      </div>
    </div>
  )
}