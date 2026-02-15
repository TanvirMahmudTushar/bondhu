import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { BookOpen, FileText, ExternalLink } from "lucide-react"

const papers = [
  {
    title: "Speech Recognition for Low-Resource Languages",
    authors: "Zhang et al., 2024",
    summary:
      "A comprehensive survey on ASR techniques for low-resource languages, covering transfer learning and data augmentation methods applicable to Bengali dialect recognition.",
    link: "#",
  },
  {
    title: "Transformer-Based Machine Translation",
    authors: "Vaswani et al., 2017",
    summary:
      "The foundational paper on the Transformer architecture that powers modern NLP and machine translation systems used in Bondhu.",
    link: "#",
  },
  {
    title: "Edge AI for Robotics Applications",
    authors: "Chen et al., 2023",
    summary:
      "Explores deploying AI models on edge devices like Raspberry Pi, covering optimization techniques for real-time inference in robotics.",
    link: "#",
  },
  {
    title: "Multilingual Text-to-Speech Systems",
    authors: "Ren et al., 2022",
    summary:
      "Advances in neural TTS supporting multiple languages, with focus on naturalness and speaker adaptation for conversational AI.",
    link: "#",
  },
  {
    title: "Human-Robot Interaction Through Natural Language",
    authors: "Mavridis, 2015",
    summary:
      "A review of NLP-driven human-robot interaction paradigms, informing Bondhu's conversational design and user experience.",
    link: "#",
  },
]

export function LiteratureReviewSection() {
  return (
    <section id="literature-review" className="px-4 py-24 lg:py-32">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-primary">
            Research Background
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Literature Review
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Key academic papers and research that informed the design and
            development of Bondhu&apos;s AI translation pipeline.
          </p>
        </div>

        {/* Papers grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {papers.map((paper) => (
            <Card
              key={paper.title}
              className="group border-border bg-card transition-colors hover:border-primary/30"
            >
              <CardHeader>
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base leading-snug">
                      {paper.title}
                    </CardTitle>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {paper.authors}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {paper.summary}
                </p>
                {paper.link !== "#" && (
                  <a
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1 text-xs text-primary hover:underline"
                  >
                    <FileText className="h-3 w-3" />
                    Read Paper
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
