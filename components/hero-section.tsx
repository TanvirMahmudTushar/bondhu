import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github } from "lucide-react"

const basePath = "/bondhu"

export function HeroSection() {
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
            AI-Powered Robotics
          </Badge>
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Bondhu
          </h1>
          <p className="mt-3 text-lg font-medium text-primary sm:text-xl">
            A Talking AI Translator Robot
          </p>
          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground">
            Bondhu is an intelligent robot that listens, understands, and speaks
            in multiple languages. Built with cutting-edge AI technologies
            including Speech-to-Text, NLP, Large Language Models, and
            Text-to-Speech, it bridges language barriers through natural
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
            <Button asChild variant="outline" size="lg">
              <a href="#about">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Hero image */}
        <div className="flex justify-center">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`${basePath}/bondhu.png`}
              alt="Bondhu - AI Translator Robot"
              width={560}
              height={420}
              className="object-cover"
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
