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
    name: "Speech-to-Text Engine",
    icon: Mic,
    language: "Python",
    description:
      "Converts spoken audio input into text using Whisper-based ASR models, optimized for Bengali dialects and multilingual input.",
    technologies: ["OpenAI Whisper", "PyAudio", "NumPy"],
  },
  {
    name: "NLP Processing Pipeline",
    icon: Brain,
    language: "Python",
    description:
      "Analyzes transcribed text for intent recognition, language detection, and context understanding before passing to the LLM.",
    technologies: ["spaCy", "NLTK", "LangDetect"],
  },
  {
    name: "LLM Integration",
    icon: MessageSquare,
    language: "Python",
    description:
      "Connects to Large Language Models for intelligent response generation, translation, and contextual conversation management.",
    technologies: ["LangChain", "OpenAI API", "Prompt Engineering"],
  },
  {
    name: "Text-to-Speech Output",
    icon: Volume2,
    language: "Python",
    description:
      "Converts generated text responses into natural-sounding speech output in the target language using neural TTS models.",
    technologies: ["gTTS", "Pyttsx3", "SoundDevice"],
  },
  {
    name: "Robot Control System",
    icon: Code2,
    language: "Python",
    description:
      "Manages GPIO interactions, servo motor control, LED feedback, and coordinates the overall robot behavior state machine.",
    technologies: ["RPi.GPIO", "pigpio", "asyncio"],
  },
  {
    name: "Data & Configuration",
    icon: Database,
    language: "Python / JSON",
    description:
      "Handles configuration management, language model prompts, conversation history, and logging for debugging and improvement.",
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
            intelligence and conversational abilities.
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
