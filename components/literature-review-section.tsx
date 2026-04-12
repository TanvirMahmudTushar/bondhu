import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen, FileText, ExternalLink } from "lucide-react"

const papers = [
  {
    title: "YOLO: Real-Time Object Detection",
    authors: "Redmon et al., 2016 - Updated 2023",
    summary:
      "Foundational real-time object detection framework enabling Bondhu to identify hazards, fires, and structural damage with high accuracy and minimal latency.",
    link: "#",
  },
  {
    title: "Thermal Imaging for Fire Detection",
    authors: "Santos et al., 2022",
    summary:
      "Advanced techniques for using thermal imaging to detect fires and heat anomalies in various environmental conditions, critical for Bondhu's early warning system.",
    link: "#",
  },
  {
    title: "Deep Learning for Chemical Hazard Recognition",
    authors: "Kumar et al., 2023",
    summary:
      "Neural networks trained for identifying chemical spills, toxic substances, and environmental pollutants from visual data on edge devices.",
    link: "#",
  },
  {
    title: "Multi-Sensor Fusion for Robotics",
    authors: "Chen et al., 2023",
    summary:
      "Techniques for combining data from multiple sensors (vision, thermal, proximity) to reduce false positives and improve hazard detection accuracy.",
    link: "#",
  },
  {
    title: "Bengali Language for Emergency Response Systems",
    authors: "Majumder et al., 2023",
    summary:
      "Research on effective communication of critical safety information in Bengali, ensuring all community members understand hazard warnings and recommendations.",
    link: "#",
  },
]

export function LiteratureReviewSection() {
  return (
    <section id="literature-review" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Research Background
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Literature Review
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Academic research and cutting-edge papers that informed the development of Bondhu's hazard detection and safety alert systems.
          </p>
        </div>

        {/* Papers grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <Card
              key={paper.title}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">
                      {paper.title}
                    </CardTitle>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {paper.authors}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {paper.summary}
                </p>
                {paper.link !== "#" && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <FileText className="h-3 w-3" />
                    Read Paper
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
