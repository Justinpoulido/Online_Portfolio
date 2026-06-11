"use client"

import { useState, type FormEvent } from "react"
import { ExternalLink, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Reveal } from "@/components/reveal"
import { SectionHeading } from "@/components/section-heading"
import { profile } from "@/lib/portfolio-data"

const socials = [
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, value: profile.email },
  { label: "GitHub", href: profile.github, icon: ExternalLink, value: "View profile" },
  { label: "LinkedIn", href: profile.linkedin, icon: ExternalLink, value: "Connect" },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 4000)
    e.currentTarget.reset()
  }

  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24">
      <Reveal>
        <SectionHeading index="05" title="Contact" />
      </Reveal>

      <div className="grid gap-10 md:grid-cols-2">
        <Reveal className="space-y-6">
          <p className="text-pretty leading-relaxed text-muted-foreground">
            Have a project in mind or want to discuss an opportunity? I&apos;d
            love to hear from you. Reach out through the form or any of the
            channels below.
          </p>

          <ul className="space-y-3">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target={s.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40"
                >
                  <span className="flex size-10 items-center justify-center rounded-lg bg-secondary text-primary">
                    <s.icon className="size-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-card-foreground">
                      {s.label}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {s.value}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={handleSubmit}
            className="space-y-4 rounded-xl border border-border bg-card p-6"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
              />
            </div>
            <Button type="submit" className="w-full rounded-full">
              {sent ? "Message sent — thank you!" : "Send Message"}
              {!sent && <Send className="size-4" />}
            </Button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
