import ProjectCard, { type Project } from "@/components/project-card"

export const metadata = {
  title: "Projects — Personal Portfolio",
}

const projects: Project[] = [
  {
    title: "Fantasy Football League Tracker",
    description: "Tracks league stats with real-time scoring and player analysis.",
    features: ["Real-time scoring", "Player analysis", "Clean dashboards"],
    tech: "React, Node.js",
  },
  {
    title: "News Site",
    description: "Aggregates recent articles about any company with quick search.",
    features: ["Company search", "Article aggregation", "Clean reading experience"],
    tech: "Next.js, API Integrations",
  },
  {
    title: "Ratatouille",
    description: "AI-based recipe generation from available ingredients.",
    features: ["Ingredient-based recipes", "AI suggestions", "Save favorites (future)"],
    tech: "Python, Machine Learning",
  },
]

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:py-16">
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Projects</h1>
        <p className="mt-2 text-[15px] text-muted">A selection of focused, practical builds.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
    </div>
  )
}
