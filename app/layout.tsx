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
  title: "Bondhu - AI-Powered Safety & Hazard Detection Robot",
  description:
    "Bondhu is a Bengali-language humanoid robot that detects environmental hazards in real-time using computer vision and AI. It provides instant alerts and safety recommendations to protect communities from fires, chemical spills, and other critical dangers.",
  keywords: [
    "AI robot",
    "hazard detection",
    "safety robot",
    "fire detection",
    "computer vision",
    "Bengali language",
    "robotics",
    "threat detection",
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
