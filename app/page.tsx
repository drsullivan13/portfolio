import Link from "next/link"

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <section className="flex flex-col items-center text-center gap-8">
        {/* Circular avatar placeholder */}
        <div className="h-28 w-28 md:h-36 md:w-36 rounded-full avatar-ring flex items-center justify-center">
          <span className="text-2xl md:text-3xl text-muted-foreground">{"👤"}</span>
        </div>

        <div className="space-y-3">
          <h1 className="text-2xl md:text-4xl font-medium tracking-tight text-sophisticated">[Your Name]</h1>
          <p className="text-base md:text-lg text-accent-muted">Software Engineer</p>
          <p className="max-w-2xl text-[15px] md:text-base text-muted-foreground">
            {"Building intuitive software solutions with a focus on simplicity, performance, and user empathy."}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/about"
            className="btn-glass rounded-md px-4 py-2 text-sm text-sophisticated hover:shadow-soft transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            About Me
          </Link>
          <Link
            href="/projects"
            className="btn-sophisticated rounded-md text-accent-foreground px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40"
          >
            Projects
          </Link>
        </div>
      </section>
    </div>
  )
}
