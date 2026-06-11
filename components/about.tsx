import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { about } from "@/lib/portfolio-data"

const highlights = [
  "Software Development",
  "Automation",
  "AI Tooling",
  "Business Systems",
  "Cloud Deployment",
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="01" title="About" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-3">
        <Reveal className="md:col-span-2 space-y-5">
          {about.map((para) => (
            <p
              key={para.slice(0, 24)}
              className="text-pretty leading-relaxed text-muted-foreground"
            >
              {para}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="mb-4 font-mono text-xs uppercase tracking-wider text-muted-foreground">
              Focus areas
            </p>
            <ul className="space-y-3">
              {highlights.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-card-foreground"
                >
                  <span className="size-1.5 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
