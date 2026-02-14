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
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import { TechSection } from "@/components/tech-section"
import { TeamSection } from "@/components/team-section"
import { GallerySection } from "@/components/gallery-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <TechSection />
        <TeamSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
