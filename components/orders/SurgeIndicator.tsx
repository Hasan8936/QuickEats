"use client"
import React from 'react'

export default function SurgeIndicator({ multiplier }: { multiplier: number }) {
  return (
    <div>
      <p className="text-sm">Current surge: x{multiplier}</p>
    </div>
  )
}
