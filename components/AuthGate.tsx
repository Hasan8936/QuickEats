"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const res = await fetch('/api/auth/session')
        if (!res.ok) {
          // Try localStorage fallback for the demo callback flow
          let fallback = false
          try { fallback = localStorage.getItem('quickeats_authenticated') === 'true' } catch (e) {}
          if (!cancelled) setAuthed(fallback)
          return
        }
        const data = await res.json()
        if (!cancelled) setAuthed(!!data.authenticated)
      } catch (e) {
        // network error or server error: fallback to localStorage demo flag
        let fallback = false
        try { fallback = localStorage.getItem('quickeats_authenticated') === 'true' } catch (e) {}
        if (!cancelled) setAuthed(fallback)
      }
    })()
    return () => { cancelled = true }
  }, [])

  useEffect(() => {
    if (authed === false) {
      router.replace('/login')
    }
  }, [authed, router])

  if (authed === null) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4">Loading...</div>
    </div>
  )
  if (!authed) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="p-4">Redirecting to sign in...</div>
    </div>
  )
  return <>{children}</>
}
