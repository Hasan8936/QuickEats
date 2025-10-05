"use client"
import React from 'react'

export default function OrderForm(props: any) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); props.onSubmit && props.onSubmit({}) }} className="space-y-3 card p-4">
      <p className="muted">Order form placeholder.</p>
      <div className="flex justify-end">
        <button type="submit" className="btn-primary">Place order</button>
      </div>
    </form>
  )
}
