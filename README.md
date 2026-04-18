# NEON ARISTOCRAT - Cyber-Luxury Landing Page

Welcome to **Neon Aristocrat**, a premium "Cyber-Luxury" template designed exclusively for high-end SaaS, Stealth Web3, or Waitlist products.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom 'Aether Protocol' Theme)
- **Animation:** Framer Motion (Scroll-triggers & entrance logic)
- **3D:** `@splinetool/runtime` (Lazy loaded for peak LCP performance)
- **Icons:** `lucide-react`

## Prerequisites
Ensure you have `Node.js 18+` installed on your machine.

## Quick Start

1. **Install dependencies**
   `npm install`

2. **Run the development server**
   `npm run start` (or your preferred dev command)

3. Open `http://localhost:3000` in your browser.

## Customization Guide

### 1. The Design System
Colors are entirely controlled in `tailwind.config.ts`. The design relies on the **Aether Protocol** aesthetic:
- **Surface Tonal Layers:** `surface-container-lowest` -> `surface-container-highest` creates depth without relying heavily on harsh borders.
- **Neon Accents:** `primary-container` (Cyan), `secondary` (Pink/Purple), and `tertiary` (White/Silver) control all CTA elements and glows.

### 2. Swapping the 3D Spline Scene
To add your own 3D scene, open `src/components/sections/HeroSection.tsx`. Find the `SplineScene` component and simply replace the URL prop with your exported `.splinecode` URL.

### 3. Using the Atomic UI Kit
All reusable components (Buttons, Inputs, Glassmorphic Cards) are neatly organized in `src/components/ui`. You can easily extract these components to construct other pages for your web app.

---
*Created for UI8. Enjoy building the future.*
