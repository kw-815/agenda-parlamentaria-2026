# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS, no build step, deployed to GitHub Pages. Chosen deliberately over the Next.js stack used by sibling projects (asamblea-ec, gabinete-ec) because this report has no live data source (no Notion sync, no team editing) — it is written once per edition from a source document and only needs to be fast to build and trivial to host.

## Users

Primary: teams inside Keyword's corporate clients responsible for public affairs, legal, or compliance, who monitor which pending legislation could affect their industry or company. Read as a complete document, not a lookup tool — the client is expected to go through the whole agenda, not search for one specific bill. They may still want to jump between ejes or scan just the ones relevant to their sector after a first full read.

## Product Purpose

An interactive, shareable-by-link version of Keyword's Agenda Parlamentaria report — previously a static one-page PDF infographic — that presents the bills the Ecuadorian National Assembly plans to prioritize in a given legislative period, organized by strategic "eje" (axis), with light navigation/filtering by eje. Current edition: **Agenda Parlamentaria 2026-2027** (a two-year legislative period, not a single year — title and framing updated 2026-08-13 to match the real source document).

## Positioning

Keyword already produces this as a static PDF once a year. The interactive version's differentiator is a more comfortable, navigable reading experience (jump between ejes, filter to a sector of interest) without adding interpretation Keyword doesn't already provide in the PDF — it is the same trusted institutional bulletin, not a new analysis product.

## Operating Context

- Published as a single static page (`index.html`) at a GitHub Pages URL, shared as a link with clients — no login, no app shell.
- Content originates from a source document (PDF or Markdown) that Keyword's team supplies once per edition; building the page from that document is a one-time adaptation, not an ongoing data pipeline.
- Visual system is inherited, not invented: shares tokens and components with Keyword's other micrositios (ace2040, pnsi-2025-2029, asamblea-ec, gabinete-ec) — indigo field, DM Sans, glass cards, chip-filter pattern from asamblea-ec's bloque-chip, and large floating monoline icons from ace2040's icon library (`tools/icons.py`) as the "dynamism" device inherited from the original reference PDF.

## Capabilities and Constraints

- Exclusive (single-select) filter chips, one per eje — filters which whole eje section is visible; clicking a different chip switches to it directly instead of accumulating (fixed 2026-08-13: chips were originally independent toggles, which let two stay active at once and made it look like filtering was "stuck"). No free-text search: removed deliberately (2026-08-13) because the audience reads the full agenda rather than looking up one bill, so search added a control without a real use case. The home-nav index links carry no "01/02/03" numbering (removed 2026-08-13 as unnecessary decoration).
- **Filter chips redesigned 2026-08-13, final version:** two-part cover cards closely following ace2040's `.obj-cover` (a reference the user pointed to directly and asked to be studied in detail) — a solid eje-color block on top (number, title, "Ver eje →" CTA pill, real project count) and the eje's photo below, smaller, with a subtle uniform tint. Sized to match ace2040's actual card proportions (~280px, not stretched to fill the row) after the user flagged the first full-width attempt as oversized with "espacios blancos" at the edges — the real cause was an unreset native `<button>` background, fixed alongside the resize. Two earlier attempts were tried and rejected same day: a tiny corner thumbnail ("diminuta en una esquina"), then a full-photo-background tile with no color block ("muy invasiva"). Click filters + smooth-scrolls to the eje section below, adapted from ace2040's per-pilar page links to stay single-page.
- **Sticky section-index nav bar removed 2026-08-13** (`.home-nav`, the secondary sticky bar under the header with text links to each section) — user called it an unused "immobilized filter"; the photo-cover filter cards already cover that navigation need with more visual context.
- Single-page scroll (confirmed over a multi-page-per-eje structure like ace2040's pilar pages) — content per eje is short lists of bill names, not long enough to justify separate pages.
- Long bill lists render as a multi-column masonry (`columns`, not `display:grid` — grid forces uneven row-matched gaps when bill-name lengths vary a lot), always shown in full — the "Mostrar N más" collapse-at-12 toggle was removed 2026-08-13 at the user's request, now that the filter cards already bring the reader to a section with intent to read it in full.
- **Eje sections hidden until filtered, 2026-08-13 (behavior change):** the three eje sections now start `display:none` and only the one matching the active filter card is shown — before, all three were visible by default and the chip only reordered/filtered among already-visible sections. The "Ver todos los ejes" (formerly "Limpiar filtros") button was removed entirely since there is no longer a "show all at once" state to return to.
- **Closing quote (`.closing-quote`) added 2026-08-13:** a single attributed quote from Mishel Mancheno (Presidenta de la Asamblea Nacional) closes the report, after "A considerar" and before the footer — adapts ace2040's `.voice` component (circular photo, quote, name/role) for one protagonist voice instead of a 3-up grid. Photo: `IMAGENES/MM.jpg`.
- **Draft banner removed 2026-08-13:** the orange `.wip-banner` ("BASE DE DISEÑO EN CONSTRUCCIÓN...") that had been present since the project's first version is gone — the user confirmed the report is now in final review, not a draft.
- No backend, no CMS, no auth. Content is hand-authored HTML per edition.
- Undecided: whether future editions get their own dated page/URL or overwrite this one — not needed until a second edition exists.
- Eje 1 splits its bill list into two labeled groups — "En análisis" and "Nueva propuesta" — instead of mixing them with just a color dot (the 2021-2022 reference PDF mixed them with only a color legend; user flagged that as a real usability flaw in the original, not something to replicate). Ejes 2 and 3 render as a single group: user confirmed 2026-08-13 that 100% of their bills are "en análisis" and none are new, so no split is needed there — a single `.status-tag--analisis` pill labels the whole list instead of a per-bill split.
- Closing section `#a-considerar` ("A considerar") added 2026-08-13: reuses the same `.intro` card component as the opening intro (intentional bookend), with a user-supplied paragraph about fiscalización, participación ciudadana, and the Presidenta's call to different sectors to contribute observations.
- **Objetivos específicos restored 2026-08-13**, resolving the open question raised by the design critique: each eje's "objetivo general" paragraph is now followed by 2 short text pills (`.eje__especificos`) condensing that eje's "objetivos específicos" from the source document — chosen over restoring them as prose because the user's separate ask (below) was specifically to reduce, not add to, the wall-of-text feeling.

## Brand Commitments

- Keyword brand: wordmark logo (`img/logo-keyword-white.svg`), footer copy "©Todos los derechos reservados" + `Contacto: info@keyword.com.ec`, reused verbatim from ace2040/asamblea-ec/gabinete-ec.
- Visual system: indigo `#1E2470` field, DM Sans typeface, glass cards, one accent color per eje — this is Keyword's established "Plantilla base para micrositios v2.0", not open for reinvention; refinement stays inside that language rather than replacing it.
- Editorial voice: strictly descriptive/neutral, matching official Assembly language — reports what the Assembly has stated (objectives, bill titles, strategic actions verbatim from the source document), no Keyword opinion or interpretation layered in.

## Evidence on Hand

- **Real source document (current, authoritative):** `RECURSOS/AGENDA_PARLAMENTARIA_2026_2027.md` — the actual official "Agenda Parlamentaria 2026-2027, Anexo Único" of the Asamblea Nacional, signed by Mishel Mancheno Dávila (Presidenta). Supplied by the user 2026-08-13. Contains: opening statement, "I. Introducción", "II. Ejes de la Agenda Legislativa" (3 ejes, each with objetivo general + objetivos específicos + numbered bill list), "III. Fiscalización", "IV. Fortalecimiento Institucional" (2 sub-points with acciones estratégicas), "V. Diplomacia Parlamentaria y Cooperación Internacional", "VI. Modernización de los Mecanismos de Participación Ciudadana" (3 sub-points), "VII. Metodología de Calificación de Proyectos de Ley y Procesos de Fiscalización".
- **User's explicit content scope, updated 2026-08-13:** include all 3 ejes in full; from section IV include only sub-points 1 and 2 with their acciones estratégicas. **Section VI (Modernización de los Mecanismos de Participación Ciudadana) was included in an earlier pass, then removed entirely** the same day at the user's request ("no lo ven necesario") — do not re-add without asking. **Still explicitly excluded:** section III (Fiscalización), section V (Diplomacia Parlamentaria), section VII (Metodología de Calificación) — not requested, do not add without asking.
- **Per-bill status** ("en análisis" vs "nueva propuesta", a distinction the 2021-2022 PDF also had but only via an unlabeled color dot — now split into two clearly labeled groups per eje instead, per user feedback that mixing them was a real usability flaw): user supplied this eje-by-eje in chat, starting with eje 1 (received and applied 2026-08-13: 6 "en análisis", 1 "nueva propuesta"). Ejes 2 and 3 confirmed 2026-08-13 as 100% "en análisis" with no new bills — resolved, no further status data expected unless the user says otherwise.
- **"Orgánica"/"Orgánico" removed from every bill title** (explicit user rule, 2026-08-13: "nunca usamos eso") — applies even though it is a real Ecuadorian legal classification (ley orgánica vs. ordinaria); user confirmed this simplification is intentional and should stay.
- **Photography, `hero.jpg` and `eje-1/2/3.jpg`**, used on the hero background and each eje's filter-chip cover tile (see DESIGN.md "Chips" and "Fotos por eje"). `hero.jpg` is a real photo (hemiciclo de la Asamblea). **`eje-1/2/3.jpg` were replaced 2026-08-13 with AI-generated images** the user made themselves ("no encontraba nada que represente bien" el contenido) — a deliberate, informed exception to the "real photography only" rule that governed the project until this point; the user was told two of the three have garbled/illegible text baked into the image (a known AI-generation artifact) and chose to proceed anyway. Do not assume "real photos only" applies to future edits to these three files without confirming with the user. A first placement of eje photos as small corner thumbnails inside each `.eje` card was tried and reverted the same day after the user saw it live and rejected it as "diminuta en una esquina."
- Superseded reference PDF: `REFERENCIAS/2021 06 21 Presentación Agenda Legislativa 2021-2022.pdf` — a prior edition, used earlier in this project only for tone/structure/density calibration (see [[project memory]] for what was learned from it: light background with per-eje color panels, illustrated icons, a person illustration, bancada logos — none of which carried over 1:1 into the final direction, which stayed dark índigo per user's explicit A/B comparison choice). Not the content source anymore.
- Visual precedent repos (Keyword's own, inspected via `gh api`): `ace2040`, `pnsi-2025-2029` (static, already on GitHub Pages, same v2.0 system), `asamblea-ec`, `gabinete-ec` (Next.js/Vercel, same tokens, plus the chip-filter pattern this project's toolbar is based on).

## Product Principles

1. Reuse Keyword's existing visual system exactly — this is a sibling of ace2040/pnsi-2025-2029/asamblea-ec, not a new brand exploration.
2. Optimize for a complete, comfortable read with light navigation aids (eje index, eje filter chips) — not a lookup/search tool. The audience reads the whole agenda; interactivity should help them move through it, not substitute for reading it.
3. Content fidelity over embellishment — text, structure, and scope come from the official Assembly source document; the interactive layer adds navigation, not new claims. Never fabricate data not in the source (e.g. per-bill status is left unlabeled/pending rather than guessed when not yet supplied).
4. Ship as a single static page with zero backend — matches the one-edition-per-year lifecycle and keeps hosting on GitHub Pages trivial.

## Accessibility & Inclusion

No client-specific requirement established. Follow standard web accessibility practice (focus states, `prefers-reduced-motion`, color contrast) already present in the inherited Keyword component system.
