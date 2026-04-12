import { Badge } from "@/components/ui/badge"
import {
  Camera,
  AlertTriangle,
  Zap,
  MapPin,
  BarChart3,
  Volume2,
} from "lucide-react"

const features = [
  {
    icon: Camera,
    title: "Advanced Vision Sensors",
    description:
      "High-resolution camera systems with thermal imaging detect fires, hazards, and emergency situations in real-time.",
  },
  {
    icon: AlertTriangle,
    title: "Multi-Hazard Detection",
    description:
      "Identifies chemical spills, structural damage, electrical hazards, flooding, and other critical safety threats instantly.",
  },
  {
    icon: Zap,
    title: "Instant Response System",
    description:
      "Delivers immediate alerts and emergency notifications within milliseconds of hazard detection for rapid response.",
  },
  {
    icon: MapPin,
    title: "Spatial Awareness",
    description:
      "Provides precise location data of detected hazards, helping emergency teams respond faster and more effectively.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description:
      "Generates detailed safety reports and trends to help communities implement preventive measures and reduce risk.",
  },
  {
    icon: Volume2,
    title: "Bengali Language Support",
    description:
      "Communicates critical safety information in Bengali, ensuring all community members understand the dangers and recommendations.",
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
            Bondhu combines advanced sensors, computer vision, and AI to deliver critical safety capabilities for hazard detection and community protection.
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
            "Computer Vision",
            "Hazard Detection",
            "Thermal Imaging",
            "Bengali NLP",
            "Robotics",
            "Real-time Analytics",
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
