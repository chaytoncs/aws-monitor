import { ThemeToggle } from "@/_components/theme/theme-toggle"
import { Button } from "@/_components/ui/inputs/button"
import { getASGWithInstances } from "@/_lib/aws/auto-scaling-groups"
import Link from "next/link"

export default async function Page() {
  const asg = await getASGWithInstances("WebServerGroup")
  return (
    <div className='min-h-screen bg-gradient-to-b from-background to-secondary/20 dark:from-aws-dark dark:to-[#141619]'>
      <main className='p-8'>
        <div className='flex flex-col items-center justify-center h-screen'>
          <h1 className='text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-8'>
            Welcome to AWS Monitor
          </h1>
          <Link href={"/dashboard"}>
            <Button
              variant='ghost'
              className={
                "w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-700/50"
              }
            >
              Proceed to your Dashboard
            </Button>
          </Link>
        </div>
        <div className='absolute top-4 right-4 z-10'>
          <ThemeToggle />
        </div>
      </main>
    </div>
  )
}
