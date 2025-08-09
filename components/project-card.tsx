import Link from "next/link"

export interface Project {
  title: string
  description: string
  features: string[]
  tech: string
  href?: string
  repo?: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="rounded-lg border border-divider bg-sand p-4 shadow-sm hover:shadow-soft transition-shadow">
      <div className="mb-4 aspect-[16/9] w-full overflow-hidden rounded-md border border-divider bg-white/60">
        <div className="flex h-full w-full items-center justify-center text-muted text-sm">
          {"Screenshot Placeholder"}
        </div>
      </div>
      <h3 className="text-base md:text-lg font-medium">{project.title}</h3>
      <p className="mt-2 text-[15px] text-charcoal/90">{project.description}</p>
      <ul className="mt-3 list-disc pl-5 text-[15px] text-charcoal/90">
        {project.features.map((f, i) => (
          <li key={i}>{f}</li>
        ))}
      </ul>
      <p className="mt-3 text-sm text-muted">
        <span className="font-medium">Tech:</span> {project.tech}
      </p>
      {(project.href || project.repo) && (
        <div className="mt-4 flex gap-4">
          {project.href && (
            <Link
              className="text-sm text-accent hover:underline"
              href={project.href}
              target="_blank"
              rel="noreferrer noopener"
            >
              Live Demo
            </Link>
          )}
          {project.repo && (
            <Link
              className="text-sm text-accent hover:underline"
              href={project.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              Repository
            </Link>
          )}
        </div>
      )}
    </article>
  )
}
