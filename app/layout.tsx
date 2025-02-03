import { inter } from "@/_components/ui/fonts"
import "./global.css"
import { ThemeProvider } from "@/_components/theme/theme-provider"

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
        <ThemeProvider
          attribute={"class"}
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
