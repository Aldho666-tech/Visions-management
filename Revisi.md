# Visions Management Website — Revision Spec

> Source: annotated PDF review of the current site (visions-management.vercel.app).
> Purpose: this file is a task list for a coding agent to implement. Each section = one page/component. Checkboxes = discrete tasks. Copy blocks marked `COPY:` are final text — use verbatim.

---

## 0. Global Decisions Needed From Client (do these first, or use the defaults given)

- [ ] **"Policies and Terms" footer link** — no content decided yet. **Default action:** create a placeholder page with a standard boilerplate (privacy handling, no guarantees, contact for disputes) and mark it `DRAFT — pending legal review`. Do not link it live in nav until client confirms.
- [ ] **"Sitemap" footer link** — remove for now (client has no fixed page structure/address yet). Re-add once site structure is finalized.
- [ ] **"Featured Partnerships" case-study section (Chanel Beauté, Dior Parfums, etc.)** on Homepage and Partners page — these are placeholder/aspirational case studies, not real client work yet. **Recommended action:** remove/hide this section entirely from both pages for now (don't just leave it empty — comment it out in code so it's easy to re-enable). Re-add once real testimonials/case studies exist.
- [ ] **Stats bar (150+ Creators / 120+ Campaigns / 18M+ Reach / 96% Satisfaction)** — numbers are placeholders, not real. **Action:** remove this section from Homepage entirely for now. Re-add once real metrics are available.
- [ ] **Villa / Community / F&B / Lifestyle partner counters** (`[X VILLA PARTNERSHIPS]`, `[XX+ COMMUNITY & EVENTS]`, `[XX+ F&B COLLABORATIONS]`, `[XX+ LIFESTYLE PARTNERS]`) — keep as literal placeholder text (`XX+`) except Villas, which currently has real data (7 villas, see §4). Make these easy to edit as CMS/config values, not hardcoded, since the client will update counts themselves.

---

## 1. Global — Navbar

- [ ] Fix vertical line-spacing in the nav dropdown/menu — currently too loose, tighten spacing between menu items.

## 2. Global — Footer

- [ ] Reduce footer nav to **one group of 6 links only**, laid out as **2 rows × 3 columns**:
  - Row 1: `Home` · `About` · `Services`
  - Row 2: `Partners` · `News` · `Contact`
  - Remove the separate second column currently showing `About VISIONS / Partnership Network / Talent Roster / Press Room`.
- [ ] Remove the physical address block entirely.
- [ ] Social icons: ensure **Facebook, Instagram, and LinkedIn** icons are present and linked (currently missing/incomplete set).
- [ ] Remove the decorative circular ring/dot graphic near the footer top (the orange ring-and-dot icon).
- [ ] Bottom bar copy:
  - Keep: `© VISIONS MANAGEMENT Partnership Agency by VISIONS ENTERPRISE`
  - `Policies and Terms` → see §0 (placeholder page).
  - `Sitemap` → remove for now, see §0.

---

## 3. Homepage

### 3.1 Hero
- [ ] Top badge: keep `STRATEGIC PARTNERSHIP AGENCY` as the topmost badge/eyebrow.
- [ ] Headline copy:
  ```
  THE RIGHT PARTNERS CHANGE EVERYTHING
  ```
- [ ] Subtext copy:
  ```
  We help businesses identify, build, and manage strategic partnerships that unlock new opportunities and create lasting business value.
  ```
- [ ] Primary button `Book a Discovery Call` → link to a `mailto:` action (route to email, not a form/calendar).
- [ ] Secondary button `Explore Our Services` → link to `/services` page.

### 3.2 Philosophy / Trust section (replaces testimonial — no real testimonial yet)
- [ ] Heading copy:
  ```
  BUILDING PARTNERSHIPS THAT CREATE LASTING VALUE
  ```
- [ ] Quote copy:
  ```
  "We believe successful businesses don't grow alone. By connecting brands, businesses, and communities, we create strategic partnerships that strengthen networks, unlock new opportunities, and deliver measurable business value."
  ```
- [ ] Below the quote, display **partner/client logos** (client will provide via Google Drive — build the layout to accept a logo-grid component, placeholder logos until assets are delivered).
- [ ] "Trusted by" caption copy (use as alt-text/list if logos aren't ready yet):
  ```
  Trusted by Brands, Businesses, & Communities
  Balisabi, The Bowl, Loomie, Mangata, Forketta, Akua Mediteranian, Gili Gili Fast Boat, Jade Villa One
  ```

### 3.3 Featured Partnerships (case studies)
- [ ] See §0 — remove/hide for now.

### 3.4 "Why Brands Choose VISIONS" section
- [ ] Heading: `Why Brands Choose, VISIONS.`
- [ ] Subtext:
  ```
  We connect brands, communities, and businesses to create partnerships that deliver real commercial impact.
  ```
- [ ] Card 1 — **Strategic Connections**
  ```
  We connect brands with the right businesses, communities, and industry to create valuable long-term collaborations.
  ```
- [ ] Card 2 — **End-to-End Execution**
  ```
  From planning to activation, we manage every stage with clear strategies, efficient execution, and measurable outcomes.
  ```
- [ ] Card 3 — **Long-Term Growth**
  ```
  Every partnership is designed to strengthen brand positioning, unlock new opportunities, and support long-term commercial success.
  ```

### 3.5 Partners & Clients logo strip
- [ ] Section label: `Our Partners & Clients`
- [ ] Logos/names to include:
  ```
  Balisabi, The Bowl, Loomie, Mangata, Forketta, Akua Mediteranian, Gili Gili Fast Boat, Jade Villa One
  ```
  (Replace the current placeholder international brand logos — Chanel/Dior/Vogue/Gucci/Hermès/Prada/Sephora/Samsung — with these actual client names/logos once assets arrive.)

### 3.6 Marquee / ticker
- [ ] Static/yellow label: `Visions Management - Connecting your business with the right partners.`
- [ ] Animated scrolling words: `Strategic - Partnership - Community - Collaboration - Event`

### 3.7 Stats bar
- [ ] See §0 — remove for now.

### 3.8 "How the Partnership Works" section
- [ ] Replace the current "PROVEN 7-STEP PARTNERSHIP ROADMAP" (Strategic Alignment & ROI Audit, Network & Partner Matchmaking, Partnership Architecture & Co-Branding, Deal Structuring & Contract Execution, Campaign Co-Execution, Multi-Channel Amplification, Performance Analytics & Enterprise Scaling) with the simplified operational flow below — this reflects how the business actually runs (order → delivery → reporting), not enterprise B2B jargon.
- [ ] Section heading: `How the Partnership Works`
- [ ] Section intro:
  ```
  Every guest order follows a simple, transparent process—from placing an order and confirming payment to delivery and monthly reporting.
  ```
- [ ] Simple one-line workflow (can be shown as a horizontal step tracker):
  ```
  Guest → Contact Visions Admin → Confirm Payment Method & Delivery Fee → Admin Sends Order to Partner → Partner Confirms Order → Order Prepared & Delivered → Payment Verification → Monthly Sales Report
  ```
- [ ] Detailed 7-step breakdown (can be an accordion/expandable list under the diagram):
  1. **Guest Places an Order** — Guest contacts the Visions Admin to place an order and claim the partnership discount.
  2. **Payment & Delivery Confirmation** — Admin confirms: (a) preferred payment method (cash or bank transfer), (b) delivery address, (c) estimated delivery fee (Gojek, Grab, or other courier).
  3. **Order Sent to Partner** — Visions Admin forwards the complete order details to the partner.
  4. **Partner Confirmation** — Partner confirms: (a) product availability, (b) order acceptance, (c) estimated preparation time (if applicable).
  5. **Order Fulfillment** — Partner prepares the order; order is delivered to the guest via Gojek, Grab, or another agreed delivery service.
  6. **Payment Verification** — Visions Admin verifies payment received (cash or bank transfer) and records the completed transaction.
  7. **Monthly Reporting** — Visions Admin prepares a monthly report covering: total orders, total sales value, discounts provided, payment reconciliation, and any outstanding issues.

### 3.9 Intro/mission block
- [ ] Heading: `VISIONS MANAGEMENT - BUILDING STRATEGIC PARTNERSHIP`
- [ ] Sub-heading: `Connecting Your Business to the Right Partners`
- [ ] Body copy:
  ```
  Visions Management is a strategic partnership agency that designs, develops, and manages partnerships between brands, businesses, and communities. We don't simply make introductions—we build strategic collaborations that create long-term business value.
  ```
- [ ] Remove the "Official agency moto" label and the "Global Partnership Network 2026" badge from this block — no longer used.

### 3.10 "Connecting Your Business To Global Opportunities" banner
- [ ] Keep headline: `Connecting Your Business To Global Opportunities`
- [ ] Body copy:
  ```
  Visions Management is not a social media agency—we are a premier partnership agency dedicated to connecting your business with elite creators, multinational brand networks, and high-revenue commercial opportunities. We bridge vision with execution.
  ```
- [ ] CTA: `Explore Partnerships` (confirm target link — should point to `/partners`).

---

## 4. Capabilities / Services Cards (used on Homepage "Our Capabilities" and reused on `/services`)

- [ ] Section label: `OUR CAPABILITIES` (was "AGENCY CAPABILITIES")
- [ ] Section heading: `Strategic Partnership Services` (was "PARTNERSHIP & GROWTH SOLUTIONS")

### 4.1 Card 1 (was "B2B Collaborations")
- [ ] Rename: **Partnership Strategy**
- [ ] Description: `Building the right foundation before every collaboration.`
- [ ] Sub-items (shown after "Explore Capability" is clicked, and also feed the form dropdown below):
  - Partnership Strategy
  - Opportunity Mapping
  - Collaboration Planning
  - Partnership Roadmap

### 4.2 Card 2 (was "Creator Network" / "Haute Fashion & Luxury Influencer Activations")
- [ ] Rename: **Partnership Development**
- [ ] Description: `Connecting your business with the right partners and turning opportunities into strategic collaborations.`
- [ ] Sub-items:
  - Partner Sourcing
  - Business Matchmaking
  - Partnership Negotiation
  - Brand Collaborations
  - Community Partnerships

### 4.3 Card 3 (was "Cinematic Production" / "Commercial Studio & Film Production")
- [ ] Rename: **Partnership Management**
- [ ] Description: `Ensuring every partnership delivers long-term business value.`
- [ ] Sub-items:
  - Partnership Activation
  - Partnership Management
  - Partnership Performance Review

### 4.4 Contact / Project Brief form ("Let's Build Something Remarkable")
- [ ] Keep fields: `Your Name`, `Email Address`, `Company / Brand Name`.
- [ ] Rename field label: `Primary Service Needed` → **`How Can We Support You?`** (dropdown options = the sub-items from whichever card the CTA was clicked from, or the full combined list if the form is generic).
- [ ] **Remove** the `Estimated Budget` field entirely.
- [ ] Keep submit button: `Submit Project Brief →`

---

## 5. Services Page (`/services`)

- [ ] Remove the `SOLUTIONS & CAPABILITIES` eyebrow label from the hero.
- [ ] Hero heading: `OUR SERVICES` → **`How We Can Support You`**
- [ ] Hero subtext → 
  ```
  Connecting brands, businesses, and communities to create partnerships that drive commercial growth.
  ```
- [ ] Below the hero, reuse the **Capabilities Cards** block from §4 (same 3 cards, same renamed content, same form behavior).

---

## 6. Partners Page (`/partners`)

### 6.1 Hero
- [ ] Remove `GLOBAL NETWORK` eyebrow label.
- [ ] Keep heading: `OUR PARTNERS`
- [ ] Subtext:
  ```
  Connecting brands, businesses, and communities to create valuable partnerships and new business opportunities.
  ```
- [ ] "Brand Partners & Clients" logo strip: replace placeholder international brand logos (Chanel/Dior/Vogue/Gucci/Hermès/Prada/Sephora/Samsung) with the real client logos (same list as §3.5): `Balisabi, The Bowl, Loomie, Mangata, Forketta, Akua Mediteranian, Gili Gili Fast Boat, Jade Villa One`.

### 6.2 Featured case studies ("Architecting Impact with Industry Leaders")
- [ ] See §0 — remove/hide for now (Chanel Beauté, Dior Parfums, etc. are placeholder, not real).

### 6.3 Restructure the 4 partner-category cards
Replace the current 4 cards with these 4 categories (card layout should match the "Why Brands Choose VISIONS" style):

**1. Villa Partners**
- Subtitle: `Curated Stay Experience`
- Body:
  ```
  We partner with Bali's villas to elevate every guest's holiday — curating exclusive experiences, activities, and promotions that transform a simple stay into something truly memorable.
  ```
- Counter: `7 VILLA PARTNERSHIPS` (make this a config value the client can edit themselves — it will change as they onboard more villas).
- On click → navigates to a **Villa list view**, grouped into 4 area sections (card-grid layout, same visual pattern as the "Why Brands Choose VISIONS" cards):
  - **Sanur**
  - **Seminyak**
  - **Canggu**
  - **Ubud**
- Clicking an individual villa within an area opens its Google Maps link directly (external link, new tab).

**Villa data (current state — build as structured/editable data, not hardcoded HTML):**

| Area | Villa | Address | Maps Link |
|---|---|---|---|
| Seminyak | Villa Kayu | No. X2, Gang Priuk, Kec. Kuta Utara, Bali 83061, Indonesia | https://share.google/jxSMgnKiZUTXtS9uJ |
| Seminyak | Villa Sawo | Gang Sawo No. 4, Kerobokan Kelod, Kuta Utara, Bali, Indonesia | https://share.google/v5pNKwlE5BwR7FTwY |
| Seminyak | Villa Kak Dagut – Green Villa | Gang Wayang No. 15, Kerobokan, Kec. Kuta Utara, 83061, Bali, Indonesia | https://maps.app.goo.gl/8hT8x3C3jqwtajRJ7 |
| Seminyak | Villa Kak Dagut – Purple Villa | Gang Wayang No. 15, Kerobokan, Kec. Kuta Utara, 83061, Bali, Indonesia | https://maps.app.goo.gl/8hT8x3C3jqwtajRJ7 |
| Seminyak | Villa Silvia – New Villa | Gang Wayang 31 No. 2, Kerobokan, Kuta Utara, 83061, Bali, Indonesia | https://maps.app.goo.gl/x96jHSZi8c2Mmqeg6?g_st=ac |
| Seminyak | Villa Silvia – Villa Vlada | Gang Wayang 31 No. 2, Kerobokan, Kuta Utara, 83061, Bali, Indonesia | https://maps.app.goo.gl/x96jHSZi8c2Mmqeg6?g_st=ac |
| Sanur | Jade Villa One | — | https://share.google/Nw447PZD1ZyzJNS0Z |
| Ubud | *(none yet)* | — | — |
| Canggu | *(none yet)* | — | — |

> Note: two Seminyak listings ("Kak Dagut – Green Villa" and "– Purple Villa") share the same address/link, as do the two "Villa Silvia" entries — this is correct as given (likely two units on one property); don't dedupe them.
> For areas with no villas yet (Ubud, Canggu), render the area tab/section but show an empty/"coming soon" state rather than hiding it, since the client will add these soon.

**2. Community**
- Subtitle: `Community & Events`
- Body:
  ```
  We collaborate with Bali's communities — art collectives, language exchange groups, wellness & yoga circles, sports clubs, and sustainability groups — to host events that bring value-aligned brands into these communities. Supported by a running event calendar, we introduce partner brands directly to the audiences that matter most to them.
  ```
- Counter: `XX+ COMMUNITY & EVENTS` (literal placeholder, per §0).

**3. F&B Business**
- Subtitle: `Cross Marketing & Venue Partnership`
- Body:
  ```
  Driving cross-marketing and brand presence through collaborations with villas, wellness & sport hubs, and cafes & restaurants — positioning each venue as a natural gathering point for community events and joint promotions.
  ```
- Counter: `XX+ F&B COLLABORATIONS` (literal placeholder).

**4. Lifestyle**
- Subtitle: `Wellness, Sport, and Guest Experience`
- Body:
  ```
  Centered on wellness, sport, and guest experience — curating recommended places, activities, spa & fitness partners, and local excursions that support cross-marketing between partner brands under this collaboration network.
  ```
- Counter: `XX+ LIFESTYLE PARTNERS` (literal placeholder).

---

## 7. Assets Needed From Client (blockers — flag, don't block other work)

- [ ] Partner/client logo files for: Balisabi, The Bowl, Loomie, Mangata, Forketta, Akua Mediteranian, Gili Gili Fast Boat, Jade Villa One (client will provide via Google Drive).
- [ ] Real testimonial(s) and case-study data — needed before re-enabling §0's removed sections.
- [ ] Real stats (creators, campaigns, reach, satisfaction %) — needed before re-enabling the stats bar.
- [ ] Updated villa/community/F&B/lifestyle partner counts as they onboard more partners.

---

## Suggested Build Order

1. Global nav/footer fixes (§1, §2) — quick, low-risk, unblocks everything else.
2. Capabilities cards + form (§4), since it's reused on both Homepage and Services.
3. Homepage (§3) top to bottom.
4. Services page (§5) — mostly reuses §4.
5. Partners page (§6) — the villa list/maps linking is the most complex piece; build it last.