"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    try {
      const flag = localStorage.getItem('quickeats_authenticated')
      if (flag === 'true') {
        setAuthed(true)
        return
      }
    } catch (e) {
      // ignore
    }
    setAuthed(false)
  }, [])

  useEffect(() => {
    if (authed === false) {
      // redirect to login page
      router.replace('/login')
    }
  }, [authed, router])

  if (authed === null) return null
  if (!authed) return null
  return <>{children}</>
}
