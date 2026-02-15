import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Puzzle, Mic, Speaker, Cpu, Wifi, Battery, Camera } from "lucide-react"

const components = [
  {
    name: "Raspberry Pi 5",
    category: "Processing",
    icon: Cpu,
    description:
      "The main processing unit running all AI models, speech processing, and robot control logic on the edge.",
    specs: ["8GB RAM", "Quad-core ARM Cortex-A76", "2.4GHz"],
  },
  {
    name: "USB Microphone",
    category: "Input",
    icon: Mic,
    description:
      "High-sensitivity USB microphone for capturing user speech with noise cancellation support.",
    specs: ["Omnidirectional", "16-bit/48kHz", "USB 2.0"],
  },
  {
    name: "Speaker Module",
    category: "Output",
    icon: Speaker,
    description:
      "3W speaker module connected via 3.5mm audio jack for clear text-to-speech output.",
    specs: ["3W output", "3.5mm jack", "8Ω impedance"],
  },
  {
    name: "Wi-Fi Module",
    category: "Connectivity",
    icon: Wifi,
    description:
      "Built-in dual-band Wi-Fi for cloud API access and remote monitoring capabilities.",
    specs: ["802.11ac", "Dual-band", "Bluetooth 5.0"],
  },
  {
    name: "Power Supply",
    category: "Power",
    icon: Battery,
    description:
      "5V/5A USB-C power supply ensuring stable power delivery to all components.",
    specs: ["5V/5A", "USB-C PD", "25W"],
  },
  {
    name: "Camera Module",
    category: "Input",
    icon: Camera,
    description:
      "Optional camera module for future visual recognition and gesture-based interaction features.",
    specs: ["5MP", "1080p video", "CSI interface"],
  },
]

export function ComponentsSection() {
  return (
    <section id="components" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Building Blocks
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Components
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            The key hardware and electronic components that make up Bondhu&apos;s
            physical form and capabilities.
          </p>
        </div>

        {/* Components grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((component) => (
            <Card
              key={component.name}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <component.icon className="h-5 w-5" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {component.category}
                  </Badge>
                </div>
                <CardTitle className="mt-3 text-base">
                  {component.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {component.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {component.specs.map((spec) => (
                    <Badge
                      key={spec}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {spec}
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
