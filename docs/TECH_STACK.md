# Tech Stack — Agent Protocol Portfolio

## 1. Choice
**React + Vite + TypeScript** — lightweight SPA, fast local DX, simple static deploy (GitHub Pages). No backend, no UI kit bloat.

| Layer | Choice | Why |
|-------|--------|-----|
| Framework | React 19 | Component model for sections |
| Bundler | Vite | Fast HMR, static build |
| Language | TypeScript | Typed content data |
| Styling | Global CSS + CSS modules | Full control over Agent Protocol look |
| 3D runtime | `three`, `@react-three/fiber`, `@react-three/drei` | Procedural operations-room hero |
| Fonts | Google Fonts (Orbitron, Rajdhani, Share Tech Mono) | Expressive, non-default stack |
| Routing | Single page + hash anchors | No React Router needed |
| Hosting | GitHub Pages (static `dist/`) | Free, matches GitHub profile |

## 2. Repository structure
```
f:\p2\
  docs/
    PRD.md
    DESIGN.md
    TECH_STACK.md
  public/
    agents/          # generated agent portraits
    vite.svg
  src/
    assets/
    components/      # Nav, Hero, About, Experience, Skills, Projects, Education, Contact, Footer
    data/            # projects.ts, skills.ts, education.ts, experience.ts, links.ts
    styles/          # tokens.css, global.css, animations.css
    App.tsx
    main.tsx
    vite-env.d.ts
  index.html
  package.json
  tsconfig.json
  vite.config.ts
  README.md
```

## 3. Data layer
Content lives in typed modules under `src/data/` so copy edits do not require hunting through JSX. External URLs and resume placeholder (`#`) live in `links.ts`.

## 4. Assets pipeline
- Place portraits in `public/agents/` → referenced as `/agents/agent-01.png` etc.
- Selected hero asset configured once in Hero (or `links.ts` / `site.ts`).

## 5. Scripts
```bash
npm install
npm run dev      # local
npm run build    # output: dist/
npm run preview  # preview production build
```

## 6. GitHub Pages deploy
1. Set `base` in `vite.config.ts` if deploying to `https://<user>.github.io/<repo>/` (e.g. `base: '/<repo>/'`). For user site (`druvan20.github.io`) use `base: '/'`.
2. Build: `npm run build`
3. Publish `dist/` via GitHub Actions (`peaceiris/actions-gh-pages` or `actions/upload-pages-artifact`) or manual upload to `gh-pages` branch.

## 7. 3D architecture
- Hero canvas lives under `src/components/three/`:
  - `SceneCanvas.tsx` — lazy-loaded R3F root; capped DPR (max 1.6); `frameloop="demand"` when hero is off-screen; camera rig with mouse parallax.
  - `OperationsRoom.tsx` — floor grid, back wall lines, holographic panels, drifting particles.
  - `HologramAgent.tsx` — procedural torso/head/limbs with a custom scanline + Fresnel shader; no external character models.
- `useWebGL` / `useReducedMotion` (`src/hooks/useWebGL.ts`) gate the canvas; unsupported / reduced-motion clients see the stylized PNG portraits instead.
- Three.js and R3F/drei are split into their own build chunks via `vite.config.ts` `manualChunks` to keep initial JS light.

## 8. Out of scope (tech)
- SSR / Next.js
- CMS, database, API routes
- Auth, analytics SDKs (add later if needed)
- Ripped or licensed Valorant character/model assets — the hologram is 100% procedural
