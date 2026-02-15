import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  HardDrive,
  CircuitBoard,
  Cog,
  Plug,
  Thermometer,
  Box,
} from "lucide-react"

const hardwareItems = [
  {
    name: "Robot Chassis & Frame",
    icon: Box,
    status: "Complete",
    description:
      "Custom-designed frame housing all electronics, microphone, speaker, and the Raspberry Pi. Built for durability and portability.",
    details: [
      "3D-printed enclosure",
      "Ventilation slots for cooling",
      "Modular component mounting",
    ],
  },
  {
    name: "Circuit Board Assembly",
    icon: CircuitBoard,
    status: "Complete",
    description:
      "Main circuit board connecting all peripheral components to the Raspberry Pi GPIO, including power distribution and signal routing.",
    details: [
      "Custom PCB design",
      "GPIO breakout connections",
      "Power regulation circuit",
    ],
  },
  {
    name: "Servo Motor System",
    icon: Cog,
    status: "In Progress",
    description:
      "Servo motors for head movement and gesture-based interaction, allowing Bondhu to physically respond during conversations.",
    details: [
      "2x SG90 micro servos",
      "Pan-tilt head mechanism",
      "PWM control via GPIO",
    ],
  },
  {
    name: "Power Management",
    icon: Plug,
    status: "Complete",
    description:
      "Reliable power delivery system with voltage regulation ensuring stable operation of all components.",
    details: [
      "5V/5A USB-C input",
      "Buck converter for 3.3V rail",
      "Power indicator LEDs",
    ],
  },
  {
    name: "Thermal Management",
    icon: Thermometer,
    status: "Complete",
    description:
      "Heat dissipation system with heatsinks and passive cooling to maintain optimal CPU temperature during AI inference.",
    details: [
      "Aluminum heatsink on SoC",
      "Thermal paste application",
      "Passive airflow design",
    ],
  },
  {
    name: "Sensor Array",
    icon: HardDrive,
    status: "Planned",
    description:
      "Future expansion with proximity sensors and LED indicators for enhanced interaction feedback and environmental awareness.",
    details: [
      "Ultrasonic distance sensor",
      "RGB LED ring for status",
      "Touch-sensitive button",
    ],
  },
]

export function HardwareSection() {
  return (
    <section id="hardware" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Physical Design
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Hardware
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The physical components, assembly, and engineering behind
            Bondhu&apos;s robotic body.
          </p>
        </div>

        {/* Hardware grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {hardwareItems.map((item) => (
            <Card
              key={item.name}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <Badge
                    variant="outline"
                    className={`text-xs ${
                      item.status === "Complete"
                        ? "border-green-500/30 text-green-400"
                        : item.status === "In Progress"
                          ? "border-yellow-500/30 text-yellow-400"
                          : "border-muted-foreground/30"
                    }`}
                  >
                    {item.status}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base">{item.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <ul className="mt-3 space-y-1">
                  {item.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      {detail}
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
