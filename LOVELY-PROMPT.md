# Tax Tracker FY26 - Prompt for Lovable

---

## What Jana Needs

**Context:** Jana and Juliano live in Brisbane, Australia. They have:
- Jana works at Seequent (design software) — salary $205K
- Juliano works at Sunshine Coast Council as Civil Engineer — salary $150K
- Combined income: $355K — marginal rate 45% + 2% Medicare = 47%
- Investment property at 11 Central Avenue, Nirimba QLD 4352
- Urbix business (Australian)
- NZ Company (Certificate of Title NZ)

**Property Details:**
- Purchase price: $857,500
- Type: Used townhouse
- Mortgage: P&I at 5.85% interest
- Primary residence mortgage: 3.85%
- Rental income: $740/week ($38,480/year)
- Rental start date: 10 April 2026
- FY26 pro-rata: ~11.7 weeks (10 Apr - 30 Jun 2026)
- Property manager: TBD
- Depreciation schedule: TO BE ORDERED (Duo Tax ~$550-660 or similar QS)

**Goal:** Track tax deductions for FY2026 (1 July 2025 - 30 June 2026)
- Maximise negative gearing tax relief on investment property
- Track all deductible expenses for Jana, Juliano, Urbix and NZ Co
- Estimated FY26 property loss: $5,000-7,000 → tax refund ~$2,350-3,290

---

## Key Rules

1. **Each entity claims 100%** - Not split! If both Jana AND Juliano use internet, EACH claims 100% on their personal tax return
2. **No invented values** - User enters their own amounts
3. **Receipts** - Store receipts in Supabase Storage
4. **Investment property deductions** - Only claimable from rental start date (10 Apr 2026)
5. **Only interest is deductible** on investment loan, NOT principal repayments
6. **Used property (post May 2017)** - Division 40 plant & equipment only for NEW items you install, NOT items that came with the house

---

## Features

### 1. Dashboard
- Total claimable (sum of all × entities)
- Per-entity totals: Jana, Juliano, Urbix, NZ Co
- **Property Summary Card:**
  - Rental income YTD
  - Deductions YTD
  - Net position (income minus deductions)
  - Estimated tax refund (net loss × 47%)
- Recent expenses list

### 2. Guide (Checklist) - MOST IMPORTANT
**This is GUIDANCE only - shows what CAN be claimed, NO amounts pre-filled**

**Investment Property — Monthly:**
- Loan Interest (5.85% on investment loan — ONLY interest, not principal)
- Property Management Fee (7-8% of $740/week rent)
- Insurance (landlord — ~$1,500/yr)

**Investment Property — Quarterly:**
- Council Rates (~$2,000/yr)
- Water Rates (~$1,200/yr)
- Body Corp / Strata Fees (if applicable)

**Investment Property — Annually:**
- Depreciation — Division 43 Building (2.5% of construction cost/yr — from QS report)
- Depreciation — Division 40 Plant & Equipment (ONLY new items YOU install)
- Land Tax (QLD — check threshold)
- Depreciation Schedule Fee (~$550-660 from Quantity Surveyor)
- Advertising for tenants
- Pest inspection
- Repairs & maintenance (anything to keep property in rentable condition)

**Personal — Jana:**
- Internet (100% — working from home)
- Phone (work % — estimate)
- Software/Subscriptions (Figma, Adobe, etc)
- MBA / Education expenses
- Home office equipment
- Professional memberships

**Personal — Juliano:**
- Internet (100% — working from home)
- Phone (work %)
- Engineers Australia membership
- Professional development / courses
- Home office equipment
- Tools / equipment for work
- CFD Trading Losses (can offset income)

**Business — Urbix:**
- All business expenses (hosting, API costs, subscriptions)
- Contractor costs
- Marketing/advertising

**Business — NZ Company:**
- All NZ company expenses

**Behavior:** Click item → Opens Add form with description + category + who can claim pre-selected. User enters their amount.

### 3. Add Expense
Fields:
- Description (text) - REQUIRED
- Amount ($) - User enters their actual amount
- Date (date picker)
- Category (dropdown)
- Who claims 100%? (multi-select: Jana, Juliano, Urbix, NZ Co) - REQUIRED
- Receipt upload (file)
- Property-related? (toggle — marks as investment property deduction)

### 4. All Expenses
- List sorted by date (newest first)
- Filter by: entity, category, property-related
- Show description, amount, category, who claims
- Delete button

### 5. Property Overview (NEW)
- Address: 11 Central Avenue, Nirimba QLD 4352
- Purchase price: $857,500
- Weekly rent: $740
- Loan interest rate: 5.85%
- Rental start: 10 April 2026
- Running totals: Income vs Deductions vs Net
- Estimated annual tax position

---

## Categories
Home Office, Internet, Phone, Software, Equipment, Education, Membership, Insurance, Mortgage Interest, Council Rates, Water Rates, Land Tax, Body Corp, Maintenance, Repairs, Management Fee, Depreciation (Building), Depreciation (Plant), Advertising, Pest Control, Trading Loss, Legal Fees, Stationery, Travel, Other

---

## Design
- Clean, modern, mobile-first
- Dark theme (#1a1a2e) with green accents (#00D084)
- DM Sans font
- Cards with rounded corners
- Property section uses a subtle teal accent to distinguish from personal expenses

---

## Important Tax Dates
- 10 April 2026: Rental starts — deductions claimable from this date
- 30 June 2026: End of FY26
- October 2026: Tax return due (or later with accountant)
- QLD Council Rates: Due quarterly

## Action Items (show as banner/reminder)
- ⚡ ORDER depreciation schedule ASAP (Duo Tax 1300 266 386 — ~$550-660)
- 📁 Keep ALL receipts from 10 April onwards
- 🏦 Get loan interest statement from bank (interest vs principal breakdown)
- 👩‍💼 Find accountant before June (investment property + business = complex)

## Depreciation Info
For guidance: "Depreciation Schedule: Hire a Quantity Surveyor to inspect the property and create a 40-year depreciation report. For your USED townhouse, you can claim Division 43 (building allowance at 2.5%/year if built after Sep 1987) but NOT Division 40 on existing fixtures. Cost: ~$550-660 from Duo Tax (cheapest) or BMT/Washington Brown (~$770). The schedule fee is itself tax-deductible. Expected annual claim: $5,000-10,000 depending on construction date."
