"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function CallbackPage() {
  const router = useRouter()

  useEffect(() => {
    // In a real app you'd exchange the code for tokens server-side.
    // For now, set a local flag to simulate authentication.
    try {
      localStorage.setItem('quickeats_authenticated', 'true')
    } catch (e) {
      // ignore
    }
    router.replace('/')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p>Signing you in...</p>
    </div>
  )
}
