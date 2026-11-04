# competitor intelligence matrix: charlie's ace auto & body service

client: charlie's ace auto & body service, arlington heights IL (mechanical + collision)
concept: "THE ART OF GETTING YOU BACK" / charcoal, warm ivory, steel, one signal red / editorial grotesk / scroll-driven "rebuild" film
studied: 2026-10-23, 7 sites, read-only, nothing submitted, nobody contacted

## method and honesty notes (read first)

- **no rendered screenshots.** the browser-use tool could not start (no chromium running in the sandbox: "chrome-not-running"). so there are no 1440px or 390px captures. everything below comes from WebFetch summaries plus raw HTML/CSS pulled with curl (markup, class names, css rules, font declarations, script libraries, form field names).
- so **visual axes (originality, photography/art direction, interaction) are scored from markup, copy and image filenames, not from eyeballing.** treat those scores as medium to low confidence. mobile scores come from css media rules, viewport and class names, not from a phone.
- mike's auto body north returned empty to WebFetch on every page. i recovered the homepage, services, gallery, process post from curl with a browser user-agent. its /contact-us/ page returned 403 to the first request and a shell to the second, so its real form fields were not observable.
- xtreme auto collision rate-limited curl (HTTP 429), so its facts are WebFetch-only. its estimate and scheduling forms live inside a third-party widget (Carwise), so field-level detail is not observable.
- abe automotive's /book-now page is a widget that did not render in fetch, so its booking fields are unobserved.
- competitor phrasing is paraphrased. a few short quoted words only where needed to identify a thing.
- labels used below: **OBSERVED** = seen in fetched content/markup. **INTERPRETATION** = my read. **BORROW** and **AVOID** = design decisions for charlie's.

## 1. score table (1 to 10, higher is better)

| site | visual originality | type + layout | photo + art direction | interaction | service clarity | trust + proof | conversion flow | mobile usability | **avg** |
|---|---|---|---|---|---|---|---|---|---|
| 1 electrified garage | 9 | 9 | 7 | 8 | 9 | 7 | 6 | 8 | **7.9** |
| 2 mike's auto body north | 6 | 6 | 8 | 5 | 7 | 7 | 4 | 5 | **6.0** |
| 3 alpha collision | 4 | 5 | 4 | 4 | 7 | 6 | 7 | 5 | **5.3** |
| 4 xtreme auto collision | 4 | 5 | 6 | 4 | 7 | 8 | 8 | 6 | **6.0** |
| 5 abe automotive | 6 | 6 | 8 | 4 | 6 | 6 | 4 | 6 | **5.8** |
| 6 protek bathgate | 4 | 4 | 4 | 4 | 6 | 7 | 8 | 5 | **5.3** |
| 7 gmw perth | 5 | 5 | 5 | 5 | 8 | 6 | 6 | 7 | **5.9** |
| field average | 5.4 | 5.7 | 6.0 | 4.9 | 7.1 | 6.7 | 6.1 | 6.0 | **6.0** |

what the table says: the field is weak on interaction (4.9) and strong-ish on service clarity (7.1). nobody scores above 6 on interaction except the one engineering-editorial site. that is the open lane for the rebuild film. only xtreme and protek score 8 on conversion, and both do it with a photo-first estimate. electrified garage is the only design benchmark worth chasing.

## 2. per-site notes

### 2.1 electrified garage (tesla/rivian independent, two shops) , avg 7.9

recorded facts
- **nav:** services (dropdown), locations (dropdown), about (dropdown), journal, shop (external), call-a-shop (dropdown with one number per shop), plus a persistent request-service button.
- **hero:** engineering-flavored promise that repair is built for real-world use by ex-factory technicians. CTAs: schedule an appointment, and an anchor to "explore the system." right side is an interactive deconstructed-car image with three numbered callouts (battery, drive unit, thermal/charging).
- **section order:** hero + systems image > stats strip > "diagnose before replacing" shop photo > five numbered service cards > shop footage > "what an independent shop is for" > supported models > credential tags > service intake (two shop cards) > routing explanation > "options come after testing" > related journal records > closing start-here CTA > footer.
- **services:** five numbered cards (01 to 05) grouped by owner problem (maintenance, high-voltage, performance, diagnostics, fleet), each an arrow link to its own page.
- **trust:** stats strip (audience size, factory-trained years, independent since 2019), credential tags, real bay photography and footage, candid scope limits. no review excerpts, no badges.
- **conversion:** pick a shop, then a per-shop quote form (Shopmonkey), then shop confirms next step. no general message form, by design. page lists what to include (model, mileage, warning text, when it happens, history, photos).
- **mobile:** css shows a sticky "request service" bar, hidden until scroll, switching to full-width pinned to the bottom at 640px and below.
- **type/palette (from css):** montserrat for display, open sans body, JetBrains Mono for labels, navy as the accent token. mono micro-labels, index codes and document-style status tags.

notes
- OBSERVED: sections carry index numbers and document codes (a service-intake page is labeled like a form number). stats, callouts and locations are numbered too.
- OBSERVED: the page says plainly what it will not do, and when the manufacturer is the better route (warranty, recalls). it also says a submitted request is not a quote and that diagnostic time is billed.
- OBSERVED: the sticky cta is only a bottom button, no phone number; phone lives in the header dropdown and footer. hours only in the footer.
- OBSERVED: no gallery page; proof is embedded in the home page as footage and photo.
- INTERPRETATION: the "numbered catalog" feeling comes from three cheap devices: index numbers, mono micro-labels, and consistent two-line headlines with an emphasized second line. none needs heavy engineering.
- INTERPRETATION: candor about limits is the strongest trust move in the whole set, and it costs nothing. for a neighborhood shop it reads as integrity.
- BORROW: numbered sections and mono-style micro-labels as the wayfinding spine of the page. a "service intake" block that tells you exactly what to send before you submit.
- BORROW: a sticky request bar that appears only after the hero, full-width on phones. charlie's version should also carry a tap-to-call.
- AVOID: no on-page form and no response-time promise. a stressed driver wants a visible "what happens in the next hour."
- AVOID: pure-technical tone. charlie's customers are neighbors in a bad week, so keep the precision but add warmth.

### 2.2 mike's auto body north (saugus MA, high-end collision) , avg 6.0

recorded facts
- **nav:** home, services, about us, certifications, reviews, consumer rights, gallery, blogs, contact us, with the phone number in the bar.
- **hero:** looping background video, headline pitching repair as an art driven by passion, a "boston's best" line and a short quality paragraph. CTA is schedule appointment.
- **section order:** hero video > "why mike's" quality-process paragraphs > six service tiles with "post-accident" kicker lines > schedule-appointment banner (luxury vehicles) > reviews area ("what our clients say about our craft") > leftover limousine-booking template block > blog (3 posts) > "step 2: precision repair begins" > footer with address.
- **services:** collision, frame and body, paint and color matching, paintless dent removal, refinishing, glass. each tile is a short benefit line and a "discover more" link. services page goes long: OEM procedures, computerized measuring, camera and spray-card color matching, founder signs off the paint.
- **trust:** I-CAR gold class, factory certifications (a supercar brand is named), 500+ reviews on the social feed, lifetime warranty mentioned, a consumer-rights page, founder named.
- **conversion:** schedule buttons to contact page. the contact page form was not observable. the homepage's embedded form is leftover from a limousine template (fields for order date, order time, location).
- **gallery:** an instagram feed widget with captions and a load-more button, not a curated page.
- **mobile:** not observable. hamburger-style duplicated menu markup, no sticky call bar found in markup. a go-to-top floating button exists.
- **type (from css):** barlow condensed via google fonts. built on a page-builder (elementor).

notes
- OBSERVED: the hero idea (repair as an art form, driven by passion) sits very close to charlie's concept line. same territory, different words.
- OBSERVED: lorem-ipsum text and a limo-booking widget are still on the live homepage. address for the booking banner says malden while the footer says saugus.
- OBSERVED: the services page names real process proof (measuring systems, spray-card archive, founder final check). this is the best "craft" copy in the set.
- INTERPRETATION: dark luxury plus supercar content is a positioning shortcut. the template debris undercuts every premium claim.
- INTERPRETATION: the gallery is lazy proof. instagram captions are chatty and unorganized, so a visitor cannot find "a car like mine."
- BORROW: name the person who signs off the finish and the specific equipment/procedure. proof of craft beats adjectives.
- AVOID: **art-of-repair adjacency.** their headline sits on the same idea as "the art of getting you back." charlie's must lead with the *return* (getting you back) and the rebuild film, not the word "art" alone, so the two do not read as the same line to someone who has seen both. note it, differentiate in copy and in visuals (ivory/charcoal editorial vs dark luxury video).
- AVOID: auto-play hero video as the only hero. avoid any leftover template content, and a gallery that is only a social feed.

### 2.3 alpha collision / alpha car care (garden city park NY, body + mechanical) , avg 5.3

recorded facts
- **nav:** home, about, insurance claims, collision (dropdown), reviews, mechanic (dropdown), makes, contact (resources, faqs), other services (discounts, lease return, towing, truck, fleet). header carries two phone numbers (one per business) and a book-an-appointment button.
- **hero:** generic trusted-experts headline with "look and run like new" promise, a studio-style car cutout on white. CTAs: schedule service, call us.
- **section order:** header > hero > four feature tiles (one-stop, tools, ASE staff, guarantee) > stats (59 years, 4.6 google, 98% satisfaction) > about > mission/vision/values (appears twice) > certifications heading > services tiles > four-step process > before/after pair > faq > contact form + 24/7 call box > blog > scrolling banner > footer.
- **segmentation:** done in nav (collision vs mechanic vs other) and footer (auto body vs auto repair). two sister businesses each with their own phone line and address.
- **trust:** years, google rating, satisfaction %, ASE and PPG claims, press badge. certification section has a heading with nothing under it. warranty not shown.
- **conversion:** free-estimate page with an 8-field form (see table). reassurance copy is strong ("no obligation", "no surprises").
- **mobile:** not observable. four tel links, six fixed-position rules in css (purpose unknown). builder is Divi. fonts: oswald and nunito sans.

notes
- OBSERVED: placeholder text (lorem ipsum) in the process step, several tiles linking back to the homepage, a gallery marked coming soon, a "24/7 support" box next to weekday-only hours, a typo in the fleet nav item.
- OBSERVED: the estimate form's service list mixes accident, glass, brakes, tires, oil change in one picker, with a "new customer?" toggle and a "preferred contact: phone/email/text" choice.
- OBSERVED: the estimate page promises roughly 30 to 60 minutes and says walk-ins are welcome at one site.
- INTERPRETATION: the two-brand split makes the shop feel like two small companies, not one. segmentation by nav label alone is not enough.
- INTERPRETATION: the best idea here is the "I was in a car accident" option at the top of the interest picker. it recognises that the visitor is in an emotional state before they know the service name.
- BORROW: preferred-contact-method field (call/text/email) and an explicit time promise on the estimate page.
- BORROW: reassurance copy about not being pressured to pay to find out the price.
- AVOID: unfinished sections shipped live, duplicated blocks, a stats row with no source, mixing 24/7 claims with 8:30 to 5:30 hours.
- AVOID: using two phone numbers without telling the visitor which to call for what.

### 2.4 xtreme auto collision (raleigh NC, collision + detailing) , avg 6.0

recorded facts
- **nav:** home, about (dropdown with blog, gallery, repair authorization), collision (dropdown: services, ADAS, PDR, shop, then nine make pages), detailing (dropdown), a ceramic product page, contact, and a persistent request-appointment button.
- **hero:** certified collision repair + detailing in raleigh. CTA cluster of four: start collision estimate (photo estimate), repair authorization, get appointment, give us a call. no hero image captured; the button cluster is the hero.
- **section order:** nav > cta hero > certified-makes logo strip > "here after an accident" section with photo > gold-class callout > why choose us (4 cards) > service tabs > facilities > product callouts (ceramic, PPF) > makes grid > google reviews with photos > quality text > recent work gallery > call/contact cta > footer with full store info.
- **services:** two tracks (collision, detailing). collision is organized by manufacturer pages as well as service type, with a "makes we service" grid that repeats select-this-make + request-appointment buttons.
- **trust:** manufacturer certification badges, I-CAR gold class, lifetime workmanship warranty and parts warranty (12 months/12k miles), in business since 2001, google review excerpts with names and photo strip, payment icons.
- **conversion:** (a) start collision estimate, which texts a link to upload photos; (b) request/schedule appointment; (c) call; (d) repair authorization page for insurance. all via a third-party widget (Carwise).
- **mobile:** toggle menu present. no sticky bar found in the (fetch-only) content. markup could not be pulled directly (429).
- **gallery:** 83 photos in two stacked sections (23 collision, 60 detailing), no captions, no alt text, no filters, no before/after, thumbnails link to raw jpgs.

notes
- OBSERVED: the accident-intent block speaks to someone who just crashed and frames the shop as the less stressful alternative to a dealership.
- OBSERVED: four competing CTAs in the hero and the same set repeated at the bottom of every page.
- OBSERVED: hours appear near the top and in the footer; address and phone repeat in body copy.
- INTERPRETATION: the photo-estimate-by-text-link is the lowest-friction path in the set: no typing on a phone, upload happens in the messaging app.
- INTERPRETATION: brand/make pages are an SEO and reassurance play (my car is welcome here), but they bloat the nav to 20+ links.
- INTERPRETATION: a gallery of 83 uncaptioned thumbnails is evidence of volume, not of craft.
- BORROW: a dedicated accident path (what to do first, what happens next, insurance handled) with one photo-estimate button.
- BORROW: show the warranty terms in one visible line, and hours near the top of the page.
- AVOID: four equal-weight buttons in the hero. one primary, one secondary.
- AVOID: uncaptioned galleries and raw-jpg links.

### 2.5 abe automotive (concord ON, luxury body + PPF + customization) , avg 5.8

recorded facts
- **nav:** about us, services (protect plus, mobile, customize, bodyworks, dry ice blasting), our work, blog, shop, call us, cart, and a book-now primary button.
- **hero:** regional-leader claim over a large exotic-car photo. CTAs: call us, book now. repeated mid-page and at the bottom.
- **section order:** hero > four service tiles > "featured projects" (20+ blog-style cards) > "experience matters" brand block > instagram/youtube/newsletter tiles > nine testimonials > google review screenshot strip > see-our-work cta > footer (address, email).
- **services:** four image tiles with one-liners, each leading to sub-items (e.g. protect plus: PPF, colored PPF, ceramic, tint). dry ice blasting only in nav and footer.
- **project storytelling:** featured projects are blog posts led by the vehicle name, with a deck and "read more." the our-work page itself is a nine-image grid that links out to instagram, no captions or vehicle names.
- **trust:** 16 years claim, largest luxury/exotic provider in the region, nine first-name testimonials, google review screenshots, approved-shop mentions inside testimonials.
- **conversion:** book-now page is a widget (not observable). phone repeated in four places. no on-page estimate form, no hours shown.
- **mobile:** duplicated menu markup with open/close toggle; cart counter in the header. no sticky bar found in markup.
- **type (from css):** libre franklin + roboto condensed on squarespace.

notes
- OBSERVED: the vehicle is the headline of each project card. cars are the heroes, the shop is the supporting actor.
- OBSERVED: the shop sells products (shop, cart) alongside services, which crowds the header.
- OBSERVED: a vaughan location is mentioned in a card while the footer shows concord.
- INTERPRETATION: strongest asset is image-led project storytelling; weakest is that the story lives on instagram, off-site, so the website itself carries no proof.
- INTERPRETATION: the exotic-car angle works because the photos do the selling. charlie's neighborhood cars (a minivan, a commuter sedan) need a different story device, which is the *person* getting back to their life.
- BORROW: lead each project with the vehicle and the human outcome, in a deck line, with a single hero photo.
- AVOID: portfolio that exits to a social network. avoid a cart icon in the main header of a service business.

### 2.6 protek bathgate (bathgate, scotland, body + paint + PDR) , avg 5.3

recorded facts
- **nav:** home, about, services, request estimate, gallery, contact, with a phone bar above the header. header is sticky.
- **hero:** "autobody repair specialists" style headline with a "not your conventional shop" line, supercar photo, a quality-mark logo (BSI Kitemark), a live "closing in x" hours line. primary CTA is request estimate.
- **section order:** header > hero > "back to pristine condition" before/after + guarantee badge > five service cards > services intro > "your right to choose" (consumer choice of repairer) > long kitemark explainer > request-estimate block > four feature cards > "trusted for over 50 years" testimonials (five, named) > hours/phone/email > parking and directions > footer.
- **services:** five cards (body, paint, prestige, hybrid/electric tech, PDR) each with an animated gif and 4 to 6 bullets. all "view more" links go to the same services page, no per-service landing pages.
- **before/after:** one pair on the homepage, but the labels are mismatched (before says bumper damage, after says door repair). gallery page is titled before-and-after but shows 10 single images with no pairing.
- **trust:** kitemark shown three times, est. 1974, named testimonials, a refinish-brand endorsement, PDR accreditation. internal inconsistency: experience-year claims differ by section.
- **conversion:** request-estimate CTA in nav, hero, its own block, contact and footer. form (see table) requires up to six photos. three-step process printed on the page. no confirmation message or turnaround stated.
- **libraries:** AOS (animate on scroll), lightgallery, swiper. mobile: sticky header, no sticky call bar found.

notes
- OBSERVED: "your right to choose" educates the visitor that they, not the insurer, pick the repairer. a strong, factual trust device for a body shop.
- OBSERVED: the 3-step estimate process is printed beside the form: send photo, we reply with an estimate, book if you like it.
- OBSERVED: nine required fields and six required photos. a "website" field with no asterisk, probably a spam trap.
- INTERPRETATION: this is the clearest estimate pathway in the set and the weakest visual execution. mismatched before/after captions actively destroy the proof they are meant to provide.
- INTERPRETATION: the live "closing in x" hours line is a nice small honesty device. cheap to build.
- BORROW: a printed three-step estimate path next to the form; a "your right to choose your repairer" explainer.
- BORROW: a live open/closed status in the header.
- AVOID: before/after pairs that are not the same car and angle. avoid gif icons for services. avoid requiring every field and many photos.

### 2.7 gmw perth (osborne park, western australia, BMW specialist mechanical) , avg 5.9

recorded facts
- **nav:** about, services (mega-menu: mechanical 5, performance 10, specialised 4, brands 4), blog, contact, a book-your-service button, and the phone number in the bar.
- **hero:** brand name + "your trusted specialist" line, three trust bullets (factory-certified, advanced diagnostics, transparent pricing), CTA: book your service today.
- **section order:** hero > intro > four service category cards > why choose us (six blocks) > six testimonials > positioning against general workshops > three more category cards > certified excellence (heading only, no content visible) > faq (3 on home, 6 on the service page) > blog (6 cards) > contact cta + enquiry form > footer.
- **services:** category cards with a benefit sentence and learn-more. mechanical services appear in three places (mega-menu, home card, all-mechanical link). labels are plain: logbook service, general mechanical, brakes, a/c, major engine repair. no prices; promises a detailed quote before work.
- **service page structure:** hero > value strip > tailored services > why trust > overview > benefits > testimonials > 4-step process > pricing note > faq (warranty, parts, loan cars) > booking cta > form.
- **trust:** six first-name testimonials, "50 years combined experience", warranty-compliance messaging, a $30-part-saved-an-$8,000-repair anecdote.
- **conversion:** every booking button goes to the contact page. form (see table) has 7 required fields including registration. no calendar. says they reply "promptly," no timeframe.
- **mobile:** sticky header class in markup, floating tap-to-call button on contact page, "skip to content" link, swiper carousels. phone in mobile header.
- **platform:** elementor. images lazy-load with grey placeholders.

notes
- OBSERVED: the faq tackles the biggest fear head on: does servicing outside the dealer void the warranty.
- OBSERVED: the form is gated by javascript, with a fallback message instead of a plain-html form.
- OBSERVED: a "certified excellence" heading with nothing under it.
- INTERPRETATION: best mechanical findability in the set because the same five labels appear in nav, card and page. no clever naming.
- INTERPRETATION: booking is really an enquiry. every cta lands on the same long page, so there is no light "quote me fast" path.
- BORROW: plain, repeated service labels. a floating phone button. an objection-led faq (warranty, parts, loaners).
- AVOID: empty trust headings, no stated reply time, registration as a required field on the first contact.

## 3. estimate-form field comparison

fields as observed on live pages. "n/o" = not observable (third-party widget or blocked). "req" = marked required.

| field | electrified garage | mike's | alpha collision | xtreme | abe | protek | gmw perth | **recommend for charlie's** |
|---|---|---|---|---|---|---|---|---|
| form type | per-shop shopmonkey quote form (n/o) | n/o (contact page blocked; home form is a template leftover) | on-page form | Carwise widget: text-link photo estimate or appointment | widget (n/o) | on-page form | on-page form | native 2-step form, photo-first |
| name | n/o | n/o | yes | n/o | n/o | req (full name) | req (first + last) | first name only, req |
| phone | n/o | n/o | yes | n/o | n/o | req | req | req, tap-friendly, "text ok" checkbox |
| email | n/o | n/o | yes | n/o | n/o | req | req | optional |
| vehicle year/make/model | asked for in copy | n/o | no | n/o | n/o | make + model req | make dropdown only | year/make/model (3 selects, plate optional) |
| registration/plate | no | n/o | no | n/o | n/o | req (vehicle registration) | req | optional (not needed for estimate) |
| issue or service type | asked in copy (symptoms, warning text) | n/o | yes, long picker mixing body and mechanical, with an "I was in an accident" choice | n/o | n/o | none (free text) | req: servicing / maintenance / performance | two big tiles first: "body / collision" vs "mechanical / check engine," then 3 to 5 chips |
| photos | asked for in copy | n/o | 1 upload, optional | upload via text link | n/o | req, up to 6 | none | optional upload, up to 4, camera-first on mobile; skip is fine |
| insurance question | no | n/o | no | repair authorization page | n/o | no | no | body path only: insurer name optional, "claim open?" yes/no |
| drivable? | asked in copy (call first if not) | n/o | no | n/o | n/o | no | no | body and mech both: "can it be driven?" yes/no (tow help) |
| new customer toggle | no | n/o | yes | n/o | n/o | no | no | skip |
| preferred contact method | no | n/o | phone / email / text | text link | n/o | no | no | call / text, with preferred time window |
| free-text message | no | n/o | yes | n/o | n/o | req (additional info) | req | optional, one line |
| consent/spam | n/o | n/o | n/o | n/o | n/o | one hidden-style "website" field | js-gated | honeypot + consent line, no captcha wall |
| stated response time | none | none | 30 to 60 min to complete an estimate (not a reply promise) | n/o | none | none | "promptly" | **state one**, e.g. "we reply within 1 business hour during open hours" (confirm with shop) |
| confirmation message | n/o | n/o | thank-you message | n/o | n/o | "sending..." state only | n/o | confirmation with what happens next + call button |
| field count (visible) | n/a | n/a | 8 | n/a | n/a | 9 | 8 | 5 to 6 required total |

takeaway: nobody offers a body-or-mechanical fork up front, nobody asks "can it be driven," and only xtreme avoids typing with photos. protek is clearest on process and worst on friction. charlie's should keep required fields to name, phone, vehicle, problem type.

## 4. synthesis

### 4.1 top 8 ideas to borrow (as principles)

1. **index the page like a document.** numbered sections and small mono/uppercase micro-labels create wayfinding and an engineered feel without ornament (from electrified garage). for charlie's: the rebuild film and the process steps share one numbering system, so scroll position equals repair stage.
2. **say what you do not do.** boundaries and honest limits (warranty route, diagnostic fees, when to call first) earn more trust than superlatives. charlie's: a short "when we're the right call, when we aren't" note.
3. **name the person and the method.** founder sign-off on paint, measuring systems, color archive: proof of craft is specific nouns (from mike's). charlie's: name the tech lead and the exact quality checks, with the shop's own photos.
4. **photo-first estimate with a printed 3-step path.** send photo, we reply, you decide (from protek and xtreme). charlie's: let the photo be optional, but make it the hero path for body work.
5. **recognise the accident moment.** a first-class "I was just in an accident" entry that tells you what to do first and what is handled for you (from alpha's picker and xtreme's accident block). do it with calm copy, not alarm.
6. **same label everywhere for mechanical services.** one plain vocabulary repeated in nav, cards and page (from gmw). no cleverness in service names; save the editorial voice for headlines.
7. **objection-led faq.** answer the real fear in a visible block: does independent service void warranty, will insurance cover it, do you provide a ride, how long (from gmw and protek's right-to-choose).
8. **sticky action bar that appears after the hero.** a bottom bar on phones, hidden until scroll (from electrified garage), but with call and estimate together (none of the seven does both well).

### 4.2 top 8 mistakes to avoid

1. **template debris and placeholders live on a "premium" site** (lorem ipsum, limo widget, wrong city, empty headings). one leftover block destroys the quality claim.
2. **before/after proof that is not the same car or angle**, or a "before/after gallery" with no pairs (protek). also uncaptioned thumbnails (xtreme) and social feeds as the gallery (mike's, abe).
3. **competing CTAs of equal weight.** four buttons in a hero (xtreme) or phone + two books + email (alpha). pick one primary action per screen.
4. **no stated reply time or next step** after submit (almost everyone). the anxious visitor needs a clock.
5. **forms that demand everything** (nine required fields, six photos, registration number) (protek, gmw).
6. **trust headings with nothing under them** ("certified" with no badges, a stats row with no source), and inconsistent claims (experience years that disagree on one page).
7. **splitting one shop into two brands or two phone numbers without explaining which to call** (alpha). for a combined shop, one number, two clearly labelled doors.
8. **hiding hours and address in the footer only.** four of seven do it. hours, open/closed state and address belong in the header or first screen on mobile.

also noted, not top 8: auto-playing hero video with no still fallback; unthrottled scroll animation libraries on mobile; gif service icons; sites that exit to instagram for the portfolio.

### 4.3 five specific recommendations for charlie's (mechanical + body, mobile first)

1. **one number, two doors.** at the first screen on a phone: a single primary "get an estimate" button and a tap-to-call, with two clearly labelled choices underneath, "collision / body" and "repair / mechanical." the choice drives the estimate form branch (insurance questions only on the body branch, symptom chips only on the mechanical branch). open/closed status and hours sit right beside the number.
2. **bottom action bar on phones, appearing after the hero**: call on the left, estimate on the right, 48px minimum targets, safe-area padding, and no overlap with the film's own controls. use only on pages other than the contact/estimate page. confirm shop hours and phone with the client before launch; nothing here is invented.
3. **the rebuild film is the story, and it must degrade.** drive it from scroll with a poster still for reduced-motion users and slow connections, cap the mobile asset size, and keep the numbered process steps (01 inspect, 02 plan, 03 repair, 04 finish, 05 back to you) as real html text that the film decorates, not as part of the video. do not make hero text wait for the film to load. headline leads with the *return* so it stays clearly distinct from mike's "art of repair" line.
4. **estimate form: photos optional, five fields required.** name, phone, vehicle (year/make/model selects), problem type, "can it be driven?". after submit show the next step, the promised reply window (get the real number from the shop), and a call button. follow with an optional second step (insurer, preferred time, more photos), so the first step is quick.
5. **proof that fits a neighborhood shop.** a captioned before/after strip using the same car and same angle with the repair type and turnaround, a short "what we don't do / when to call us first" note, the warranty in one visible line, named techs, and local reviews with first names and neighborhood. one signal red reserved for the primary action and the film's "moment of return," so it keeps its meaning.

## 5. appendix: evidence trail

- electrified garage: homepage + /services + /contact via WebFetch, homepage html and css via curl (sticky cta rules at 960px/640px; fonts: montserrat display, open sans body, JetBrains Mono labels; next.js).
- mike's: homepage, /gallery/, /services/, process post via curl (WebFetch returned empty); /contact-us/ blocked or form not in markup; platform elementor; barlow condensed; looping background video; leftover limousine template in the CF7 form.
- alpha: homepage + /auto-body-repair-estimate via WebFetch; divi; oswald + nunito sans.
- xtreme: homepage, /schedule/, /gallery/, /services/ via WebFetch; curl blocked (429); Carwise widgets.
- abe: homepage, /book-now, /our-work via WebFetch; squarespace; libre franklin + roboto condensed; booking widget not rendered.
- protek: homepage via WebFetch + curl; inner pages live under /page/... (the guessed /gallery and /request-an-estimate 404 and then worked at /page/gallery and /page/request-an-estimate); AOS, lightgallery, swiper.
- gmw: homepage, /contact/, /mechanical-services/ via WebFetch; elementor; swiper; sticky header; floating phone button.
- not done: any screenshot (desktop 1440 or mobile 390) because no chromium was available to the browser tool. recommend a follow-up pass with real screenshots before the design direction is locked, especially for electrified garage's systems image and sticky bar, mike's hero video, and the tap targets on all seven.
