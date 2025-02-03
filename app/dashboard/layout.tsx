"use client"
import type { ReactNode } from "react"
import { ThemeToggle } from "@/_components/theme/theme-toggle"
import SideNav from "@/_components/ui/dashboard/sidenav"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800'>
      <SideNav />
      {/* Main content area */}
      <main className='flex-1 overflow-auto relative'>
        {/* Theme toggle button */}
        <div className='absolute top-4 right-4 z-10'>
          <ThemeToggle />
        </div>
        {/* Page content */}
        <div className='absolute p-8 max-w-7xl mx-auto'>{children}</div>
      </main>
    </div>
  )
}
