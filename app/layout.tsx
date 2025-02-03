import "@/app/ui/global.css"
import { inter } from "@/_components/ui/fonts"
import "./global.css"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.className} bg-gradient-to-b from-background to-secondary/20 dark:from-aws-dark dark:to-[#141619]`}
      >
        {children}
      </body>
    </html>
  )
}
