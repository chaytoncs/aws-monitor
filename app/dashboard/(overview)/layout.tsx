import { ReactNode } from "react"
import { inter } from "@/app/ui/fonts"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.variable} font-sans`}></body>
    </html>
  )
}
