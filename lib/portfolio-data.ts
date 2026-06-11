export const profile = {
  name: "Justin Poulido",
  headline: "Computer Science Major | Developer | IT Solutions Builder",
  intro:
    "I build web applications, automate business workflows, and solve real-world IT problems with practical software solutions.",
  email: "jpoulido@gmail.com",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
}

export const about = [
  "I'm a Computer Science student and junior IT/developer who enjoys turning messy, manual processes into clean, reliable software. My background blends a strong technical foundation with hands-on experience supporting real businesses.",
  "My interests span software development, automation, AI tooling, business systems, and cloud deployment. I like working at the intersection of code and operations — shipping practical tools that make teams faster.",
  "Most of all, I focus on bridging technical work with real business needs: understanding the problem behind the request, then building the right solution and deploying it where people can actually use it.",
]

export type Skill = {
  category: string
  items: string[]
}

export const skills: Skill[] = [
  {
    category: "Programming",
    items: ["JavaScript", "TypeScript", "Python", "C++", "SQL"],
  },
  {
    category: "Web",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind", "Vercel"],
  },
  {
    category: "Databases",
    items: ["Supabase", "PostgreSQL", "SQLite"],
  },
  {
    category: "Automation",
    items: ["Airtable", "Zapier", "Zoho", "Microsoft Access"],
  },
  {
    category: "AI Tools",
    items: ["OpenAI", "Codex", "Prompt Engineering"],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  href: string
}

export const projects: Project[] = [
  {
    title: "AI Stock Signal Monitoring Platform",
    description:
      "A real-time monitoring platform that ingests market data and surfaces AI-assisted trading signals with clean dashboards and alerts.",
    tech: ["Next.js", "TypeScript", "Supabase", "OpenAI"],
    href: "#",
  },
  {
    title: "SurveyGenius AI Survey Tool",
    description:
      "An AI-powered survey builder that generates questions, collects responses, and summarizes insights automatically for faster decision-making.",
    tech: ["React", "Next.js", "OpenAI", "PostgreSQL"],
    href: "#",
  },
  {
    title: "Zoho / POS Document Upload Troubleshooting",
    description:
      "Diagnosed and resolved document upload and integration failures between Zoho and point-of-sale systems for a retail operation.",
    tech: ["Zoho", "POS", "Integrations", "Support"],
    href: "#",
  },
  {
    title: "Airtable Quotation Automation System",
    description:
      "Automated the end-to-end quotation workflow in Airtable — from intake to approval — eliminating manual data entry and speeding up turnaround.",
    tech: ["Airtable", "Zapier", "Automation"],
    href: "#",
  },
  {
    title: "Vercel + Supabase Web Applications",
    description:
      "Designed and deployed full-stack web applications with authentication and persistent data, shipped to production on Vercel.",
    tech: ["Next.js", "Supabase", "Vercel", "TypeScript"],
    href: "#",
  },
  {
    title: "Retail Business Digital Solutions",
    description:
      "Built and maintained digital tooling for a retail business, modernizing legacy spreadsheets into structured, queryable systems.",
    tech: ["SQL", "Microsoft Access", "Automation"],
    href: "#",
  },
]

export type Experience = {
  role: string
  summary: string
  tags: string[]
}

export const experience: Experience[] = [
  {
    role: "Junior IT / Developer Support",
    summary:
      "Provided day-to-day technical support and built internal tools, helping teams resolve issues and work more efficiently.",
    tags: ["Troubleshooting", "Internal Tools", "Support"],
  },
  {
    role: "Business Systems Automation",
    summary:
      "Designed automation workflows across Airtable, Zapier, and Zoho to replace manual, error-prone processes.",
    tags: ["Airtable", "Zapier", "Zoho"],
  },
  {
    role: "POS and Zoho Integration Support",
    summary:
      "Maintained and debugged integrations between point-of-sale systems and Zoho to keep business operations running smoothly.",
    tags: ["POS", "Zoho", "Integrations"],
  },
  {
    role: "Web Deployment and Troubleshooting",
    summary:
      "Deployed web applications to Vercel and resolved build, runtime, and environment issues across projects.",
    tags: ["Vercel", "Next.js", "Deployment"],
  },
]
