import { Badge } from "@/components/ui/badge"
import {
  Languages,
  Mic,
  Users,
  BotMessageSquare,
  Accessibility,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Mic,
    title: "Real-Time Voice Translation",
    description:
      "Instantly translates spoken language in real time, enabling seamless cross-language communication.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Supports multiple languages including Bengali, English, Hindi, Arabic, and more with high accuracy.",
  },
  {
    icon: Users,
    title: "Human Interaction",
    description:
      "Designed to interact naturally with humans through voice, making conversations intuitive and friendly.",
  },
  {
    icon: BotMessageSquare,
    title: "AI Conversation Ability",
    description:
      "Powered by Large Language Models, Bondhu can hold intelligent conversations and answer questions.",
  },
  {
    icon: Accessibility,
    title: "Assistive Technology",
    description:
      "Helps people with language barriers, hearing difficulties, or in multilingual environments to communicate effectively.",
  },
  {
    icon: Zap,
    title: "Low Latency Processing",
    description:
      "Optimized pipeline ensures fast response times for a natural, fluid conversational experience.",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Capabilities
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Key Features
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Bondhu combines cutting-edge AI with practical robotics to deliver
            powerful features for real-world use.
          </p>
        </div>

        {/* Feature grid */}
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-secondary text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/10">
                <feature.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {[
            "Speech Recognition",
            "NLP",
            "Machine Translation",
            "Voice Synthesis",
            "Robotics",
            "Edge AI",
          ].map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  )
}
