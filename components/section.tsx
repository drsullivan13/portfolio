import type React from "react"
export default function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-lg font-medium tracking-tight">{title}</h2>
      <div className="text-[15px] leading-7 text-charcoal/90">{children}</div>
    </section>
  )
}
