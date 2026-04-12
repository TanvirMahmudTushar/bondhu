import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Mic,
  Brain,
  MessageSquare,
  Volume2,
  Database,
} from "lucide-react"

const softwareModules = [
  {
    name: "Audio Threat Detection",
    icon: Mic,
    language: "Python",
    description:
      "Detects danger indicators from audio including breaking glass, screams, gunshots, and emergency sirens using advanced audio classification models.",
    technologies: ["OpenAI Whisper", "AudioSet", "YAMNet"],
  },
  {
    name: "Danger Analysis Engine",
    icon: Brain,
    language: "Python",
    description:
      "Analyzes audio and environmental data using NLP to identify types of dangers (medical, environmental, security) and assess threat levels.",
    technologies: ["spaCy", "TensorFlow", "NLTK"],
  },
  {
    name: "Recommendation Generator",
    icon: MessageSquare,
    language: "Python",
    description:
      "Generates intelligent, context-aware safety recommendations based on detected dangers using Large Language Models in Bengali and multiple languages.",
    technologies: ["LangChain", "OpenAI API", "Knowledge Base"],
  },
  {
    name: "Voice Alert System",
    icon: Volume2,
    language: "Python",
    description:
      "Converts safety recommendations into natural-sounding voice alerts in Bengali dialect, ensuring clear communication during emergencies.",
    technologies: ["gTTS", "Pyttsx3", "SoundDevice"],
  },
  {
    name: "Robotics Control",
    icon: Code2,
    language: "Python",
    description:
      "Manages GPIO interactions for sensors, visual alerts through LEDs, and coordinates the robot's response behavior during detected dangers.",
    technologies: ["RPi.GPIO", "pigpio", "asyncio"],
  },
  {
    name: "Safety Database",
    icon: Database,
    language: "Python / JSON",
    description:
      "Maintains threat detection history, safety protocols, emergency contacts, and logs for continuous improvement of danger detection accuracy.",
    technologies: ["SQLite", "JSON Config", "Python Logging"],
  },
]

export function SoftwareSection() {
  return (
    <section id="software" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Code & Intelligence
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Software
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The software architecture and AI modules that power Bondhu&apos;s
            danger detection and safety recommendation capabilities.
          </p>
        </div>

        {/* Software modules grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {softwareModules.map((mod) => (
            <Card
              key={mod.name}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <mod.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {mod.language}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base">{mod.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {mod.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {mod.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
