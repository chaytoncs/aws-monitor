"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/_components/ui/inputs/button"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant='ghost'
      size='icon'
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className='bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300'
    >
      <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  )
}
