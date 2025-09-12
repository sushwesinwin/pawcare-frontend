import React from 'react'
import Navbar from '@/components/user/ui/Navbar'

export default function Homepage() {
  return (
    <div className="min-h-screen bg-[#E2E2E2]">
      <Navbar />
      <h1 className="text-3xl text-center">Welcome to PawCare</h1>
    </div>
  )
}
