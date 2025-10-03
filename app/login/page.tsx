"use client"
import React from 'react'
import { signIn } from 'next-auth/react'

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Sign in to QuickEats</h1>
        <p className="mb-6">You need to sign in with Google to continue.</p>
        <button onClick={() => signIn('google')} className="btn w-full">Sign in with Google</button>
        <p className="text-xs text-gray-500 mt-4">This app requires GOOGLE_CLIENT_ID and GOOGLE_CLIENT_SECRET set in your environment.</p>
      </div>
    </div>
  )
}
