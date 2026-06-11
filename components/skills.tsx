import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { skills } from "@/lib/portfolio-data"

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="02" title="Skills" />
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 80}>
            <div className="h-full rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
              <h3 className="mb-4 font-mono text-sm uppercase tracking-wider text-primary">
                {group.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-border bg-secondary/60 px-2.5 py-1 text-sm text-secondary-foreground"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
