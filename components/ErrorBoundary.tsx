"use client"
import React from 'react'

type Props = {
  children: React.ReactNode
}

export class ErrorBoundary extends React.Component<Props, { hasError: boolean }> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: unknown, info: unknown) {
    // You can log error to an analytics service here
    // console.error('ErrorBoundary caught an error', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="bg-white p-8 rounded shadow-md text-center">
            <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
            <p className="text-sm text-gray-600">An unexpected error occurred. Please try refreshing the page.</p>
          </div>
        </div>
      )
    }

    return this.props.children as React.ReactElement
  }
}

export default ErrorBoundary
