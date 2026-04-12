import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Camera,
  AlertTriangle,
  Zap,
  Volume2,
  Database,
} from "lucide-react"

const softwareModules = [
  {
    name: "Computer Vision Engine",
    icon: Camera,
    language: "Python",
    description:
      "Real-time image processing and object detection using deep learning models to identify fires, structural damage, spills, and hazards.",
    technologies: ["YOLOv8", "OpenCV", "TensorFlow"],
  },
  {
    name: "Thermal Analysis Module",
    icon: AlertTriangle,
    language: "Python",
    description:
      "Processes thermal imaging data to detect heat anomalies, fires, and temperature-based hazards in any lighting condition.",
    technologies: ["NumPy", "SciPy", "Thermal Libraries"],
  },
  {
    name: "Hazard Detection AI",
    icon: Zap,
    language: "Python",
    description:
      "Deep learning classifier trained to instantly recognize and categorize multiple types of environmental hazards and safety threats.",
    technologies: ["PyTorch", "Custom Models", "ONNX Runtime"],
  },
  {
    name: "Alert & Notification System",
    icon: Volume2,
    language: "Python",
    description:
      "Generates immediate alerts in Bengali with clear danger warnings, evacuation recommendations, and emergency contact information.",
    technologies: ["Text-to-Speech", "Audio Output", "AsyncIO"],
  },
  {
    name: "Sensor Fusion & Processing",
    icon: Code2,
    language: "Python",
    description:
      "Integrates data from multiple sensors (cameras, thermal, proximity) for comprehensive hazard detection with minimal false positives.",
    technologies: ["Kalman Filter", "Data Fusion", "RPi.GPIO"],
  },
  {
    name: "Data Logging & Analytics",
    icon: Database,
    language: "Python / JSON",
    description:
      "Records hazard events, response times, and trends to build safety insights and enable community-level threat pattern analysis.",
    technologies: ["SQLite", "JSON Storage", "Analytics"],
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
            The AI modules and software architecture that enable real-time hazard detection, instant alerts, and intelligent safety responses.
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
