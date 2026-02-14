import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Mic, Brain, MessageSquare, Volume2 } from "lucide-react"

const steps = [
  {
    icon: Mic,
    title: "Speech to Text",
    description:
      "Bondhu listens to the user through a microphone and converts spoken words into text using advanced speech recognition.",
  },
  {
    icon: Brain,
    title: "NLP & Understanding",
    description:
      "Natural Language Processing analyzes the text to understand context, intent, and meaning across different languages.",
  },
  {
    icon: MessageSquare,
    title: "LLM Processing",
    description:
      "A Large Language Model generates intelligent responses, translates between languages, and enables natural conversation.",
  },
  {
    icon: Volume2,
    title: "Text to Speech",
    description:
      "The processed response is converted back into natural-sounding speech, allowing Bondhu to talk back to the user.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            About the Project
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            What is Bondhu?
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Bondhu (meaning &ldquo;friend&rdquo; in Bengali) is an AI-powered
            talking robot designed to break language barriers. It combines
            robotics with artificial intelligence to create a companion that can
            listen, understand, translate, and respond in real time — making
            communication accessible for everyone.
          </p>
        </div>

        {/* How it works */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card
              key={step.title}
              className="group relative border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <step.icon className="h-5 w-5" />
                </div>
                <div className="mt-4 flex items-center gap-2">
                  <span className="font-mono text-xs text-muted-foreground">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
