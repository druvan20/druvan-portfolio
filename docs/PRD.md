# PRD — Druvan Portfolio (Agent Protocol)

## 1. Overview
A single-page personal portfolio for **Druvan Gurukar**, Trainee Engineer at Hashedin by Deloitte, designed to showcase GenAI/agentic systems and full-stack engineering skills through a memorable Valorant-inspired “Agent Protocol” visual language.

## 2. Goals
- Make Druvan memorable to recruiters and peer engineers within the first viewport.
- Present five real projects with accurate stacks, descriptions, and GitHub links.
- Signal strength in Agentic AI, backend systems, and modern full-stack work.
- Stay interview-safe: professional copy, no unofficial game IP (logos/assets).

## 3. Audience
- Primary: recruiters / hiring managers screening AI/ML and full-stack candidates.
- Secondary: engineers evaluating technical depth and project quality.

## 4. Success criteria
- First viewport reads as one composition: brand, tagline, one-liner, CTAs, agent portrait.
- All five projects visible with titles, descriptions, stacks, highlights, and live GitHub links.
- Contact paths work: GitHub, LinkedIn, email; Resume uses `#` placeholder until PDF is provided.
- Site builds cleanly (`npm run build`) and is responsive on mobile and desktop.
- Theme is distinctly “Agent Protocol” without copying Valorant brand assets.

## 5. Information architecture (sections)
| Codenames | Section | Purpose |
|-----------|---------|---------|
| PROTOCOL | Hero | Name, role, CTAs, agent art |
| INTEL | About | Bio + positioning |
| OPS | Experience | Hashedin role |
| LOADOUT | Skills | Grouped tech skills |
| MISSIONS | Projects | Five portfolio projects |
| TRAINING | Education | Academic history |
| DEPLOY | Contact | Call to action + links |

## 6. Content inventory

### Identity
- Name: Druvan Gurukar
- Tagline: TRAINEE ENGINEER \| AI/ML \| FULL-STACK \| GEN-AI
- One-liner: Building intelligent systems at the intersection of AI and scalable software.
- Email: druvangurukar20@gmail.com
- GitHub: https://github.com/druvan20
- LinkedIn: https://www.linkedin.com/in/druvan-gurukar/
- Resume: `#` placeholder

### Experience
- Hashedin by Deloitte — Trainee Engineer (SDE1)
- May 27, 2026 – Present \| Training Phase
- Bullets: full-stack + AI/ML tracks; Python/Java/Angular/GenAI; enterprise patterns (microservices, JWT, OWASP, OAuth)

### Education
- B.E. CSE (AI/ML) — Vidyavardhaka College of Engineering, Mysore — 9.5 CGPA — 2022–2026
- PUC (PCMB) — Marimallapa PU College — 80%
- SSLC — Marimallapa High School — 97%

### Projects (order)
1. ETL Migration Intelligence System (star)
2. AI Agent Factory — Document-to-Code Pipeline
3. FoodieHub — Food Delivery Backend Platform
4. Smartwatch Leaderboard System — REST API
5. Smartwatch Leaderboard UI — Angular 20

### Skills groups
GenAI & Agents · Java & Backend · Data Engineering · Frontend · Security & Auth · Others (.NET basics)

## 7. Functional requirements
- Smooth hash-anchor navigation between sections.
- Mobile protocol menu for small viewports.
- External links open in a new tab with `rel="noopener noreferrer"`.
- Project panels are interactive (hover/focus) and link to GitHub.
- Agent portrait asset used in hero (selected from generated variants).

## 8. Non-goals
- CMS, blog, or admin UI
- Backend / auth / analytics (optional later)
- Cloning Valorant logos, agents, or copyrighted art
- Multi-page routing beyond hash anchors

## 9. Acceptance checklist
- [ ] PRD, DESIGN, TECH_STACK docs present
- [ ] Three stylized Ghibli × Valorant agent portraits generated (OC, not face likeness); one used in hero
- [ ] All sections implemented with protocol codenames
- [ ] Five projects with correct GitHub URLs
- [ ] Contact links correct; resume `#`
- [ ] Desktop + mobile layout verified
- [ ] `npm run build` succeeds
- [ ] README documents run and GitHub Pages deploy
