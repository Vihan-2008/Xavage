import type React from "react"
import type { Metadata } from "next"
import "./globals.css" // Import globals.css at the top of the file
import ClientLayout from "./ClientLayout"

export const metadata: Metadata = {
  title: "XAVAGE 25 - 11th Edition",
  description: "The ultimate gaming and tech event experience",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <ClientLayout>{children}</ClientLayout>
}
