"use client"

import { useState } from "react"
import Image from "next/image"
import {
  Card,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const basePath = process.env.NODE_ENV === "production" ? "/bondhu" : ""

const galleryItems = [
  {
    src: `${basePath}/img1.webp`,
    alt: "Bondhu robot close-up view",
    caption: "Bondhu Robot Structure",
    category: "robot",
  },
  {
    src: `${basePath}/img2.webp`,
    alt: "Bondhu robot with sensors",
    caption: "Sensor Configuration",
    category: "robot",
  },
  {
    src: `${basePath}/img3.webp`,
    alt: "Bondhu detecting danger demo",
    caption: "Danger Detection Demo",
    category: "demo",
  },
  {
    src: `${basePath}/img4.webp`,
    alt: "Bondhu build and assembly process",
    caption: "Construction Phase",
    category: "build",
  },
  {
    src: `${basePath}/img5.webp`,
    alt: "Bondhu final assembly and testing",
    caption: "Final Assembly & Testing",
    category: "build",
  },
]

const categories = [
  { value: "all", label: "All" },
  { value: "robot", label: "Robot" },
  { value: "demo", label: "Demo" },
  { value: "build", label: "Build Process" },
]

export function GallerySection() {
  const [activeTab, setActiveTab] = useState("all")

  const filteredItems =
    activeTab === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeTab)

  return (
    <section id="gallery" className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Project Visuals
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Gallery
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A look at Bondhu through its development journey and demonstrations.
          </p>
        </div>

        {/* Tabs filter */}
        <Tabs
          value={activeTab}
          onValueChange={setActiveTab}
          className="mt-10"
        >
          <div className="flex justify-center">
            <TabsList>
              {categories.map((cat) => (
                <TabsTrigger key={cat.value} value={cat.value}>
                  {cat.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((cat) => (
            <TabsContent key={cat.value} value={cat.value}>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {(cat.value === "all"
                  ? galleryItems
                  : galleryItems.filter((item) => item.category === cat.value)
                ).map((item) => (
                  <Card
                    key={item.src}
                    className="group overflow-hidden border-border bg-card"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm font-medium">{item.caption}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
