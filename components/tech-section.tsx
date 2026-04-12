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
  Eye,
  Thermometer,
  AlertCircle,
  Cog,
} from "lucide-react"

const technologies = [
  {
    icon: Cpu,
    name: "Raspberry Pi 5",
    description: "High-performance edge computing platform running the entire hazard detection AI pipeline in real-time.",
  },
  {
    icon: Code,
    name: "Python",
    description: "Core programming language for computer vision models, sensor processing, and autonomous decision-making logic.",
  },
  {
    icon: Eye,
    name: "Computer Vision",
    description: "Advanced image processing and object detection to identify hazards, fires, spills, and structural damage.",
  },
  {
    icon: Thermometer,
    name: "Thermal Imaging",
    description: "Infrared sensor integration for detecting heat anomalies and fire sources in any lighting condition.",
  },
  {
    icon: Brain,
    name: "Deep Learning Models",
    description: "Neural networks trained on hazard recognition to instantly identify and classify safety threats.",
  },
  {
    icon: AlertCircle,
    name: "Real-Time Alerts",
    description: "Instant notification system that triggers immediate warnings in Bengali for emergency response.",
  },
  {
    icon: Cog,
    name: "Robotics",
    description: "Humanoid frame with motors, sensors, cameras, and microphones for continuous environmental monitoring.",
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
            A cutting-edge combination of sensors, AI, and robotics enables Bondhu to continuously monitor environments and protect lives.
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
