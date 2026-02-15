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
  const [collapsed, setCollapsed] = useState(false)

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 flex h-full flex-col border-r border-border bg-background/95 backdrop-blur-md transition-all duration-300 ${
          collapsed ? "w-16" : "w-56"
        }`}
      >
        {/* Toggle button */}
        <div className="flex items-center justify-end px-3 py-4">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <PanelLeft className="h-5 w-5" />
            ) : (
              <PanelLeftClose className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex-1 overflow-y-auto px-2 pb-4">
          <ul className="flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground ${
                    collapsed ? "justify-center" : ""
                  }`}
                  title={collapsed ? link.label : undefined}
                >
                  <link.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span>{link.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Mobile sidebar toggle (floating) */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="fixed bottom-4 left-4 z-50 rounded-full bg-primary p-3 text-primary-foreground shadow-lg transition-transform hover:scale-105 md:hidden"
        aria-label="Toggle sidebar"
      >
        {collapsed ? (
          <PanelLeft className="h-5 w-5" />
        ) : (
          <PanelLeftClose className="h-5 w-5" />
        )}
      </button>
    </>
  )
}
