import type { Metadata, Viewport } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"

import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
})

export const metadata: Metadata = {
  title: "Bondhu - AI-Powered Talking Robot Breaking Language Barriers",
  description:
    "Bondhu is an AI-powered talking robot designed to break language barriers. It combines robotics with artificial intelligence to create a companion that can listen, understand, translate, and respond in real time — making communication accessible for everyone.",
  keywords: [
    "AI robot",
    "humanoid robot",
    "danger detection",
    "safety recommendations",
    "Bengali dialect",
    "speech to text",
    "NLP",
    "LLM",
    "Raspberry Pi",
    "robotics",
  ],
  authors: [{ name: "Team Bondhu" }],
}

export const viewport: Viewport = {
  themeColor: "#0d1117",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
