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
  title: "Bondhu - A Talking AI Translator Robot",
  description:
    "Bondhu is an AI-powered translator robot that uses Speech-to-Text, NLP, LLM, and Text-to-Speech to enable real-time multilingual voice translation and human interaction.",
  keywords: [
    "AI robot",
    "translator robot",
    "speech to text",
    "NLP",
    "LLM",
    "Raspberry Pi",
    "robotics",
    "multilingual",
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
