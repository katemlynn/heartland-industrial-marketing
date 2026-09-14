# Heartland Industrial Marketing — Brand & Site Guidelines

## Who we are
Heartland Industrial Marketing is a marketing agency built specifically for
metals manufacturers and material suppliers. We do lead generation, SEO,
paid ads, brand/visual identity, signage, and full-service marketing for
owner-operated metals companies.

Audience: owners of metals manufacturing / material supply businesses,
typically $1M–$20M+ revenue, who are tired of generalist agencies that
don't understand their industry.

## Brand colors (exact, sampled from logo)
- Heartland Black: `#15151A` — primary text, dark section backgrounds
- Heartland Red: `#D93013` — accent color, CTAs, dividers, highlights
- White / off-white: `#FFFFFF` / `#FAFAFA` — light section backgrounds
- Use black + white as the dominant palette. Red is a deliberate accent —
  use it for one focal element per section (a CTA button, a rule line, a
  highlighted word), not as a background color everywhere.

## Typography
- Headlines: bold, condensed/industrial sans (e.g. Oswald, Bebas Neue, or
  similar) — echoes the blocky slab lettering in the logo wordmark.
- Body copy: clean, highly legible sans (e.g. Inter, Söhne, system-ui).
  Don't run the industrial display font at body sizes — it hurts
  readability.
- Avoid script or rounded/friendly typefaces anywhere — the brand reads as
  direct and industrial, not soft.

## Recurring motif
- Thin horizontal red rule lines flanking short all-caps labels/kickers
  (e.g. `— INDUSTRIAL MARKETING —` in the logo itself). Reuse this as a
  section-label pattern site-wide: a small red-accented eyebrow above each
  major heading.

## Logo usage
Source files live in `public/` (served from site root) and in
`heartland_correct_final_logo_package/` (the original deliverables — PDF,
EPS, and print-resolution exports):
- `/heartland-logo-transparent.png` — full-color lockup (black wordmark,
  red bar), transparent background. Use on white/light backgrounds.
- `/heartland-logo-white-bg.png` — same lockup on a solid white background,
  fallback where transparency isn't supported.
- `/heartland-logo.svg` — same artwork wrapped as SVG. Note: this is a
  container export with the raster image embedded, not a redrawn editable
  vector — it scales like the PNGs, not infinitely crisp. A designer would
  need to retrace it in Illustrator/Figma for a true vector.
- `/heartland-icon-white-bg.png` — the "H" mark alone, cropped, on white.
- `/heartland-logo-white.png` — reversed (white wordmark, red bar) for use
  on dark backgrounds — this is what the site header/footer use today, on
  `heartland-black` section backgrounds.
- Keep clear space around the logo at least the height of the "H" mark.
  Never recolor it, stretch it, or place it on a busy photo background
  without a solid-color safe zone behind it.

## Tone of voice
- Direct, confident, no fluff. Speaks the metals/manufacturing industry's
  language — GCs, quotes, red iron, panels, spec, lead time.
- Pain-point led: name a real problem the reader has ("your ads aren't
  paying back," "you sell the materials, someone else gets the credit")
  before pitching the solution.
- Not corporate-generic. Avoid words like "leverage," "synergy," "solutions
  provider." Say what it does.

## Existing copy to preserve
The current site's copy is strong and should be carried over largely as-is
— only the visual layer needs a rebuild:
- Hero pain-point headline and subhead
- The three "sound familiar" pain-point cards
- The "why Heartland" vs. generalist agency / in-house hire / cheap
  freelancer comparison
- Testimonials (keep verbatim, attribute to first name + last initial as
  currently shown)
- FAQ content
- "Free audit" lead-capture flow and its copy

## Visual direction (what's changing)
The current site is a stacked wall of text sections with no large imagery
and a generic template rhythm. Rebuild each section with:
- A full-bleed hero with a strong industrial photo/visual behind the
  headline (steel fabrication, plant floor, red iron) rather than a plain
  background
- Varied section layouts instead of repeating heading → paragraph blocks
- More visual weight on testimonials (avoid plain initials-in-a-circle if
  possible)
- Generous whitespace and confident type scale — let the bold headline
  type and red accent carry the page, not dense paragraphs

## Site structure (keep from current site)
- Home (rebuild visually, keep copy)
- Services
- For manufacturing (industry landing page)
- Blog
- FAQ (section or page)
- Free audit lead form

## Technical notes
- Stack: Next.js + Tailwind CSS
- Reuse Tailwind config to register the two brand colors as named tokens
  (`heartland-black`, `heartland-red`) instead of hardcoding hex values
  throughout components
- Keep the existing lead-capture form's field set and validation behavior
  (name, email, phone, revenue range) — just restyle it
