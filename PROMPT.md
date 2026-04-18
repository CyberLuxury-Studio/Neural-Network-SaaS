# AI Generation Prompt: Cyberpunk UI8 Landing Page

Use the prompt below to instruct an AI coding assistant (or yourself in a new session) to generate the complete, functioning prototype of the front page from scratch based on our project plan.

---

**Prompt:**

You are an expert Next.js Architect and Frontend Developer. Your task is to bootstrap and generate a production-ready "Cyberpunk UI8 Landing Page" prototype from scratch. This landing page is a waitlist/stealth page intended for sale on the UI8 marketplace.

**Tech Stack Constraints:**
- Framework: Next.js (App Router)
- Language: TypeScript (strict mode)
- Styling: Tailwind CSS
- Animation: Framer Motion
- 3D Integration: `@splinetool/react-spline` (for the hero scene)
- Icons: `lucide-react`
- Utilities: `clsx` and `tailwind-merge` (for class merging)

**Design System & Styling:**
Please set up the `tailwind.config.ts` with these exact theme extensions:
- **Colors**:
  - `obsidian`: `#0a0a0c`
  - `void`: `#050505`
  - `surface`: `#111116`
  - `neon-cyan`: `#00f3ff`
  - `neon-pink`: `#ff003c`
  - `neon-purple`: `#bd00ff`
  - `text-muted`: `#8a8a93`
- **Fonts**: Configure Next.js Google Fonts (`next/font/google`) in the root layout. Use "Space Grotesk" for headings and "Inter" for body.
- **Effects**: Heavy use of glassmorphism (`bg-surface backdrop-blur-md`), stark white/cyan glowing box shadows on hovers, and high-contrast typography.

**Component Architecture (Atomic Design):**
Before building the sections, create these reusable UI components in `src/components/ui/`:
1. `CyberButton.tsx`: Takes a `variant` ('primary' | 'ghost'). Uses `framer-motion` for a subtle scale on hover/tap. The primary variant should have a glowing `neon-cyan` border.
2. `WaitlistInput.tsx`: An email input. Background should be dark. On focus, the bottom border glows `neon-pink`. The placeholder text should look like a terminal: `> enter your email_`.
3. `NeonCard.tsx`: A standard glassmorphic container with a subtle gradient border and `bg-surface` inner background.
4. `CyberGlitchText.tsx`: A title component that briefly displays an RGB split or color shift animation on mount using Framer Motion.

**Page Structure (Build in `src/app/page.tsx`):**
Construct the main landing page using the following sections (place them in `src/components/sections/`):

1. **HeroSection**:
   - Layout: `min-h-screen`, dark `bg-obsidian`.
   - Left side: `CyberGlitchText` reading "ENTER THE NEXT ERA". Subtitle: "Join the stealth beta. Limited access." Below it, the `WaitlistInput`.
   - Right side: Implement lazy loading for the Spline 3D Scene (`@splinetool/react-spline`). Use a placeholder URL (e.g., `"https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"`) and include a `<SplineFallback />` component that shows a glowing CSS orb while loading.
   - Animation: Staggered fade-up for text elements.

2. **FeaturesSection**:
   - Layout: Grid (`grid-cols-1 md:grid-cols-3`). Use `container mx-auto py-24`.
   - Content: Create 3 feature blocks (e.g., "Quantum Routing", "Neural Uplink", "Zero-Trust Protocol") using the `NeonCard` component and icons from `lucide-react`.
   - Animation: Wrap the grid in a stagger container (`framer-motion`), making the cards fade up sequentially when scrolled into view.

3. **PricingSection**:
   - Layout: 3 columns.
   - Content: 3 tiers ("Hacker", "Cyber", "God-Mode").
   - Styling: The middle "Cyber" tier should be visually distinct with a continuous `neon-purple` to `neon-cyan` gradient border and a `CyberButton` call-to-action. On hover, all cards should slightly lift up.

4. **CtaSection**:
   - Layout: Centered, max width 3xl.
   - Background: Apply a subtle CSS grid pattern.
   - Content: A massive, bold prompt: "Ready to upload your consciousness?" accompanied by a repeated `WaitlistInput` and a glowing radial background pulse.

5. **Footer**:
   - Simple, minimal flex row with a top border (`border-white/10`). Includes fake links to docs, Twitter/X, and Github.

**Execution Order:**
1. Generate the `tailwind.config.ts` and `layout.tsx` (for fonts and global styles).
2. Generate the reusable UI components (`CyberButton`, `WaitlistInput`, `NeonCard`, `CyberGlitchText`).
3. Generate the centralized Framer Motion variants file (`src/lib/motion.ts`).
4. Generate the 5 sections.
5. Assemble them all in `src/app/page.tsx`.

Please output the complete, valid code for each file, ensuring all imports are correct and TypeScript types are strict. Do not use any `any` types. Focus heavily on layout precision and macro-whitespace (`py-24`, `gap-8`) to maintain the "Cyber-Luxury" aesthetic.