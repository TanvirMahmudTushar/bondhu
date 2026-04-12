import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Camera, Zap, Bell, ClipboardList } from "lucide-react"

const steps = [
  {
    icon: Camera,
    title: "Real-Time Detection",
    description:
      "Bondhu continuously monitors the environment using advanced computer vision and multiple sensors to detect potential hazards and safety threats.",
  },
  {
    icon: Zap,
    title: "AI Analysis",
    description:
      "Machine learning models analyze sensor data in real-time to identify dangers like fire, chemical spills, structural failures, and other critical hazards.",
  },
  {
    icon: Bell,
    title: "Alert & Communication",
    description:
      "Upon detection, Bondhu issues immediate alerts in Bengali, warning nearby individuals of the danger with clear, understandable instructions.",
  },
  {
    icon: ClipboardList,
    title: "Recommendations",
    description:
      "Provides specific, actionable recommendations to mitigate risks, including evacuation routes, emergency procedures, and preventive measures.",
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
            How Bondhu Works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Bondhu combines computer vision, sensor fusion, and advanced AI to continuously monitor environments and protect communities. It detects dangers in real-time and communicates critical safety information in Bengali.
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
