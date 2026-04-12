"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Shield, AlertTriangle } from "lucide-react"

const basePath = process.env.NODE_ENV === "production" ? "/bondhu" : ""

interface Step {
  number: number
  title: string
  description: string
  image: string
  icon: React.ReactNode
  color: string
}

const steps: Step[] = [
  {
    number: 1,
    title: "Danger Detection",
    description: "Without Bondhu, families are vulnerable to unexpected dangers and emergencies",
    image: "/DangerWithoutRobot.webp",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "from-red-500/10 to-red-600/10",
  },
  {
    number: 2,
    title: "Smart Recognition",
    description: "Bondhu identifies and analyzes dangerous situations in real-time using advanced AI",
    image: "/DangerWithRobot.webp",
    icon: <Shield className="h-6 w-6" />,
    color: "from-yellow-500/10 to-yellow-600/10",
  },
  {
    number: 3,
    title: "Quick Alert System",
    description: "Bondhu instantly alerts authorities with precise GPS location for immediate response",
    image: "/policewithalert.webp",
    icon: <AlertCircle className="h-6 w-6" />,
    color: "from-green-500/10 to-green-600/10",
  },
]

export function HowItWorksSection() {
  return (
    <section className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Our Process
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Three simple steps that can save lives. See how Bondhu detects dangers
            and protects your family with intelligent alert systems.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 space-y-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-full h-12 w-1 -translate-x-1/2 bg-gradient-to-b from-primary/30 to-transparent" />
              )}

              <div className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:direction-rtl" : ""}`}>
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br ${step.color} text-lg font-bold text-primary`}>
                      {step.number}
                    </div>
                    <div className="flex items-center gap-2 text-primary">
                      {step.icon}
                      <span className="text-sm font-semibold">{`Step ${step.number}`}</span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                  <p className="mt-3 text-lg text-muted-foreground">{step.description}</p>

                  {/* Info boxes */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {step.number === 1 && (
                      <>
                        <Badge variant="outline">Real-time Monitoring</Badge>
                        <Badge variant="outline">24/7 Protection</Badge>
                      </>
                    )}
                    {step.number === 2 && (
                      <>
                        <Badge variant="outline">AI-Powered</Badge>
                        <Badge variant="outline">Instant Analysis</Badge>
                      </>
                    )}
                    {step.number === 3 && (
                      <>
                        <Badge variant="outline">GPS Enabled</Badge>
                        <Badge variant="outline">Emergency Response</Badge>
                      </>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg hover:shadow-xl transition-shadow">
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} pointer-events-none`} />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`${basePath}${step.image}`}
                      alt={step.title}
                      width={560}
                      height={420}
                      className="relative z-10 object-cover w-full"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5 pointer-events-none" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-20 rounded-2xl border border-border bg-card p-8 text-center">
          <h3 className="text-2xl font-bold">Why Bondhu Is Essential</h3>
          <p className="mt-3 text-lg text-muted-foreground">
            Every second counts in emergencies. Bondhu combines intelligent danger detection with rapid 
            response capabilities to ensure your family gets help when they need it most.
          </p>
        </div>
      </div>
    </section>
  )
}
