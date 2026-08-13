# Design System — Agent Protocol

## 1. Design intent
A tactical, HUD-inspired portfolio: dark, sharp, memorable. Recruiter-readable copy sits inside a game-adjacent “protocol” frame. Inspired by Valorant’s operator aesthetic — original UI only, no game IP.

## 2. Color tokens
| Token | Value | Use |
|-------|-------|-----|
| `--void` | `#0A0E14` | Page base |
| `--navy` | `#111822` | Panels / elevated surfaces |
| `--navy-2` | `#1A2332` | Hover / secondary panels |
| `--accent` | `#FF4655` | Primary CTA, highlights, protocol marks |
| `--accent-dim` | `#C23A46` | Pressed / secondary accent |
| `--hud` | `#3DFFDC` | Sparse HUD lines / status (use sparingly) |
| `--text` | `#ECE8E1` | Primary text (Valorant-adjacent off-white) |
| `--muted` | `#8B939E` | Secondary text |
| `--line` | `rgba(236, 232, 225, 0.12)` | Hairline rules |
| `--glow` | `rgba(255, 70, 85, 0.35)` | Soft accent glow (restrained) |

Background is **not** flat: layered radial gradients (void → navy), subtle noise/grid, and faint scanlines.

## 3. Typography
| Role | Font | Notes |
|------|------|-------|
| Protocol / display | **Orbitron** | Section codes, brand wordmark, mission IDs |
| Body / UI | **Rajdhani** | Paragraphs, buttons, nav, chips |
| Mono (optional) | **Share Tech Mono** | Tiny HUD labels, timestamps |

Avoid Inter, Roboto, Arial, and system-ui as primary stacks.

Scale (approx):
- Brand: clamp(3rem, 10vw, 6.5rem)
- Section code: 0.75–0.9rem uppercase tracking
- H2: clamp(1.75rem, 3vw, 2.5rem)
- Body: 1.05–1.15rem / line-height 1.55

## 4. Section codenames
| Code | Section |
|------|---------|
| `PROTOCOL` | Hero |
| `INTEL` | About |
| `OPS` | Experience |
| `LOADOUT` | Skills |
| `MISSIONS` | Projects |
| `TRAINING` | Education |
| `DEPLOY` | Contact |

Each section header pattern: `[ CODE ]` + short title + thin accent underline or corner brackets.

## 5. Hero rules (first viewport)
The hero is a **3D operations room** with a readable HTML HUD overlay:
1. Wordmark `DRUVAN GN` typed in via terminal effect, dominating the frame
2. Protocol tagline directly under the name
3. One supporting sentence
4. CTA group: GitHub · LinkedIn · Resume
5. Agent roster (3 terminals) drives the hologram color and animation profile
6. HUD baseline strip reinforces the control-room feel

The 3D scene is **decorative** (`aria-hidden`). Every recruiter-critical string lives in semantic HTML so screen readers and search crawlers still receive it. Reduced-motion or missing WebGL falls back to the stylized PNG portraits.

## 6. Components
- **Nav:** fixed protocol bar; code links; mobile drawer/menu
- **CTA:** solid accent primary; ghost secondary with accent border
- **Mission panel:** interactive container for projects (border + hover shift OK — these are interaction surfaces)
- **Skill chips:** angular, minimal radius; accent on hover
- **No cards in hero**

## 7. Motion
1. **Protocol boot:** scanline sweep + terminal typewriter typing `PROTOCOL SELECT` then `DRUVAN GN`
2. **3D scene:** procedural hologram breathing, floor grid, drifting particles, mouse-reactive camera; paused when hero leaves the viewport
3. **HUD reveal:** section headers fade/slide in on scroll via `IntersectionObserver`
4. **Mission select:** panel border/glow shift, then opens an animated dossier dialog

Motion is disabled and replaced with the static portrait when `prefers-reduced-motion` is set or WebGL is unavailable.

## 8. Layout
- Max content width ~1120–1200px for text columns
- Hero and contact can go full-bleed
- Desktop: hero split text | portrait
- Mobile: portrait as atmospheric top/background; text stacked; protocol menu

## 9. Imagery
- Agent portrait variants in `public/agents/`
- **Stylized original character only** — photo is a loose cue (hair / glasses / mustache vibe), not a face likeness
- Style: Studio Ghibli painterly anime × Valorant agent tactical energy (navy gear, `#FF4655` accents, soft rim light)

## 10. Anti-patterns (do not ship)
- Purple-on-white / purple–indigo gradient themes
- Warm cream + terracotta serif look
- Broadsheet newspaper columns
- Flat single-color background with no atmosphere
- Emoji decoration
- Detached floating badges overlaid on hero media
