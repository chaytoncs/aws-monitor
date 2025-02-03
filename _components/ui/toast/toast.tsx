import { useState, useEffect } from "react"
import { cn } from "@/_lib/utils/cn"

interface ToastProps {
  message: string
  type: "success" | "error"
}

export function Toast({ message, type }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center z-50",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div
        className={cn(
          "p-4 rounded-md shadow-md transition-all duration-300 transform",
          isVisible ? "scale-100" : "scale-95",
          type === "success"
            ? "bg-green-500 text-white"
            : "bg-red-500 text-white"
        )}
      >
        {message}
      </div>
    </div>
  )
}
