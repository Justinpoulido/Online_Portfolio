import { ArrowUpRight } from "lucide-react"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { projects } from "@/lib/portfolio-data"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="03" title="Projects" />
      </Reveal>

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={(i % 2) * 100}>
            <article className="group flex h-full flex-col rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-lg font-medium text-card-foreground">
                  {project.title}
                </h3>
                <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
              </div>

              <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-md bg-secondary/60 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                  >
                    {tech}
                  </li>
                ))}
              </ul>

              <a
                href={project.href}
                className="mt-5 inline-flex w-fit items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-foreground"
              >
                View Details
                <ArrowUpRight className="size-4" />
              </a>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
