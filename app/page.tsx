/**
 * Bondhu — A Talking AI Translator Robot
 *
 * This is a fully static website built with:
 * - Next.js (App Router) with `output: "export"` for GitHub Pages
 * - TypeScript, Tailwind CSS, shadcn/ui
 *
 * To deploy on GitHub Pages:
 * 1. Push to GitHub
 * 2. Enable GitHub Pages via Settings → Pages → GitHub Actions
 * 3. See next.config.mjs for the full GitHub Actions workflow YAML
 */

import { Navbar } from "@/components/navbar"
import { AppSidebar } from "@/components/app-sidebar"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TechSection } from "@/components/tech-section"
import { LiteratureReviewSection } from "@/components/literature-review-section"
import { WeeklyUpdatesSection } from "@/components/weekly-updates-section"
import { ComponentsSection } from "@/components/components-section"
import { HardwareSection } from "@/components/hardware-section"
import { SoftwareSection } from "@/components/software-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <AppSidebar />
      <main className="transition-all duration-300 md:pl-52">
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TechSection />
        <LiteratureReviewSection />
        <WeeklyUpdatesSection />
        <ComponentsSection />
        <HardwareSection />
        <SoftwareSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
