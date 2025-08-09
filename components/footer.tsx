import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t border-divider mt-16">
      <div className="mx-auto max-w-5xl px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <p className="text-sm text-muted">
          {"© "}
          <span>{new Date().getFullYear()}</span>
          {" [Your Name]. All rights reserved."}
        </p>
        <div className="flex items-center gap-4">
          <Link
            className="text-sm hover:text-accent"
            href="https://github.com/your-username"
            target="_blank"
            rel="noreferrer noopener"
          >
            GitHub
          </Link>
          <Link
            className="text-sm hover:text-accent"
            href="https://www.linkedin.com/in/your-username"
            target="_blank"
            rel="noreferrer noopener"
          >
            LinkedIn
          </Link>
          <Link className="text-sm hover:text-accent" href="mailto:you@example.com">
            Email
          </Link>
        </div>
      </div>
    </footer>
  )
}
