import type React from "react"
import type { Metadata } from "next"
import { Kode_Mono } from "next/font/google"
import "./globals.css"

const kodeMono = Kode_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-kode-mono",
})

export const metadata: Metadata = {
  title: "Pomodoro Timer",
  description: "A minimalist Pomodoro timer inspired by Dieter Rams design",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${kodeMono.variable} antialiased dark`}>
      <body className="font-mono">{children}</body>
    </html>
  )
}
