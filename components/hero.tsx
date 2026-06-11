import { ArrowRight, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { profile } from "@/lib/portfolio-data"

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-16"
    >
      {/* gradient accents */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-[28rem] w-[28rem] rounded-full bg-primary/15 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-[24rem] w-[24rem] rounded-full bg-chart-3/15 blur-[120px]"
      />

      <div className="mx-auto w-full max-w-5xl">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary" />
          Available for opportunities
        </p>

        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          {profile.name}
        </h1>

        <p className="mt-4 text-pretty text-base text-primary sm:text-lg">
          {profile.headline}
        </p>

        <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.intro}
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="rounded-full">
            <a href="#projects">
              View Projects
              <ArrowRight className="size-4" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="rounded-full border-border bg-transparent"
          >
            <a href="#contact">
              <Mail className="size-4" />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
