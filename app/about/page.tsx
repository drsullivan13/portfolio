import Section from "@/components/section"

export const metadata = {
  title: "About — Personal Portfolio",
}

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 md:py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-2xl md:text-3xl font-medium tracking-tight">About</h1>
        <p className="text-[15px] text-muted">Resume-style overview of experience and skills.</p>
      </header>

      <Section title="Professional Summary">
        <p>
          {
            "[Your Name] is a Software Engineer focused on crafting minimal, robust, and accessible products. Passionate about clean architecture, thoughtful UX, and performance."
          }
        </p>
      </Section>

      <Section title="Skills">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 list-disc pl-5">
          <li>JavaScript / TypeScript</li>
          <li>React / Next.js</li>
          <li>Node.js</li>
          <li>CSS / Tailwind</li>
          <li>Testing (Jest, React Testing Library)</li>
          <li>CI/CD & Cloud (Vercel)</li>
        </ul>
      </Section>

      <Section title="Experience">
        <div className="space-y-4">
          <div>
            <h3 className="font-medium">Software Engineer — [Company Name]</h3>
            <p className="text-sm text-muted">[Start Date] — [End Date]</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Built and maintained scalable, accessible web applications.</li>
              <li>Collaborated with cross-functional teams to deliver features on time.</li>
              <li>Improved performance and developer experience through tooling and best practices.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium">Frontend Engineer — [Company Name]</h3>
            <p className="text-sm text-muted">[Start Date] — [End Date]</p>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>Led UI modernization using Next.js and Tailwind CSS.</li>
              <li>Established component libraries and documentation.</li>
              <li>Advocated for accessibility and testing practices.</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section title="Education">
        <div>
          <h3 className="font-medium">B.S. in Computer Science — [University]</h3>
          <p className="text-sm text-muted">[Year]</p>
          <p className="mt-1">Relevant coursework: Data Structures, Algorithms, Databases, HCI.</p>
        </div>
      </Section>

      <Section title="Contact">
        <ul className="space-y-2">
          <li>
            Email:{" "}
            <a className="text-accent hover:underline" href="mailto:you@example.com">
              you@example.com
            </a>
          </li>
          <li>
            LinkedIn:{" "}
            <a
              className="text-accent hover:underline"
              href="https://www.linkedin.com/in/your-username"
              target="_blank"
              rel="noreferrer noopener"
            >
              linkedin.com/in/your-username
            </a>
          </li>
        </ul>
      </Section>
    </div>
  )
}
