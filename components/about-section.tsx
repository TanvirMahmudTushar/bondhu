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
    title: "Listens & Observes",
    description:
      "Bondhu continuously monitors the environment through microphones and sensors, detecting spoken words and environmental factors to identify potential dangers.",
  },
  {
    icon: Brain,
    title: "Analyzes Threats",
    description:
      "Advanced AI analyzes audio, language patterns, and environmental data to detect dangers like accidents, emergencies, threats, and critical situations in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Generates Recommendations",
    description:
      "Large Language Models process detected dangers and generate intelligent, context-aware safety recommendations in Bengali and multiple languages.",
  },
  {
    icon: Volume2,
    title: "Alert & Advise",
    description:
      "Bondhu alerts residents immediately and provides voice-based safety recommendations, guiding people through dangerous situations with clear instructions.",
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
            Bondhu is an intelligent Bengali dialect-based humanoid robot designed to detect dangers and provide safety recommendations. With advanced AI and sensory capabilities, it identifies emergencies and guides people to safety through voice-based intelligent recommendations.
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
