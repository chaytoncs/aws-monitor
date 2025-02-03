import SideNav from "@/_components/ui/dashboard/sidenav"
import { ReactNode } from "react"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className='flex h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800'>
      <div className='w-full flex-none md:w-64'>
        <SideNav />
      </div>
      <div className='flex-grow p-6 md:overflow-y-auto md:p-12'>{children}</div>
    </div>
  )
}
