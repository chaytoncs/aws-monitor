import DashboardCard from "@/_components/ui/dashboard/card"
import { Server } from "lucide-react"

export default function Page() {
  return (
    <>
      <h1 className='text-2xl font-bold text-foreground dark:text-white tracking-tight mb-6'>
        Welcome to AWS Monitor
      </h1>
      <div className='flex gap-2 flex-wrap'>
        <DashboardCard
          title='Auto Scaling Groups'
          description='Manage your Auto Scaling Groups'
          href='/dashboard/auto-scaling-groups'
          linkLabel='View Auto Scaling Groups'
          icon={Server}
        />
      </div>
    </>
  )
}
