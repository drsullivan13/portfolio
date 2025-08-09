"use client"

import type React from "react"

import { usePathname } from "next/navigation"

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  return (
    <div key={pathname} className="animate-fadeIn">
      {children}
    </div>
  )
}
