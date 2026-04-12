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
  title: "Bondhu - A Bengali Dialect Based Humanoid Robot",
  description:
    "Bondhu is an AI-powered humanoid robot designed to detect dangers and provide safety recommendations. Built with Bengali dialect support, Speech-to-Text, NLP, Large Language Models, and Text-to-Speech for natural interaction.",
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
