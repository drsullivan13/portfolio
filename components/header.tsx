"use client"

import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { usePathname } from "next/navigation"

export default function Header() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Close menu on route change
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }
    if (open) {
      document.addEventListener("mousedown", onClickOutside)
    }
    return () => document.removeEventListener("mousedown", onClickOutside)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-warm bg-background/80 backdrop-blur-md shadow-soft">
      <div className="mx-auto max-w-5xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-base md:text-lg tracking-tight text-sophisticated hover:text-accent transition-colors duration-200"
          aria-label="Go to home"
        >
          [Your Name]
        </Link>

        <div 
          className="relative" 
          ref={menuRef}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          <div className="group inline-flex items-center">
            <button
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="main-menu"
              onClick={() => setOpen((v) => !v)}
              className="btn-glass relative h-9 w-9 rounded-md hover:shadow-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 flex items-center justify-center transition-all duration-200"
            >
              <span className="sr-only">{open ? "Close" : "Open"} menu</span>
              {/* Hamburger (CSS bars) */}
              <span
                className={`block h-[2px] w-5 bg-sophisticated transition-transform duration-200 ${open ? "translate-y-[6px] rotate-45" : ""}`}
              />
              <span
                className={`block h-[2px] w-5 bg-sophisticated my-[5px] transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              />
              <span
                className={`block h-[2px] w-5 bg-sophisticated transition-transform duration-200 ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
              />
            </button>
          </div>

          <nav
            id="main-menu"
            role="navigation"
            aria-label="Primary"
            className={`absolute right-0 top-full w-44 rounded-md border border-warm bg-card/95 backdrop-blur-md p-2 shadow-elegant animate-menuIn ${open ? "block" : "hidden"}`}
          >
            <MenuLink href="/" label="Home" current={pathname === "/"} />
            <MenuLink href="/about" label="About" current={pathname === "/about"} />
            <MenuLink href="/projects" label="Projects" current={pathname === "/projects"} />
          </nav>
        </div>
      </div>
    </header>
  )
}

function MenuLink({ href, label, current }: { href: string; label: string; current?: boolean }) {
  return (
    <Link
      href={href}
      className={`block rounded px-3 py-2 text-sm transition-colors duration-200 ${current ? "text-accent bg-accent/10" : "text-sophisticated hover:text-accent hover:bg-accent/5"} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40`}
      aria-current={current ? "page" : undefined}
    >
      {label}
    </Link>
  )
}
