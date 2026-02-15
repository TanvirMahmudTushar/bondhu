"use client"

import { useState } from "react"
import {
  Home,
  Info,
  Sparkles,
  Cpu,
  BookOpen,
  CalendarDays,
  Puzzle,
  HardDrive,
  Code2,
  Users,
  Image,
  Mail,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

const sidebarLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: Info },
  { label: "Features", href: "#features", icon: Sparkles },
  { label: "Tech Stack", href: "#tech", icon: Cpu },
  { label: "Literature Review", href: "#literature-review", icon: BookOpen },
  { label: "Weekly Updates", href: "#weekly-updates", icon: CalendarDays },
  { label: "Components", href: "#components", icon: Puzzle },
  { label: "Hardware", href: "#hardware", icon: HardDrive },
  { label: "Software", href: "#software", icon: Code2 },
  { label: "Team", href: "#team", icon: Users },
  { label: "Gallery", href: "#gallery", icon: Image },
  { label: "Contact", href: "#contact", icon: Mail },
]

export function AppSidebar() {
  const [minimized, setMinimized] = useState(false)

  return (
    <aside
      className={`fixed left-0 top-14 z-40 flex h-[calc(100vh-3.5rem)] flex-col border-r border-border bg-background/95 backdrop-blur-md transition-all duration-300 ${
        minimized ? "w-14" : "w-52"
      }`}
    >
      {/* Navigation links */}
      <nav className="flex-1 overflow-y-auto px-1.5 py-3">
        <ul className="flex flex-col gap-0.5">
          {sidebarLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground ${
                  minimized ? "justify-center px-0" : ""
                }`}
                title={link.label}
              >
                <link.icon className="h-4 w-4 shrink-0" />
                {!minimized && <span>{link.label}</span>}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Toggle button at the right edge, vertically centered */}
      <button
        onClick={() => setMinimized(!minimized)}
        className="absolute -right-3 top-1/2 z-50 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:bg-secondary hover:text-foreground"
        aria-label={minimized ? "Expand sidebar" : "Minimize sidebar"}
      >
        {minimized ? (
          <ChevronRight className="h-3.5 w-3.5" />
        ) : (
          <ChevronLeft className="h-3.5 w-3.5" />
        )}
      </button>
    </aside>
  )
}
