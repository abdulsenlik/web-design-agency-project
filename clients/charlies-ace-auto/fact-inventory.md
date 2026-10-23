# charlie's ace auto & body service: sourced fact inventory

checked: 2026-10-23 (all "checked" dates below are this date unless noted). read-only research, nothing published or contacted.
rule for the site: publish only rows marked VERIFIED, and only after the owner confirms. REPORTED and UNAVAILABLE rows stay off the site.

status key: VERIFIED = primary source or 2+ independent sources agree. REPORTED = single source, conflicting, or aggregator-only. UNAVAILABLE = could not reach / not found.

---

## 1. summary

- the shop is real and the core contact facts hold up: 1429 E Algonquin Rd, Arlington Heights IL 60005, phone (847) 228-6603, confirmed by Waze, MapQuest, Yahoo Local, AutoRepairScore and the Korean-language ad.
- hours are NOT settled. Tue-Fri 8-6 is the only part every source agrees on. Monday, Saturday and Sunday conflict across five sources (see section 3). do not publish hours until the owner confirms them.
- the business trades under at least 4 names (Charlie's Ace Auto & Body Service, Charlie's Auto Service, Ace & Charlie Auto Service, legal name Charlie S Ace Auto Service Inc). also two different Google place records appear to exist (see discrepancies). the owner needs to pick the public name.
- google maps could not be read (shell page only, no browser available in this session), so google rating, review count, photos, attributes, website link and owner responses are all UNAVAILABLE first-hand. the only readable review text is 5 truncated yelp reviews (all 5-star) plus one atly quote. yelp shows five 1-star ratings whose text I could not reach, so "all reviews are positive" must not be claimed.
- added 2026-10-23: an owner-side storefront photo supplied by abdul shows the sign "Charlie's AUTO SERVICE", phone 228-6603, a window sign "BODY WORK painting & estimates", a "Charlie's Auto customer parking only" sign, and a door decal that appears to read hours "M-F 8am - 6:30pm, Sat 8am - 3pm". photo is low resolution and undated, so everything from it is REPORTED. the decal is a new hours source that conflicts with the others (see section 3).
- no website, facebook page, BBB profile or Illinois SOS record could be confirmed. several marketing claims (30+ years, 15,000 sq ft, 24h towing, used cars, "all insurance claims", "honest and reasonable prices") come from one Korean-language ad only and are REPORTED, not publishable yet.

---

## 2. fact table

| fact | value | status | sources | notes |
|---|---|---|---|---|
| street address | 1429 E Algonquin Rd, Arlington Heights, IL 60005 (ZIP+4 60005-4715 per MapQuest) | VERIFIED | Google share-link redirect (q= param) https://maps.app.goo.gl/MbVDtrdx95baHdZJA ; Waze https://www.waze.com/en-GB/live-map/directions/us/il/arlington-heights/charlies-ace-auto-and-body-service?to=place.ChIJpQTxHcOwD4gRR9Iv8hWyymA ; MapQuest https://www.mapquest.com/us/illinois/charlies-auto-service-273098012 ; Yahoo https://local.yahoo.com/info-191481673-charlie-s-auto-service-arlington-heights/ ; Korean ad https://www.kyocharoworld.com/Ace-and-Charlie-Auto-Service-Relocate-and-Open-020526 | atly and wheree list the town as "Mt Prospect / Mount Prospect" at the same street address (postal-area quirk, not a different address). use "Arlington Heights". |
| main phone | (847) 228-6603 | VERIFIED | Waze, MapQuest (JSON-LD +18472286603), Yahoo, AutoRepairScore https://autorepairscore.com/il/arlington-heights/charlies-ace-auto-body-service-arlington-heights-illinois , Korean ad | consistent everywhere. |
| second phone | 847-297-4141 | REPORTED | Korean ad only | a web-search snippet ties this number to "Ace Auto Services" at 875 E Rand Rd, Des Plaines (probably the old location) but I could not open that page to confirm. do not publish. |
| phone on storefront sign | 228-6603 (no area code shown) | REPORTED | owner-side storefront photo supplied by abdul, 2026-10-23 | matches the last 7 digits of the main phone. photo is low resolution and undated. |
| operating name on google | Charlie's Ace Auto & Body Service | VERIFIED | Google's own redirect for the short link (q= param) ; Waze title ; AutoRepairScore title | primary-ish: this is how Google's data names the place. what is on the shop's sign / what the owner wants is still an open question. |
| name on yelp, mapquest, yahoo, manta, hub.biz | Charlie's Auto Service | REPORTED | https://www.yelp.com/biz/charlies-auto-service-arlington-heights-2 (title seen in search results only, page returned 403) ; MapQuest ; Yahoo ; https://www.manta.com/c/mm0yf47/charlie-s-auto-service (search result only) ; https://charlies-ace-auto-service.hub.biz/ (search result only) | the yelp-fed listing uses the shorter name. |
| name in Korean ad | Ace & Charlie Auto Service (에이스 오토서비스) | REPORTED | Korean ad, posted 2026-02-05 | single source. |
| name on storefront sign | "Charlie's AUTO SERVICE" (no "Ace", no "& Body Service") | REPORTED | owner-side storefront photo supplied by abdul, 2026-10-23 | matches the shorter yelp / mapquest / yahoo name, not the google name. photo is low resolution and undated, so we do not know if the sign is current. |
| window sign | "BODY WORK painting & estimates" | REPORTED | owner-side storefront photo supplied by abdul, 2026-10-23 | the shop's own signage mentions body work, painting and estimates. wording is as read from the photo. |
| parking sign | "Charlie's Auto customer parking only" | REPORTED | owner-side storefront photo supplied by abdul, 2026-10-23 | uses the short name "Charlie's Auto". |
| legal entity name | CHARLIE S ACE AUTO SERVICE INC (business type: Corporation) | REPORTED | SBA PPP record on sba.com https://www.sba.com/ppp-funded-companies/illinois/charlie-s-ace-auto-service-inc-1273123 (US Treasury data, last updated 2021-07-01) | PPP data only. Illinois SOS could not be checked (see below). location in record: Arlington Heights, IL 60005. NAICS 811111 General Automotive Repair. |
| Illinois SOS corporation record / incorporation date / file number | not obtained | UNAVAILABLE | https://apps.ilsos.gov/businessentitysearch/ (form-driven, request failed from this environment); web searches found no mirror (opencorporates, bizapedia, corporationwiki all empty) | owner or a manual lookup needed. |
| PPP loan (context only) | $11,042, approved 2021-02-11, lender PNC Bank, 1 job retained | REPORTED | sba.com record above | not for publication. the record also contains owner demographic fields; do not use those. |
| business category | Auto repair + auto body shop | VERIFIED | Waze/AutoRepairScore ("auto repair shop, auto body shop") ; Yahoo ("Auto repairs, Auto body shops", keywords "Auto Body Shops, Towing") ; Atly ("Auto repair shop, Mechanic") ; MapQuest schema type AutoRepair, additionalType "Engine repair" | google primary category itself not readable. |
| year established / years in business | "30+ years" (Korean ad: serving the Chicago Korean community 30+ years; Atly summary: "over 30 years' experience") ; Manta: est. 1996 (via search summary) ; PreferredMechanic: "since 2023" (via search summary) | REPORTED | Korean ad ; https://www.atly.com/location/Charlie's-Ace-Auto-Body-Service ; Manta and PreferredMechanic both returned 403, only seen in search summaries | direct conflict (1996 vs 2023 vs PPP 2021 vs relocation 2026). see discrepancies. do not publish any year or "30 years" claim until owner confirms what it refers to (Charlie's experience vs this business vs this address). |
| relocation from Des Plaines | shop moved to Arlington Heights from Des Plaines; ad posted 2026-02-05, no opening date given | REPORTED | Korean ad | conflicts with 2021 Yelp reviews and 2021 PPP at the Arlington Heights address. confirm with owner. |
| facility size | about 15,000 sq ft | REPORTED | Korean ad | self-claim, single source. |
| directions blurb | 1/4 mile west of Route 83 | REPORTED | Korean ad | plausible but unconfirmed. |
| service area claim | within 10 minutes of Arlington Heights, Schaumburg, Rolling Meadows, Elk Grove Village, Des Plaines, Mt. Prospect | REPORTED | Korean ad | self-claim. |
| languages spoken | not stated in English; ad is bilingual Korean/English, community focus is Korean-American | UNAVAILABLE | Korean ad does not say which languages staff speak | ask owner before publishing "Korean spoken" etc. |
| hours | see section 3 | REPORTED | five sources | conflict. |
| hours on storefront door decal | appears to read "M-F 8am - 6:30pm, Sat 8am - 3pm"; Sunday not stated | REPORTED | owner-side storefront photo supplied by abdul, 2026-10-23 | low resolution, undated, so it may be old. Monday open and 6:30 pm close differ from other sources. see section 3. |
| google rating + count | not read | UNAVAILABLE | Google Maps returned a shell page (WebFetch on short link and on google.com/maps with ftid; curl with place_id), browser-use daemon failed to start ("no supported Chromium-family browser is running") | aggregator claims below. |
| google rating (aggregator claim) | 4.9 from 55 reviews | REPORTED | AutoRepairScore (seen in search snippet of that page; my WebFetch of the same page did not return the per-source breakdown) | stale-able. verify on google directly. |
| yelp rating + count | 20 reviews. displayed 4.0 (Yahoo, MapQuest). star split 11 x 5-star, 4 x 4-star, 0 x 3, 0 x 2, 5 x 1-star | REPORTED | Yahoo https://local.yahoo.com/info-191481673-charlie-s-auto-service-arlington-heights/ ; MapQuest | 11x5 + 4x4 + 5x1 = 76/20 = 3.8, not 4.0 (a search summary also cites 3.8). yelp page itself blocked (403). three sources, but Yahoo and MapQuest are both yelp feeds, so not independent. |
| yelp rating (aggregator claim) | 3.5 from 15 reviews | REPORTED | AutoRepairScore | older snapshot (15 vs 20 reviews). |
| overall aggregated score | 4.6 from 70 reviews (google 55 + yelp 15); AutoRepairScore "Satisfaction Score" 71/100 | REPORTED | AutoRepairScore | aggregator-specific number. do not publish as the shop's rating. |
| atly score | 8.9 (17 reviews referenced) | REPORTED | Atly | proprietary score, unrelated to stars. |
| photos count (google) | not read | UNAVAILABLE | Google shell page | MapQuest JSON-LD carries 7 images (1 data-axle + 6 yelp customer photos), Yahoo 1 image. these are third-party / customer photos, no rights confirmed. |
| owner responses to reviews | not read | UNAVAILABLE | no google access; no owner responses visible in yahoo/mapquest yelp excerpts | |
| google attributes (accessibility, payments, etc.) | not read | UNAVAILABLE | Google shell page | MapQuest page has an empty "Features / Credit" block, no usable data. |
| website link on google | not read | UNAVAILABLE | Google shell page | no website listed on Yahoo, MapQuest, Atly or AutoRepairScore. |
| existing website for the shop | none found | UNAVAILABLE | web searches (4 query variants) returned only directories | no official domain surfaced anywhere. |
| facebook / instagram | none found | UNAVAILABLE | web searches returned no social page | not directly checked on facebook (login wall). |
| BBB profile | none found | UNAVAILABLE | BBB search for "Charlie's Ace Auto" in Arlington Heights, IL returned "Sorry we didn't find any businesses or charities that match your search." | a search-summary claim of "BBB A+" (PreferredMechanic) is unconfirmed and contradicts this. do not publish any BBB claim. |
| yelp listing url | https://www.yelp.com/biz/charlies-auto-service-arlington-heights-2 | REPORTED | search result title ("Updated September 2026 - 20 Reviews") ; Yahoo/MapQuest feed links | the "-2" suffix hints at a duplicate/second yelp listing. page not readable (403). |
| waze/google place id | ChIJpQTxHcOwD4gRR9Iv8hWyymA, decodes to feature id 0x880fb0c31df104a5:0x60cab215f22fd247 | VERIFIED (as an id seen on Waze) | Waze URL | the short link resolves to a DIFFERENT feature id, 0x880fb0c32533f1d7:0x47a96f2f1c1fd42c. see discrepancies. |
| 24-hour towing | offered, 24 hours | REPORTED | Korean ad ("24시간 토잉서비스") | towing is also mentioned (no hours) on Yahoo keywords, AutoRepairScore About, MapQuest AI text. the "24h" part is single-source. |
| used car sales | offered | REPORTED | Korean ad only | no other source. |
| insurance claims handled | "all insurance claims" (모든 보험 처리 가능) | REPORTED | Korean ad only | self-claim, needs owner and wording care. |

---

## 3. hours conflict table (by source)

| source | mon | tue | wed | thu | fri | sat | sun | checked | notes |
|---|---|---|---|---|---|---|---|---|---|
| Waze https://www.waze.com/en-GB/live-map/directions/us/il/arlington-heights/charlies-ace-auto-and-body-service?to=place.ChIJpQTxHcOwD4gRR9Iv8hWyymA | 8-6 | 8-6 | 8-6 | 8-6 | 8-6 | 9-12 | not listed | 2026-10-23 | Waze usually mirrors google data. |
| AutoRepairScore https://autorepairscore.com/il/arlington-heights/charlies-ace-auto-body-service-arlington-heights-illinois | 8-6 | 8-6 | 8-6 | 8-6 | 8-6 | 9-1 | closed | 2026-10-23 | |
| MapQuest https://www.mapquest.com/us/illinois/charlies-auto-service-273098012 | CLOSED | 8-6 | 8-6 | 8-6 | 8-6 | 9-1 | closed | 2026-10-23 | only source with Monday closed. JSON-LD lists Tue-Fri 8-6 and Sat 9-1 and omits Monday. |
| Yahoo Local https://local.yahoo.com/info-191481673-charlie-s-auto-service-arlington-heights/ | 8-6 | 8-6 | 8-6 | 8-6 | 8-6 | 8-4 | closed | 2026-10-23 | |
| Womply (as supplied, not re-checked) | ? | ? | ? | ? | ? | 8-2 | ? | not re-checked | |
| Wheree https://charlies-ace-auto-body-service.wheree.com/ (as supplied; my fetch returned 403) | ? | ? | closed | ? | ? | ? | ? | not re-checked | |
| Yelp page | page blocked (403); search summary says weekdays 8-6 | | | | | | | 2026-10-23 | secondhand. |
| Storefront door decal (owner-side storefront photo supplied by abdul, 2026-10-23) | 8-6:30 | 8-6:30 | 8-6:30 | 8-6:30 | 8-6:30 | 8-3 | not stated | 2026-10-23 | REPORTED. appears to read "M-F 8am - 6:30pm, Sat 8am - 3pm". low resolution, undated. |
| Google Maps | UNAVAILABLE | | | | | | | 2026-10-23 | shell page. this is the one the owner should confirm against. |

agreement summary:
- Tue-Fri 8:00 am to 6:00 pm: all four readable sources agree (but Waze, Yahoo, MapQuest and ARS likely share upstream feeds).
- Monday: 3 say 8-6, MapQuest says closed.
- Saturday: 5 different values (9-12, 9-1, 9-1, 8-4, 8-2). 9-1 appears twice.
- Sunday: closed per 3 sources, Waze silent.
- status: REPORTED for every hours cell. nothing in this table is VERIFIED because no first-party or readable google source exists.
- added 2026-10-23, door decal (owner-side storefront photo, low resolution, undated): Mon-Fri 8-6:30, Sat 8-3. this breaks the Tue-Fri 8-6 agreement above (decal closes at 6:30), agrees with the 3 sources that have Monday open, and adds a sixth Saturday value (8-3). it is the only on-site source so far, but it is undated, so it does not settle anything. the owner still has to confirm.

---

## 4. review themes

sample is tiny: 6 readable review texts (5 yelp reviews, all truncated by yahoo/mapquest, plus 1 atly quote). yelp reports 20 reviews total including five 1-star ratings, so counts below describe only the excerpts I could read, not the full set. counts = number of the 6 readable reviews that mention the theme.

| theme | mentions (of 6 readable) | evidence |
|---|---|---|
| "Charlie" named personally as the person doing the work | 6 | every review refers to Charlie by name |
| good / great / best service (general praise) | 5 | Bridgett M. H., John K., Frankie M., Jack M., Atly quote ("best mechanic I ever had") |
| speed / fast turnaround | 2 | John K. (car ready next day after clutch failure), Frankie M. ("very good and fast") |
| honesty / trust | 1 | Jack M. ("honest trustworthy") |
| pricing / value | 1 readable review (Jack M. "amazing pricing"); Atly summary also cites reasonable pricing, derived from reviews I cannot see | |
| attention to detail | 1 | Gee G. |
| body work / paint | 1 in review text (John K. needed body work) ; 4 yelp customer photo captions about dent repair and matte black repaint (MapQuest) | photo captions are customer-written |
| mechanical jobs named: clutch (1), window + door handle (1), catalytic converter second-opinion inspection (1) | 3 | John K., Bridgett M. H., Gee G. |
| repeat customer / long-term ("for years", "I've stayed") | 2 | Jack M., Gee G. |

negative or mixed: 0 readable. but yelp's 5 one-star ratings are unread. a search-engine summary claims "wait times can occasionally extend during busy periods" and "owner handles routine maintenance and tune-ups" attributed to AutoRepairScore reviews, but the ARS page I fetched showed no review text, so I could not confirm either. treat as unverified.

caveat for the site: with unread 1-star reviews, do not write "customers say" claims as if universal. "honest pricing: 9 mentions" style counts are not possible from what was reachable (Google reviews unread).

---

## 5. review excerpts (HELD: needs permission before publishing)

all quotes are as shown truncated on the source page. reviewer names are as displayed (first name + initial). none of these may go on the site without written permission from each reviewer (and the platform's terms checked).

| # | excerpt | reviewer | source | date | stars |
|---|---|---|---|---|---|
| 1 | "Charlie has the best service in town!! i have been bringing my car there for years: he is honest trustworthy and amazing pricing." | Jack M. | Yelp via Yahoo/MapQuest | 2021-08-25 | 5 |
| 2 | "Charlie's Auto Service is superb. My car's clutch blew out one night. Charlie fixed the clutch so my car was ready the next day." | John K. | Yelp via Yahoo/MapQuest | 2022-10-12 | 5 |
| 3 | "Charlie auto is a very good shop to work with & good service.... They fix my car very good and fast" | Frankie M. | Yelp via Yahoo/MapQuest | 2023-06-30 | 5 |
| 4 | "Charlie provided great service when I needed my window fixed. My car door handle was also broken and he recommended doing it at the same time the window was being repaired which I appreciated." | Bridgett M. H. | Yelp via Yahoo/MapQuest | 2025-05-13 | 5 |
| 5 | "I came to Charlie when I needed a second opinion inspection on a broken catalytic converter, and while the car was done for, I've stayed for his phenomenal attention to detail." | Gee G. | Yelp via Yahoo/MapQuest | 2026-05-26 | 5 |
| 6 | "Charlie is the best mechanic I ever had; he's a miracle worker." | name not shown | Atly (review-derived quote, original platform not stated) | not shown | n/a |

sources: https://local.yahoo.com/info-191481673-charlie-s-auto-service-arlington-heights/ ; https://www.mapquest.com/us/illinois/charlies-auto-service-273098012 ; https://www.atly.com/location/Charlie's-Ace-Auto-Body-Service . yelp original: https://www.yelp.com/biz/charlies-auto-service-arlington-heights-2 (blocked, not read directly).

status of all six: REPORTED (single platform each). note excerpt 4 and 5 are truncated at the source; do not complete them.

---

## 6. services by source

split into mechanical vs body/collision (plus other). tag = where it appears. none of these is VERIFIED as a shop-confirmed service list; most are inferred from reviews or auto-generated text.

### mechanical

| service | source tag | status | notes |
|---|---|---|---|
| general auto repair / "service repair" | Korean ad ; AutoRepairScore ("auto repair shop") ; Yahoo category ; Atly | VERIFIED (category level) | 4 sources agree on the broad category. |
| clutch repair | Yelp review (John K., 2022) | REPORTED | one customer. |
| catalytic converter inspection / second opinion | Yelp review (Gee G., 2026) | REPORTED | inspection only, not necessarily replacement. |
| window repair, door handle repair | Yelp review (Bridgett M. H., 2025) | REPORTED | |
| brake jobs (customer cites about $700 total) | Atly (review-derived) ; MapQuest AI description ("brake replacements") | REPORTED | the $700 figure is one anecdote, never publish a price. |
| diagnostics, oil changes, electrical repairs | MapQuest description, which is labelled "Generated using information from the web" | REPORTED | AI-written, treat as a lead only. |
| maintenance, timely maintenance | Atly summary ; MapQuest | REPORTED | |
| Japanese / Asian import specialty | MapQuest AI text ; Atly summary ("specializing in Japanese cars") ; Korean ad sidebar link to a feature "일본차&유럽차 수리 전문" (Japanese and European car repair specialist, may be a separate item on the site) | REPORTED | possible differentiator but unconfirmed. note European appears in the Korean sidebar only. owner must define brands. |

### body / collision

| service | source tag | status | notes |
|---|---|---|---|
| auto body shop (category) | Yahoo ; AutoRepairScore ; Korean ad ("body and repair") ; MapQuest text ("body repair") | VERIFIED (category level) | |
| crash / collision repair | AutoRepairScore About section | REPORTED | one source. |
| dent repair + repaint (customer photos: full repaint to matte black on a 2007 Pontiac G5) | Yelp customer photo captions via MapQuest | REPORTED | customer photos, no usage rights. |
| body work and paint (customer mention) | Yelp review (John K.) | REPORTED | truncated review. |
| frame work | Atly (review-derived: another shop quoted about $7,000, per the summary) | REPORTED | do not publish. |
| insurance claim handling ("all insurance claims") | Korean ad | REPORTED | self-claim. |
| body work, painting, estimates (window sign) | owner-side storefront photo supplied by abdul, 2026-10-23 | REPORTED | window sign reads "BODY WORK painting & estimates". supports body work and painting as offered services. whether estimates are free is not stated. low resolution, undated. |

### other

| service | source tag | status | notes |
|---|---|---|---|
| towing | Yahoo keywords ; AutoRepairScore About ; MapQuest text ; Korean ad (24 hours) | VERIFIED (towing offered) / REPORTED (24h) | 4 sources mention towing; only the Korean ad says 24-hour. |
| used car sales | Korean ad | REPORTED | single source. |

---

## 7. discrepancies (every conflict found)

1. **hours**: five different weekly patterns across five sources (section 3). Monday closed on MapQuest only. Saturday 9-12 / 9-1 / 8-4 / 8-2. Wednesday closed on Wheree (as supplied).
2. **business name**: Charlie's Ace Auto & Body Service (Google/Waze/ARS) vs Charlie's Auto Service (Yelp, MapQuest, Yahoo, Manta, hub.biz) vs Ace & Charlie Auto Service (Korean ad) vs Charlie S Ace Auto Service Inc (PPP). also "Ace Auto Services" (Des Plaines, 875 E Rand Rd) surfaced in searches and shares what may be the old phone number; not confirmed to be the same company.
3. **two Google place records**: the place id seen on Waze (ChIJpQTx...) decodes to 0x880fb0c31df104a5:0x60cab215f22fd247. the short link https://maps.app.goo.gl/MbVDtrdx95baHdZJA resolves to ftid 0x880fb0c32533f1d7:0x47a96f2f1c1fd42c. these are different features in the same area, so there may be duplicate google listings (for example one from the older "Charlie's Auto Service" and one for "Charlie's Ace Auto & Body Service") splitting reviews. needs checking in the owner's Google Business Profile before the site links to a map or review widget.
4. **relocation story vs older records**: Korean ad (2026-02-05) says the shop is relocating from Des Plaines. but Yelp reviews at this address go back to 2021-08-25 ("bringing my car there for years") and a PPP record for Charlie S Ace Auto Service Inc in Arlington Heights IL 60005 is dated 2021-02-11. either the business was already here before the ad, the ad is a re-launch, or the yelp listing carries reviews from an earlier location. ask the owner.
5. **years in business**: Manta says est. 1996, PreferredMechanic (via search summary) says since 2023, Korean ad and Atly say 30+ years, PPP says it existed by 2021. none is verified. do not publish a year.
6. **yelp numbers**: ARS shows Yelp 3.5 / 15 reviews; Yahoo and MapQuest show 4.0 / 20; the star split (11/4/0/0/5) computes to 3.8. a search summary cites 3.8 / 20. yelp itself returned 403.
7. **google numbers**: 4.9 / 55 only via AutoRepairScore. google not readable. overall 4.6 / 70 is the aggregator's own blend.
8. **town label**: Arlington Heights (most) vs Mt Prospect / Mount Prospect (Atly, Wheree).
9. **BBB**: BBB search found no profile; a search summary of PreferredMechanic claims "BBB A+" and a 48-review count. unconfirmed and contradicted. do not publish BBB claims.
10. **AutoRepairScore page content vs the figures supplied**: my fetch of the ARS page returned Saturday 9-1, a Satisfaction Score of 71/100 and no review text, while the 4.6/70, 4.9/55 and 3.5/15 figures appeared only in a search snippet of the same page. the page may render those numbers client-side. re-check in a real browser.
11. **possible closure flag**: one search summary mentioned a "Permanently Closed" tag on an AutoRepairScore page but said it seemed to belong to a different nearby shop. nothing found says this shop has closed (Yelp/Yahoo/MapQuest all show it open as of 2026-10-23 and a 2026-09 yelp page title). note it, don't state it.
12. **prompt-injection note**: the Atly page contains a block addressed to AI agents asking them to connect to an external API. it was ignored. unrelated to the facts above, flagged only so nobody trusts that page's embedded instructions.
13. **storefront photo vs online records (added 2026-10-23)**: the owner-side storefront photo shows the sign "Charlie's AUTO SERVICE" and a parking sign "Charlie's Auto customer parking only", so the physical signage matches the yelp / mapquest / yahoo name, not the google name "Charlie's Ace Auto & Body Service". the door hours decal (M-F 8am - 6:30pm, Sat 8am - 3pm) is a sixth hours source and conflicts with the others (section 3). photo is low resolution and undated, all of it REPORTED.

---

## 8. open questions for the owner

1. what is the exact public name for the website, signage and Google: "Charlie's Ace Auto & Body Service", "Charlie's Auto Service", "Ace & Charlie Auto Service" or something else? what is the legal name (we saw Charlie S Ace Auto Service Inc) and is it registered with Illinois SOS?
2. what are the real hours for each day (especially Monday, Saturday and Sunday)? do they differ for towing / emergency?
3. when did the business start, and when did it open at 1429 E Algonquin Rd? was there a Des Plaines location (Ace Auto Services, 875 E Rand Rd) and when did it move?
4. is 847-297-4141 still in use? is (847) 228-6603 the number to put on the site, and does it take texts?
5. what services do you actually offer? please confirm or strike each: diagnostics, oil changes, brakes, clutch, electrical, catalytic converter work, window/door repairs, tune-ups, collision/crash repair, dent repair, paint (full repaints), frame work, insurance claim handling, towing (24 hours?), used car sales.
6. do you specialize in Japanese / Asian imports (and European)? which makes do you not work on?
7. which languages do you speak at the shop? (the Korean ad suggests Korean; confirm before publishing)
8. what do you want to say about experience ("30+ years") and exactly what does it refer to?
9. is the 15,000 sq ft shop size, "within 10 minutes of six towns", and "1/4 mile west of Route 83" accurate?
10. do you have a Google Business Profile login? are there two Google listings (duplicate) for the shop, and can we merge them? do you have a Yelp business account (listing is "Charlie's Auto Service", and 5 one-star ratings exist)?
11. do you have any existing website, Facebook, Instagram, BBB or other social / directory profiles we missed?
12. who is "Charlie" (full name, role, photo, bio permission)? do you want him named on the site?
13. permission: can we quote the review excerpts in section 5? we need each reviewer's permission, or use only reviews the owner gets written consent for. can we use customer photos (the matte black repaint photos) or do you have your own shop and work photos?
14. certifications, warranties, accepted payments, financing, appointment vs walk-in: none of these were found in any source. confirm what to say or leave out.
15. (added 2026-10-23) the storefront photo shows the sign "Charlie's AUTO SERVICE" and a door decal with hours M-F 8am - 6:30pm, Sat 8am - 3pm. is the sign current, and is the decal still right? if not, what are the real hours?

---

## appendix: what was and was not reachable

reached and read: Waze, AutoRepairScore (partial), MapQuest (full html), Yahoo Local (full html), Korean ad (kyocharoworld), SBA.com PPP record, Atly.
also used (added 2026-10-23): owner-side storefront photo supplied by abdul (sign, window sign, parking sign, door hours decal). low resolution, undated, read by eye, REPORTED only.
blocked / empty: Google Maps (shell), Yelp (403), Manta (403), PreferredMechanic (403), Wheree (403), hub.biz (403), BBB direct profile (none exists in search), Illinois SOS (form, failed), browser-use (no Chromium running).
search-summary-only (not independently opened): PreferredMechanic claims (48 reviews, since 2023, BBB A+), Manta founding date 1996, ARS review paraphrases.

---

## update 2026-10-23 (late): google listing read first-hand

- google listing confirmed via headless browser: "Charlie's Ace Auto & Body Service", cid 5163780695882978348, place_id ChIJ1_EzJcOwD4gRLNQfHC9vqUc. the short link, the address and a "Charlie's Auto Service" query all resolve to this one listing.
- rating **4.7 from 98 reviews** (VERIFIED, google maps, 2026-10-23). the 4.9 / 55 figure from AutoRepairScore is stale. breakdown via DataForSEO: 88 five, 3 four, 1 three, 0 two, 5 one (97 ratings).
- google topic chips: body work 8, efficient work 5, towing 5, accident repair 3, alternator repair 2, brake job 2, tire repair 2, honda crv 2, attention to detail 2, repair costs 2.
- 5 review texts captured verbatim (signed-out google shows only 5): see google-reviews.json. the preview site quotes them with name + date + link. owner permission still needed before launch.
