"use client"
import React from 'react'
export default function LoginPage() {
  const start = () => {
    window.location.href = '/api/auth/google/start';
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Sign in to QuickEats</h1>
        <p className="mb-6">You need to sign in with Google to continue.</p>
        <button onClick={start} className="btn w-full">Sign in with Google</button>
        <p className="text-xs text-gray-500 mt-4">This app requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET set in your environment.</p>
      </div>
    </div>
  )
}
