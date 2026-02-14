import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Cpu,
  Code,
  Brain,
  MessageSquare,
  Mic,
  Volume2,
  Cog,
} from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "Raspberry Pi 5",
    description: "The brain of Bondhu — a powerful single-board computer running the entire AI pipeline on the edge.",
  },
  {
    icon: Code,
    name: "Python",
    description: "Core programming language used for AI models, speech processing, and robot control logic.",
  },
  {
    icon: Brain,
    name: "NLP",
    description: "Natural Language Processing for understanding human language, intent recognition, and context analysis.",
  },
  {
    icon: MessageSquare,
    name: "LLM",
    description: "Large Language Models powering intelligent conversation, translation, and knowledge retrieval.",
  },
  {
    icon: Mic,
    name: "Speech to Text",
    description: "Converts spoken words into text using speech recognition models for real-time language input.",
  },
  {
    icon: Volume2,
    name: "Text to Speech",
    description: "Transforms generated text responses into natural-sounding voice output in multiple languages.",
  },
  {
    icon: Cog,
    name: "Robotics",
    description: "Hardware integration with servo motors, sensors, microphones, and speakers for physical interaction.",
  },
]

export function TechSection() {
  return (
    <section id="tech" className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Built With
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Technology Stack
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A carefully chosen set of technologies powers Bondhu from hardware
            to AI.
          </p>
        </div>

        {/* Tech grid */}
        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {technologies.map((tech) => (
            <Card
              key={tech.name}
              className="group border-border bg-card transition-all hover:border-primary/30"
            >
              <CardHeader className="pb-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <tech.icon className="h-4 w-4" />
                  </div>
                  <CardTitle className="text-sm font-semibold">
                    {tech.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {tech.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
