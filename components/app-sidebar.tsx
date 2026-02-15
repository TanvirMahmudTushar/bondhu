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
  PanelLeftClose,
  PanelLeft,
  X,
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
  const [hidden, setHidden] = useState(true)

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full w-56 flex-col border-r border-border bg-background/95 backdrop-blur-md transition-transform duration-300 ${
          hidden ? "-translate-x-full" : "translate-x-0"
        }`}
      >
        {/* Header with hide button */}
        <div className="flex items-center justify-between border-b border-border px-4 py-4">
          <span className="text-sm font-semibold text-foreground">Navigation</span>
          <button
            onClick={() => setHidden(true)}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
            aria-label="Hide sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-2 py-4">
          <ul className="flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setHidden(true)}
                  className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  title={link.label}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Overlay when sidebar is open (mobile) */}
      {!hidden && (
        <div
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setHidden(true)}
        />
      )}

      {/* Show sidebar button — always visible when sidebar is hidden */}
      {hidden && (
        <button
          onClick={() => setHidden(false)}
          className="fixed left-4 top-4 z-50 rounded-lg border border-border bg-background p-2.5 text-muted-foreground shadow-lg transition-colors hover:bg-secondary hover:text-foreground"
          aria-label="Show sidebar"
        >
          <PanelLeft className="h-5 w-5" />
        </button>
      )}
    </>
  )
}
