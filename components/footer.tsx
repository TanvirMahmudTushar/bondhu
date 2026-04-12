import { Bot } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t border-border px-4 py-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-foreground">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-semibold">Bondhu</span>
          </div>
        </div>
        <Separator className="my-6" />
        <p className="text-center text-xs text-muted-foreground">
          Led and created by{" "}
          <a
            href="https://github.com/TanvirMahmudTushar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Tanvir Mahmud Tushar
          </a>
        </p>
      </div>
    </footer>
  )
}
