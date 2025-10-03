"use client"
import React from 'react'

export default function OrderForm(props: any) {
  return (
    <form onSubmit={(e) => { e.preventDefault(); props.onSubmit && props.onSubmit({}) }}>
      <p className="text-sm text-gray-500">Order form placeholder.</p>
      <button type="submit" className="mt-2 btn">Submit</button>
    </form>
  )
}
