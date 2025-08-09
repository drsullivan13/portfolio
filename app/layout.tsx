import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import PageTransition from "@/components/page-transition"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Personal Portfolio — Software Engineer",
  description: "Minimal, serene personal portfolio showcasing work and experience.",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("http://localhost:3000"),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <PageTransition>
          <main id="main" className="min-h-[60vh]">
            {children}
          </main>
        </PageTransition>
        <Footer />
      </body>
    </html>
  )
}
