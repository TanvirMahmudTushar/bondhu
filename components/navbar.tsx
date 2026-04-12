"use client"

import { Button } from "@/components/ui/button"
import { Bot, Github } from "lucide-react"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a
          href="#home"
          className="flex items-center gap-2 text-foreground transition-colors hover:text-primary"
        >
          <Bot className="h-6 w-6 text-primary" />
          <span className="text-lg font-bold tracking-tight">Bondhu</span>
        </a>

        {/* GitHub CTA */}
        <Button asChild size="sm">
          <a
            href="https://github.com/TanvirMahmudTushar/bondhu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
    </nav>
  )
}
