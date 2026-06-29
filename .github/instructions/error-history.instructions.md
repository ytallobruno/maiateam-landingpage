---
description: "Incremental instruction to record resolved errors, root causes, and prevention steps."
applyTo: "**/*"
---

# Incremental History of Resolved Errors

Whenever an error is identified and fixed in the repository, record it incrementally:

1. **Error Context**
    - affected file(s)
    - observed symptom
2. **Root Cause**
    - confirmed technical reason after investigation
3. **Applied Fix**
    - what was changed to resolve it
4. **How to Prevent Recurrence**
    - short and actionable checklist
    - validation command(s) used in the repository (if any exist)

## Recommended Incremental Entry Format

```md
## [YYYY-MM-DD] Short title of the error

### Evidence

- ...

### Root Cause

- ...

### Fix

- ...

### Prevention

- ...
```

## Rules

- Do not remove previous history.
- Add new records to the end of the file.
- Separate observed fact from inference when necessary.
- When evidence is missing, write: `Not evidenced in the repository`.

## [2026-05-24] Pricing cards squeezed at laptop breakpoint (1024px)

### Evidence

- `src/components/PricingSection.tsx` was using `lg:grid-cols-4`, which caused rendering of 4 columns with very little useful width per card at widths starting from 1024px.

### Root Cause

- Using the `lg:grid-cols-4` breakpoint limited the width of each card to ~220px, making readability difficult and squeezing the internal content of the cards on standard 1024px laptops.

### Fix

- Changed from `lg:grid-cols-4` to `lg:grid-cols-3` in `src/components/PricingSection.tsx` to display a maximum of 3 cards per row on desktop and laptop layouts (lg and higher), providing a comfortable width of ~309px per card.

### Prevention

- Validate the responsiveness and legibility of sections containing multiple cards at boundary widths like 1024px (laptop) before finalizing layout or grid changes.
