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
    title: "Danger Detection",
    description:
      "Advanced sensors and AI detect various types of dangers including accidents, fires, chemical leaks, threats, and emergency situations in real-time.",
  },
  {
    icon: Languages,
    title: "Bengali Dialect Support",
    description:
      "Native Bengali dialect understanding ensures clear communication and recommendations that resonate with local communities and cultures.",
  },
  {
    icon: Users,
    title: "Immediate Response",
    description:
      "Detects emergencies and alerts residents instantly, providing critical guidance when every second matters for safety.",
  },
  {
    icon: BotMessageSquare,
    title: "Smart Recommendations",
    description:
      "AI-powered system generates context-aware safety recommendations tailored to specific dangerous situations and environments.",
  },
  {
    icon: Accessibility,
    title: "Safety for Everyone",
    description:
      "Designed to protect all family members including children, elderly, and those with disabilities through accessible safety alerts and guidance.",
  },
  {
    icon: Zap,
    title: "Real-Time Assessment",
    description:
      "Continuous monitoring and rapid threat assessment ensures families receive safety recommendations before situations escalate.",
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
            Bondhu combines cutting-edge AI with practical robotics to detect
            dangers and provide intelligent safety recommendations for families.
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
