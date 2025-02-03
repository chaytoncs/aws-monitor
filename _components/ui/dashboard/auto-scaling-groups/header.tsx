"use client"

import { useState } from "react"
import { Button } from "@/_components/ui/inputs/button"
import { Input } from "@/_components/ui/inputs/input"
import { Alert, AlertDescription } from "@/_components/ui/alert"
import { AlertCircle } from "lucide-react"

interface HeaderProps {
  onAddASG: (asgName: string) => Promise<void>
  watching: string[]
}

export function Header({ onAddASG, watching }: HeaderProps) {
  const [asgName, setAsgName] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleAddASG = async () => {
    setError(null)

    if (!asgName.trim()) {
      setError("Auto Scaling group name cannot be empty.")
      return
    }

    if (!/^[\w+=,.@-]+$/.test(asgName)) {
      setError(
        "Auto Scaling group name can only contain alphanumeric characters, underscores, pluses, commas, periods, @ symbols, and hyphens."
      )
      return
    }

    if (asgName.length > 255) {
      setError("Auto Scaling group name must not exceed 255 characters.")
      return
    }

    if (watching.includes(asgName)) {
      setError("Auto Scaling group is already being watched.")
      return
    }

    setIsLoading(true)
    try {
      await onAddASG(asgName)
      setAsgName("")
    } catch (err) {
      setError("An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <header className='mb-8'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <Input
            value={asgName}
            onChange={(e) => setAsgName(e.target.value)}
            className='w-64 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 transition-all'
            placeholder='Enter Auto Scaling Group name'
          />
          <Button
            className='bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg'
            onClick={handleAddASG}
            disabled={isLoading}
          >
            {isLoading ? "Adding..." : "Add Auto Scaling Group"}
          </Button>
        </div>
      </div>
      {error && (
        <Alert
          variant='destructive'
          className='mt-2 max-w-lg border-red-200 bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-200'
        >
          <AlertCircle className='h-4 w-4' />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}
    </header>
  )
}
