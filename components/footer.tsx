import { Bot } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-2 text-foreground">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-semibold">Bondhu</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Built with Next.js, Tailwind CSS & shadcn/ui. Designed for static
            deployment on GitHub Pages.
          </p>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Team Bondhu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
