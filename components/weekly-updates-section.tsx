import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, CheckCircle2 } from "lucide-react"

const weeks = [
  {
    week: "Week 1–2",
    date: "Jan 1 – Jan 14",
    title: "Project Planning & Research",
    status: "completed" as const,
    tasks: [
      "Defined project scope and objectives",
      "Conducted initial literature review",
      "Selected hardware components (Raspberry Pi 5)",
      "Set up development environment",
    ],
  },
  {
    week: "Week 3–4",
    date: "Jan 15 – Jan 28",
    title: "Hardware Assembly & Setup",
    status: "completed" as const,
    tasks: [
      "Assembled robot chassis and frame",
      "Integrated microphone and speaker modules",
      "Configured Raspberry Pi with OS and dependencies",
      "Tested basic I/O peripherals",
    ],
  },
  {
    week: "Week 5–6",
    date: "Jan 29 – Feb 11",
    title: "AI Pipeline Development",
    status: "completed" as const,
    tasks: [
      "Implemented Speech-to-Text module",
      "Integrated NLP processing pipeline",
      "Connected LLM API for conversation",
      "Added Text-to-Speech output",
    ],
  },
  {
    week: "Week 7–8",
    date: "Feb 12 – Feb 25",
    title: "Integration & Testing",
    status: "in-progress" as const,
    tasks: [
      "End-to-end pipeline integration",
      "Bengali dialect testing and tuning",
      "Latency optimization",
      "User interaction testing",
    ],
  },
  {
    week: "Week 9–10",
    date: "Feb 26 – Mar 11",
    title: "Final Demo & Documentation",
    status: "upcoming" as const,
    tasks: [
      "Prepare project demonstration",
      "Write final documentation",
      "Create presentation materials",
      "Deploy project website",
    ],
  },
]

export function WeeklyUpdatesSection() {
  return (
    <section id="weekly-updates" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Progress Timeline
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Weekly Updates
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Track our development progress week by week as we build Bondhu from
            concept to reality.
          </p>
        </div>

        {/* Timeline */}
        <div className="mt-16 space-y-6">
          {weeks.map((week) => (
            <Card
              key={week.week}
              className={`border-border bg-card transition-colors ${
                week.status === "in-progress" ? "border-primary/40" : ""
              }`}
            >
              <CardHeader>
                <div className="flex flex-wrap items-center gap-3">
                  <CalendarDays className="h-5 w-5 text-primary" />
                  <CardTitle className="text-lg">{week.title}</CardTitle>
                  <Badge
                    variant={
                      week.status === "completed"
                        ? "default"
                        : week.status === "in-progress"
                          ? "secondary"
                          : "outline"
                    }
                    className={
                      week.status === "completed"
                        ? "bg-green-600/20 text-green-400 hover:bg-green-600/30"
                        : week.status === "in-progress"
                          ? "bg-yellow-600/20 text-yellow-400 hover:bg-yellow-600/30"
                          : ""
                    }
                  >
                    {week.status === "completed"
                      ? "Completed"
                      : week.status === "in-progress"
                        ? "In Progress"
                        : "Upcoming"}
                  </Badge>
                </div>
                <CardDescription>
                  {week.week} &middot; {week.date}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {week.tasks.map((task) => (
                    <li
                      key={task}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <CheckCircle2
                        className={`mt-0.5 h-4 w-4 shrink-0 ${
                          week.status === "completed"
                            ? "text-green-500"
                            : week.status === "in-progress"
                              ? "text-yellow-500"
                              : "text-muted-foreground/40"
                        }`}
                      />
                      {task}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
