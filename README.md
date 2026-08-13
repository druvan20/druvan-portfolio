# Druvan Gurukar — Agent Protocol Portfolio

React + Vite + TypeScript personal portfolio with a Full Agent Protocol theme. The hero is a **3D operations room** built with `three`, `@react-three/fiber`, and `@react-three/drei`, featuring a procedural hologram agent, mouse-reactive camera, and animated mission dossier overlays. Falls back to stylized PNG portraits when WebGL or motion is not available.

## Docs
- [PRD](docs/PRD.md)
- [Design](docs/DESIGN.md)
- [Tech stack](docs/TECH_STACK.md)

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Deploy (GitHub Pages — free)
This repo includes `.github/workflows/deploy-pages.yml`.

1. Push to `main` (already set up).
2. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Open the **Actions** tab → wait for **Deploy GitHub Pages** to finish (green).
4. Site URL: https://druvan20.github.io/druvan-portfolio/

Vite `base` is set to `/druvan-portfolio/` for this project Pages URL.

## Deploy (Netlify — also free)
1. In [Netlify](https://app.netlify.com): **Add new site → Import from Git** → select this repo.
2. Build settings (from `netlify.toml`): `npm run build` → publish `dist`.
3. If using Netlify at the site root (`*.netlify.app`), change `base` in `vite.config.ts` back to `'/'` (or use an env-based base).

## Contact form
The Deploy section includes an interactive **MSG UPLINK** form. Submissions go to `druvangurukar20@gmail.com` via [FormSubmit](https://formsubmit.co).

**After Netlify deploy:** yes, it works on production — FormSubmit is a third-party HTTPS API, so the static Netlify site can call it from the browser. Steps:
1. Deploy to Netlify as usual.
2. Submit the form once from the live URL.
3. Confirm the **activation email** FormSubmit sends to your inbox (one-time).
4. After that, messages land in `druvangurukar20@gmail.com`.

If FormSubmit is blocked, the form falls back to opening the mail client.

## Agent art
Ten original stylized agents in `public/agents/` (ORBIT → ATELIER) auto-rotate every 5–15s in the 3D hero. Themes nod to Valorant *roles* (duelist/controller/initiator/sentinel looks) without using official characters. Female archetypes were mostly skipped per preference.

## 3D scene
- `src/components/three/SceneCanvas.tsx` — lazy R3F root, capped DPR, off-screen pause.
- `src/components/three/OperationsRoom.tsx` — grid floor, wall lines, holographic panels, particles.
- `src/components/three/HologramAgent.tsx` — procedural hologram with scanline + Fresnel shader.
- Agent selection in the hero swaps the hologram accent/glow/animation profile from `src/data/site.ts`.
