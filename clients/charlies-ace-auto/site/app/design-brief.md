# design brief: charlie's ace auto & body service

status: spec preview for aipple outreach. noindex everywhere + concept-preview strip until the owner approves.

## design read
neighbors in a bad week (a dent, a warning light, a crash) who want a shop that is skilled, plain-spoken and close by. register: calm, precise, human. premium without pretension.

## concept spine
"the art of getting you back": the page is a repair told in four acts (problem, inspection, work, return). every section after the film is a stage of getting the driver back on the road. narrative spine pick: journey/waypoints.

## delivery tier
cinema (scroll-scrub film as the tier-1 mechanic, transform-only reveals elsewhere).

## Animation mode: animated-website
- Journey shape: single-shot (one subject, one bay, one continuous move; nothing here travels between worlds).
- Journey (4 chapters over one ~15s film):
  1. act i, the problem (0-25%): ordinary unbadged graphite sedan front three-quarter, dented front fender, cracked headlamp, emerging from a dark bay. h1 "The art of getting you back." / sub "Expert auto repair and bodywork in Arlington Heights, Illinois." / ctas: request an estimate, call.
  2. act ii, the inspection (25-50%): a work-light beam slides slowly along the damaged panel. "First, we look closely."
  3. act iii, the work (50-75%): the panel line straightens, fresh finish appears under the moving light. "Then we do the work."
  4. act iv, the return (75-100%): restored car, clean reflection line, soft ivory light from an opening bay door. "Back to your week."
- World grammar: one dim, clean workshop bay, charcoal concrete, single moving cool-white work light plus a soft warm ivory key from frame right at the end, 35mm lens, slow constant clockwise dolly arc around the front three-quarter, locked exposure, no cuts, no text, no logos, no people visible.
- Mobile framing: car kept center-safe, chapters sit bottom-left over a ground gradient; 720p mobile encode.
- How it enacts the spine: scroll position = repair stage. scrolling back un-repairs the car, which makes the promise physical.
- Honesty: the film is captioned on-page "Illustrative film. Not a customer vehicle."
- Delivery budget: <=32 MiB desktop, <=16 MiB mobile.

## combinatorial pick
- theme paradigm: deep dark, twist = one material switch: brushed-steel hairlines + ivory type instead of white.
- background character: full-bleed cinematic imagery, solid graphite between.
- typography character: expressive display grotesk.
- hero architecture: massive image-first with restrained text (the film).
- section system: asymmetric premium flow.
- signature components: hover-accordion slices (pathways), layered image crop frames (work), vertical rhythm lines (journey), oversized metrics-free numerals (process steps).
- second-read moment: one oversized numeral as structure (process 01-05).

## locked palette
- ground #131416 (graphite), raised #1C1E21, hairline #2C2F33
- ink #ECE7DD (warm ivory), muted #9AA0A6 (steel)
- accent #C62F2F (signal red, sat ~62%), reserved for the primary action and the moment of return. nothing else is red.
- defense: a car shop's real material world is graphite floors, steel and a red tail lamp. no orange (banned family), no brass, no neon.

## locked type
- display: Cabinet Grotesk 800/700, self-hosted woff2, tracking -0.04em.
- ui/body: Inter Tight 400/500/600 (google fonts).
- no serif.

## section plan (home)
1. film + 4 chapters (cinematic full-bleed)
2. two repair pathways (hover-accordion diptych, photo panels) 
3. the work speaks (layered crop frames + before/after slider, captioned illustration)
4. trust (split: large statement + review-source links + "how we work" list, no counters)
5. meet charlie (wide editorial image band with offset copy)
6. what happens when you call (vertical rhythm line, 5 oversized numerals)
7. find us (address block + map link + call, color-blocked)
8. final statement "Let's get you back out there." (centered typographic behemoth)
eyebrow budget: ceil(8/3)=3. used: film act kicker (1), pathways (1), process (1).

## pages
/ , /body-collision, /mechanical, /about, /contact (estimate form), /our-work (noindex, out of nav until real photos), /inbox (password gated).

## asset plan
storyboard (1), section boards (8, refs only), film (1, seedance 2.0 15s 1080p silent), pathway-body photo, pathway-mechanical photo, before/after pair (same door panel, aligned via edit reference), craft macros x3 (sanding block on panel, brake caliper + rotor, diagnostic scan tool in hand), bay wide, hands at work, red tail-lamp macro, monogram mark + favicon set, og/cover.
no faces presented as charlie or staff. no customer cars. no supercars. no text in images.

## cta inventory (one identity each)
- Request an Estimate (primary): solid red slab, square corners, arrow slides right on hover, 1px press.
- Call (847) 228-6603: ivory outline with phone glyph, underline wipe on hover.
- Explore Body & Collision / Explore Mechanical Services: panel-wide hit area, label + long hairline that extends on hover.
- Get Directions: inline underlined link with diagonal arrow.
- Send request (form submit): full-width red bar with progress state.
- Mobile sticky bar: two halves, call (graphite) | estimate (red), safe-area padded.
- Final CTA pair reuses Request an Estimate + Call labels (one label per intent site-wide).

## corner language
all-sharp (0 radius). hairline borders. no pills.
