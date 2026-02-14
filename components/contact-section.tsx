import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/your-repo/bondhu",
    description: "View our source code and contribute",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/your-profile",
    description: "Connect with us professionally",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:team.bondhu@email.com",
    description: "team.bondhu@email.com",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Get in Touch
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Contact Us
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Interested in Bondhu? Have questions or want to collaborate? Reach
            out through any of the channels below.
          </p>
        </div>

        {/* Social cards */}
        <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel={
                link.href.startsWith("mailto")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group"
            >
              <Card className="h-full border-border bg-card transition-colors hover:border-primary/30">
                <CardHeader className="items-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <CardTitle className="mt-2 text-base">{link.label}</CardTitle>
                  <CardDescription className="text-xs">
                    {link.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <a
              href="https://github.com/your-repo/bondhu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" />
              Star us on GitHub
              <ExternalLink className="ml-2 h-3 w-3" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
