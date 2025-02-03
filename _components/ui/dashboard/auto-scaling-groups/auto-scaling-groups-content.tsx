"use client"

import {
  ASGWithInstances,
  getASGsWithInstances,
  getASGWithInstances,
} from "@/_lib/aws/auto-scaling-groups"
import { useCallback, useEffect, useMemo, useState } from "react"
import { Header } from "./header"
import { ServerList } from "./server-list"

const REFRESH_INTERVAL = 10000 // 10 seconds in milliseconds

export default function AutoScalingGroupsContent() {
  const [lastUpdateTime, setLastUpdateTime] = useState<Date>(new Date())
  const [watchList, setWatchList] = useState<string[]>([])
  const [autoScalingGroups, setAutoScalingGroups] =
    useState<ASGWithInstances[]>()
  const [refreshKey, setRefreshKey] = useState(0)

  const refreshData = useCallback(async () => {
    try {
      const fetchedGroups = await getASGsWithInstances(watchList)
      setAutoScalingGroups(fetchedGroups || [])
      setLastUpdateTime(new Date())
    } catch (error) {}
  }, [watchList])

  useEffect(() => {
    refreshData()
    const intervalId = setInterval(refreshData, REFRESH_INTERVAL)
    return () => clearInterval(intervalId)
  }, [refreshData])

  const handleAddASG = useCallback(
    async (asgName: string) => {
      try {
        const newASG = await getASGWithInstances(asgName)
        if (!newASG) {
          return
        }
        await refreshData()
        setRefreshKey((prev) => prev + 1)
        setWatchList((prev) => [...prev, asgName])
        setAutoScalingGroups((prev) => (prev ? [...prev, newASG] : [newASG]))
      } catch (error) {}
    },
    [refreshData]
  )

  const handleRemoveASG = useCallback(
    async (asgName: string) => {
      try {
        setWatchList((prev) => prev.filter((asg) => asg !== asgName))
        await refreshData()
        setRefreshKey((prev) => prev + 1)
      } catch (error) {}
    },
    [refreshData]
  )

  const memoizedServerList = useMemo(
    () => (
      <ServerList
        autoScalingGroups={autoScalingGroups || []}
        onRemoveASG={handleRemoveASG}
      />
    ),
    [autoScalingGroups, handleRemoveASG]
  )

  return (
    <div className='space-y-8'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <span className='text-sm text-muted-foreground dark:text-gray-400'>
            Last Updated: {lastUpdateTime.toLocaleString()}
          </span>
        </div>
      </div>
      <Header onAddASG={handleAddASG} watching={watchList} />
      <div className='flex flex-row md:flex-col gap-2'>
        {memoizedServerList}
      </div>
    </div>
  )
}
