"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Github, Play, X } from "lucide-react"

const basePath = process.env.NODE_ENV === "production" ? "/bondhu" : ""

export function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isVideo2Open, setIsVideo2Open] = useState(false)

  return (
    <>
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
              Bondhu You Never Had
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Bondhu
            </h1>
            <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
              A Bengali Dialect Based Humanoid Robot to Detect Dangers and Provide Recommendations
            </p>
            <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
              Bondhu is an intelligent humanoid robot that listens, understands,
              and responds in Bengali dialect and multiple languages. Built with
              cutting-edge AI technologies including Speech-to-Text, NLP, Large
              Language Models, and Text-to-Speech, it detects potential dangers
              and provides reliable safety recommendations through natural
              conversation.
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
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideoOpen(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsVideo2Open(true)}
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo 2
              </Button>
            </div>
          </div>

          {/* Hero image */}
          <div className="flex justify-center">
            <div className="relative overflow-hidden rounded-2xl border border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`${basePath}/bondhu.webp`}
                alt="Bondhu - Bengali Dialect Based Humanoid Robot"
                width={560}
                height={420}
                className="object-cover"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
            </div>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
        <DialogContent className="max-w-4xl w-full aspect-video p-0 border-0">
          <DialogTitle className="sr-only">Bondhu Demo Video</DialogTitle>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4 text-white" />
          </button>
          <video
            src={`${basePath}/bondhu_demo.mp4`}
            autoPlay
            controls
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>

      {/* Video Modal 2 */}
      <Dialog open={isVideo2Open} onOpenChange={setIsVideo2Open}>
        <DialogContent className="max-w-4xl w-full aspect-video p-0 border-0">
          <DialogTitle className="sr-only">Knife Detection Demo Video</DialogTitle>
          <button
            onClick={() => setIsVideo2Open(false)}
            className="absolute right-4 top-4 z-50 rounded-full bg-black/50 p-2 hover:bg-black/70 transition-colors"
          >
            <X className="h-4 w-4 text-white" />
          </button>
          <video
            src={`${basePath}/KNIFEDETECTED.mp4`}
            autoPlay
            controls
            className="w-full h-full"
          />
        </DialogContent>
      </Dialog>
    </>
  )
}
