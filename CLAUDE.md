# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## Project Overview

This is a minimalistic, intuitive personal portfolio website serving as an online resume and showcase for software engineering projects. The site emphasizes serenity, ease of navigation, and minimal clutter to provide a calm, professional user experience.

### Target Audience
- Recruiters and potential employers
- Collaborators and visitors interested in software engineering projects

### Primary Goals
- Create a serene, professional online presence that feels like an extension of a resume
- Highlight personal information and projects in an uncluttered, intuitive manner
- Ensure smooth transitions between pages and easy navigation (all pages accessible within 1-2 clicks)

## Project Architecture

This is a Next.js 15 personal portfolio website using TypeScript and the App Router. The architecture follows these patterns:

### Stack
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with custom CSS variables using OKLCH color space
- **UI Components**: Radix UI primitives with shadcn/ui configuration
- **TypeScript**: Strict mode enabled with path aliases (`@/*` → `./`)

### Directory Structure
- `/app` - Next.js App Router pages and layouts
  - `/about` - About page with detailed personal information (professional summary, skills, experience, education, contact info)
  - `/projects` - Projects page showcasing three key projects in card-based layout
  - `layout.tsx` - Root layout with Header, Footer, and PageTransition wrapper
  - `page.tsx` - Landing page with hero section, brief introduction, and call-to-actions
- `/components` - Reusable React components (header, footer, page-transition, project-card, section)
- `/lib` - Utility functions (contains `cn()` for className merging)

### Core Pages Structure
- **Landing Page**: Hero section with name, title (Software Engineer), tagline, subtle CTAs for "About Me" and "Projects", and profile image placeholder
- **About Page**: Resume-like structure with sections for Professional Experience, Skills, Education, and contact information
- **Projects Page**: Three featured projects displayed in card-based grid layout with descriptions, features, and tech stack details

### Design System
- Uses a custom color palette with OKLCH color space in CSS variables
- Implements light/dark theme support via CSS custom properties
- Component styling follows shadcn/ui patterns with Tailwind utility classes
- Inter font family for typography

#### Design Guidelines (from PRD)
- **UI Style**: Extremely minimalistic and intuitive with emphasis on whitespace, clean typography, and hidden elements
- **Color Scheme**: Neutral and serene tones for a calming feel:
  - Background: Soft off-white or light beige (#F5F5F5 or #FAF9F6)
  - Text: Dark gray (#333333) with muted blue/green accents (#4A90E2 for links)
  - Accents: Subtle gradients or borders in neutral tones (#E0E0E0 for dividers)
  - Avoid stark white (#FFFFFF) or high-contrast colors
- **Typography**: Clean sans-serif fonts (Inter or Roboto), larger headings but not bold/overpowering
- **Layout**: Single-column for mobile, grid for projects on desktop, using flexbox/grid for alignment
- **Interactions**: Smooth page transitions without reloads (SPA behavior)

### Key Features
- Accessibility features (skip links, semantic HTML, keyboard navigation, high contrast text)
- Page transitions via custom PageTransition component with smooth fade-ins/animations
- Mobile-responsive design with collapsible navigation
- TypeScript strict mode for type safety
- Minimalistic navigation (hamburger menu or hidden sidebar)
- Footer with social links (GitHub, LinkedIn) and copyright notice

### Featured Projects (Content Specifications)
1. **Fantasy Football League Tracker**
   - Description: Real-time scoring and player statistics tracking
   - Key features: Real-time scoring, player stats management
   - Tech stack: React, Node.js

2. **News Site**
   - Description: Company news article aggregation platform
   - Key features: Search by company, article aggregation
   - Tech stack: [To be specified]

3. **Ratatouille (Food Recipe Generation App)**
   - Description: AI-powered recipe generation based on available ingredients
   - Key features: AI-generated recipes, ingredient-based suggestions
   - Tech stack: [To be specified]

### Navigation Requirements
- Minimalistic menu with hamburger icon or hidden sidebar (top-right corner)
- Three main links: Home (Landing), About, Projects
- No sub-menus or complex navigation structures
- Mobile-friendly dropdown menu for smaller screens
- Smooth transitions between pages using React Router/Next.js routing

## Technical Specifications

### Performance Requirements
- Fast load times with optimized assets
- Lazy loading for images where applicable
- Static export support for easy deployment (Vercel, GitHub Pages)
- No console errors on local development

### Browser Support
- Modern browsers (Chrome, Firefox, Safari)
- Fully responsive across mobile, tablet, and desktop

The codebase emphasizes simplicity and maintainability with a clear separation of concerns between pages, components, and utilities.