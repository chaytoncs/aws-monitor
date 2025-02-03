import AutoScalingGroupsContent from "@/_components/ui/dashboard/auto-scaling-groups/auto-scaling-groups-content"

export default function Page() {
  return (
    <div className='space-y-8'>
      <h2 className='text-2xl font-bold text-foreground dark:text-white tracking-tight'>
        Auto Scaling Groups
      </h2>
      <AutoScalingGroupsContent />
    </div>
  )
}
