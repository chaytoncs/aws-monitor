"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/_components/ui/inputs/button"
import { Home, Server } from "lucide-react"
import { cn } from "@/_lib/utils/cn"

/**
 * Sidebar component for navigation
 * Displays the app title and navigation menu
 */
export default function SideNav() {
  // Get the current pathname to highlight the active nav item
  const pathname = usePathname()

  // Define navigation items
  const navItems = [
    { href: "/dashboard", label: "Dashboard", icon: Home },
    {
      href: "/auto-scaling-groups",
      label: "Auto Scaling Groups",
      icon: Server,
    },
  ]

  return (
    <aside className='w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md border-r border-gray-200 dark:border-gray-700 shadow-lg'>
      <div className='p-4'>
        {/* App title */}
        <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8'>
          AWS Monitor
        </h1>
        {/* Navigation menu */}
        <nav className='space-y-2'>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <Button
                variant='ghost'
                className={cn(
                  "w-full justify-start",
                  pathname === item.href
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-600/10 text-blue-600 dark:text-blue-400"
                    : "hover:bg-gray-100 dark:hover:bg-gray-700/50"
                )}
              >
                <item.icon className='mr-2 h-4 w-4' />
                {item.label}
              </Button>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  )
}
