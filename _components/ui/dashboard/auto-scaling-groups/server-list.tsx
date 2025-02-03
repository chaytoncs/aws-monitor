"use client"

import { useState, useCallback, memo } from "react"
import { ASGWithInstances } from "@/_lib/aws/auto-scaling-groups"
import { ServerItem } from "./server-item"

interface ServerListProps {
  autoScalingGroups: ASGWithInstances[]
  onRemoveASG: (asgName: string) => void
}

const MemoizedServerItem = memo(ServerItem)

export function ServerList({
  autoScalingGroups,
  onRemoveASG,
}: ServerListProps) {
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(new Set())

  const handleToggle = useCallback((asgId: string) => {
    setExpandedGroups((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(asgId)) {
        newSet.delete(asgId)
      } else {
        newSet.add(asgId)
      }
      return newSet
    })
  }, [])

  if (autoScalingGroups.length === 0) {
    return (
      <div className='text-center text-foreground dark:text-white'>
        No Auto Scaling Groups found.
      </div>
    )
  }

  return (
    <div className='space-y-4'>
      {autoScalingGroups.map((group) => (
        <MemoizedServerItem
          key={group?.AutoScalingGroupName}
          server={group}
          expanded={expandedGroups.has(group?.AutoScalingGroupName || "")}
          onToggle={() => handleToggle(group?.AutoScalingGroupName || "")}
          onDelete={() => onRemoveASG(group?.AutoScalingGroupName || "")}
        />
      ))}
    </div>
  )
}
