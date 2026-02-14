import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail } from "lucide-react"

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
}

const teamMembers: TeamMember[] = [
  {
    name: "Dr. Ayesha Rahman",
    role: "Project Supervisor",
    type: "supervisor",
    email: "ayesha.rahman@university.edu",
    github: "ayesha-rahman",
    linkedin: "ayesha-rahman",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=AR&backgroundColor=0d9488",
  },
  {
    name: "Farhan Ahmed",
    role: "Lead Developer & AI Engineer",
    type: "member",
    email: "farhan.ahmed@email.com",
    github: "farhan-ahmed",
    linkedin: "farhan-ahmed",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=FA&backgroundColor=0d9488",
  },
  {
    name: "Nusrat Jahan",
    role: "NLP & LLM Specialist",
    type: "member",
    email: "nusrat.jahan@email.com",
    github: "nusrat-jahan",
    linkedin: "nusrat-jahan",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=NJ&backgroundColor=0d9488",
  },
  {
    name: "Rafiul Islam",
    role: "Hardware & Robotics Engineer",
    type: "member",
    email: "rafiul.islam@email.com",
    github: "rafiul-islam",
    linkedin: "rafiul-islam",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=RI&backgroundColor=0d9488",
  },
  {
    name: "Tasnia Mim",
    role: "Speech Processing Engineer",
    type: "member",
    email: "tasnia.mim@email.com",
    github: "tasnia-mim",
    linkedin: "tasnia-mim",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=TM&backgroundColor=0d9488",
  },
  {
    name: "Sakib Hossain",
    role: "Frontend & Integration Developer",
    type: "member",
    email: "sakib.hossain@email.com",
    github: "sakib-hossain",
    linkedin: "sakib-hossain",
    photo: "https://api.dicebear.com/9.x/initials/svg?seed=SH&backgroundColor=0d9488",
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
                  src={supervisor.photo}
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
                  src={member.photo}
                  alt={member.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded-full border-2 border-border transition-colors group-hover:border-primary/30"
                />
                <div className="mt-2">
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
