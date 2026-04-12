"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { ArrowRight, Github, Play } from "lucide-react"

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4 pt-16"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Text content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Badge variant="outline" className="mb-6 border-primary/30 text-primary">
            Intelligent Safety Systems
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Bondhu
          </h1>
          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
            A Bengali Dialect Based Humanoid Robot to Detect Dangers and Provide Recommendations
          </p>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Bondhu is an intelligent humanoid robot designed to detect environmental hazards and threats in Bengali-speaking regions. Equipped with advanced computer vision, sensor fusion, and AI analytics, it identifies dangers in real-time and provides actionable recommendations to prevent accidents and save lives.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a
                href="https://github.com/TanvirMahmudTushar/bondhu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                View on GitHub
              </a>
            </Button>
            
            <Button variant="outline" size="lg" onClick={() => setIsVideoOpen(true)}>
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/bondhu.png"
              alt="Bondhu - AI Safety & Hazard Detection Robot"
              width={560}
              height={420}
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>

      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl">
          <DialogTitle className="sr-only">Bondhu Demo Video</DialogTitle>
          <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
            <video
              src="/bondhu_demo.mp4"
              controls
              autoPlay
              className="absolute inset-0 h-full w-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
