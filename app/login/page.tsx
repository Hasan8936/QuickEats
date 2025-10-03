"use client"
import React from 'react'

export default function LoginPage() {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ''
  const redirectUri = process.env.NEXT_PUBLIC_GOOGLE_REDIRECT_URI || `${typeof window !== 'undefined' ? window.location.origin + '/auth/callback' : '/auth/callback'}`
  const scope = encodeURIComponent('openid email profile')
  const state = encodeURIComponent('quickeats_' + Date.now())

  const handleSignIn = () => {
    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=code&scope=${scope}&state=${state}`
    window.location.href = url
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Sign in to QuickEats</h1>
        <p className="mb-6">You need to sign in with Google to continue.</p>
        <button onClick={handleSignIn} className="btn w-full">Sign in with Google</button>
        <p className="text-xs text-gray-500 mt-4">This app requires a Google OAuth Client ID configured in environment variables.</p>
      </div>
    </div>
  )
}
