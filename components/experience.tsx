import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { experience } from "@/lib/portfolio-data"

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="04" title="Experience" />
      </Reveal>

      <div className="relative">
        <span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-px bg-border sm:left-[7px]"
        />
        <div className="space-y-8">
          {experience.map((item, i) => (
            <Reveal key={item.role} delay={i * 80}>
              <div className="relative pl-8">
                <span className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-primary bg-background" />
                <h3 className="text-lg font-medium text-foreground">
                  {item.role}
                </h3>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
