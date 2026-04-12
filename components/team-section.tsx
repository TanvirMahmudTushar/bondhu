import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

const basePath = process.env.NODE_ENV === "production" ? "/bondhu" : ""

/*
 * ============================================
 * TEAM DATA — CUSTOMIZE YOUR TEAM MEMBERS HERE
 * ============================================
 * Replace names, roles, emails, GitHub usernames,
 * LinkedIn usernames, and photo URLs below.
 */

interface TeamMember {
  name: string
  role: string
  type: "supervisor" | "member"
  email: string
  github: string
  linkedin: string
  photo: string
  isTeamLeader?: boolean
  isCoLeader?: boolean
}

const teamMembers: TeamMember[] = [
  {
    name: "Mohammad Shidujaman, PhD",
    role: "Assistant Professor, Dept. of Computer Science and Engineering, School of Engineering, Technology and Sciences",
    type: "supervisor",
    email: "shidujaman@iub.edu.bd",
    github: "",
    linkedin: "mohammad-shidujaman-phd-104a2848",
    photo: "/shidujaman.jpg",
  },
  {
    name: "Tanvir Mahmud",
    role: "System Architect and AIOps Engineer",
    type: "member",
    email: "6209tanvir@email.com",
    github: "tanvirmahmudtushar",
    linkedin: "tanvir-mahmud007",
    photo: "/tanvir.jpg",
    isTeamLeader: true,
  },
  {
    name: "Atia Ibnat Mouni",
    role: "NLP & LLM Specialist and Co Leader",
    type: "member",
    email: "ibnat567atia@gmail.com",
    github: "Atia002",
    linkedin: "atia-ibnat-07a982279",
    photo: "/atia.jpg",
    isCoLeader: true,
  },
  {
    name: "Tawhid Bin Moslim",
    role: "Hardware & Robotics Engineer",
    type: "member",
    email: "rafiul.islam@email.com",
    github: "TAWHID1514",
    linkedin: "tawhid-bin-moslim-tawhid-098ab9354",
    photo: "/tawhid.jpg",
  },
  {
    name: "Abir Mahmud",
    role: "IoT Engineer",
    type: "member",
    email: "",
    github: "",
    linkedin: "",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=AM&backgroundColor=0d9488",
  },
  {
    name: "Arman Uddin",
    role: "Hardware Assemble and Logistics",
    type: "member",
    email: "armanuddin1010@gmail.com",
    github: "Arman-zz",
    linkedin: "",
    photo: "/arman.jpg",
  },
]

export function TeamSection() {
  const supervisor = teamMembers.find((m) => m.type === "supervisor")
  const members = teamMembers.filter((m) => m.type === "member")

  return (
    <section id="team" className="border-t border-border px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            The People Behind Bondhu
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Our Team
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            A dedicated group of students and their supervisor working together
            to bring Bondhu to life.
          </p>
        </div>

        {/* Supervisor card */}
        {supervisor && (
          <div className="mx-auto mt-12 max-w-md">
            <Card className="border-primary/30 bg-card">
              <CardHeader className="items-center text-center">
                <img
                  src={supervisor.photo.startsWith("/") ? `${basePath}${supervisor.photo}` : supervisor.photo}
                  alt={supervisor.name}
                  width={80}
                  height={80}
                  className="h-20 w-20 rounded-full border-2 border-primary/30"
                />
                <div className="mt-3">
                  <Badge className="mb-2">Supervisor</Badge>
                  <CardTitle className="text-lg">{supervisor.name}</CardTitle>
                  <CardDescription className="mt-1">{supervisor.role}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex justify-center gap-3">
                <a
                  href={`https://github.com/${supervisor.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`${supervisor.name} GitHub`}
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`https://linkedin.com/in/${supervisor.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`${supervisor.name} LinkedIn`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${supervisor.email}`}
                  className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`Email ${supervisor.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Team member cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <Card
              key={member.name}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader className="items-center text-center">
                <img
                  src={member.photo.startsWith("/") ? `${basePath}${member.photo}` : member.photo}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-border transition-colors group-hover:border-primary/30"
                />
                <div className="mt-2">
                  {member.isTeamLeader && (
                    <Badge className="mb-2">Team Leader</Badge>
                  )}
                  {member.isCoLeader && (
                    <Badge className="mb-2">Team Co Leader</Badge>
                  )}
                  <CardTitle className="text-base">{member.name}</CardTitle>
                  <CardDescription className="mt-1 text-xs">
                    {member.role}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex justify-center gap-3">
                <a
                  href={`https://github.com/${member.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`${member.name} GitHub`}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`https://linkedin.com/in/${member.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`${member.name} LinkedIn`}
                >
                  <Linkedin className="h-3.5 w-3.5" />
                </a>
                <a
                  href={`mailto:${member.email}`}
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-3.5 w-3.5" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
