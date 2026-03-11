# EUNOIA VITS Website Specification

## Brand
**EUNOIA VITS** – Functional vitamin drinks designed to change how people feel.

The website should feel **modern, minimal, premium, and science-backed**, similar to high-end tech brands rather than traditional supplement stores.

Primary concept:

> Functional drinks for how you want to feel.

---

# Brand Positioning

EUNOIA VITS products represent **three functional states**:

| Product | State | Purpose |
|-------|-------|-------|
| Vitality | Energy | Performance, circulation, libido |
| Unwind | Relaxation | Calm focus without sedation |
| Afterglow | Recovery | Detox and mental clarity |

The UX should guide users to **choose a state**, not browse generic products.

---

# Visual Design System

## Design Principles

- Dark modern interface
- Minimal layout
- Large product imagery
- Smooth glowing gradients
- Tech-inspired aesthetic
- Generous whitespace

Avoid:

- cluttered supplement designs
- fake certification badges
- medical stock photos

---

# Color System

## Base Colors

Background
#0E0E11

Secondary Background
#1A1A1F

Primary Text
#F5F5F7

Secondary Text
#A1A1AA


---

## Product Gradients

### Afterglow (Recovery)
#A3FF3B
#FFD35A
#FF8A00

Gradient:  
lime → yellow → orange

---

### Unwind (Relaxation)
#FF3F86
#C4A6FF
#63E6E2

Gradient:  
pink → lavender → teal

---

### Vitality (Energy)
#8A5CFF
#B46AFF
#FF5C5C

Gradient:  
purple → magenta → red

---

# Typography

Headline Font
Space Grotesk

Body Font
Inter

Headline Style
font-weight: 600;
letter-spacing: -1px;

---

# Website Architecture

## Pages
/
/vitality
/unwind
/afterglow
/science
/about
/contact


---

# Homepage Layout

## 1. Hero Section

Large bottle image centered with soft gradient glow.

Headline
Functional Drinks
For How You Want To Feel

Subtext
Energy. Relaxation. Recovery.
Science-backed blends designed to change your state.


Primary CTA
Order via WhatsApp


---

## 2. Choose Your State

Three large product cards.

| Product | Function |
|------|------|
| Vitality | Energy & Blood Flow |
| Unwind | Relaxation & Calm Focus |
| Afterglow | Recovery & Brain Clarity |

Each card links directly to WhatsApp ordering.

---

# Product Pages

Each product page includes:

1. Hero bottle image
2. Function overview
3. Ingredient stack
4. Benefit explanation
5. Order via WhatsApp CTA

---

# Product Formulas

## Vitality

Function

Peak Energy, Blood Flow & Libido

Cap Ingredients

- 2000mg L-Citrulline
- 600mg L-Arginine
- 400mg Tongkat Ali
- 1500mg Gelatinized Maca

Base

Tart Cherry + Pomegranate concentrate

---

## Unwind

Function

Relaxation Without Sedation

Cap Ingredients

- 300mg Ashwagandha KSM-66
- 200mg L-Theanine
- 150mg Magnesium Glycinate

Base

- 3000mg Glycine

---

## Afterglow

Function

Detox & Brain Fog Clearance

Cap Ingredients

- 300mg Milk Thistle
- 300mg Turmeric
- 500mg Lion’s Mane Mushroom

Base

- Coconut Water
- Liquid Maca Extract

---

# Ingredient Philosophy

Headline
Real Ingredients. Real Dosages.

Explain that formulas use **clinically meaningful doses instead of proprietary blends**.

Featured ingredients:

- L-Citrulline
- Tongkat Ali
- Ashwagandha
- Lion’s Mane
- Magnesium Glycinate

---

# Lifestyle Section

Lifestyle visuals:

- gym performance
- recovery mornings
- relaxation at home
- work productivity

Headline
Feel Better.
Perform Better.
Recover Better.


---

# WhatsApp Order System

All purchases occur via WhatsApp.

Example order link:
https://wa.me/6281339451454?text=Hi%20I%20want%20to%20order%20EUNOIA%20VITALITY

Suggested message template:
Hi, I want to order:

Product:
Quantity:
Delivery location:


Floating WhatsApp button should appear on every page.

---

# UI Components
Navbar
HeroSection
StateSelector
ProductCard
IngredientCard
WhatsAppButton
Footer


---

# Button Style
border-radius: 999px;
padding: 14px 28px;
font-weight: 600;

Primary buttons use **product gradient backgrounds**.

---

# Animations

Use subtle premium animations:

- bottle hover lift
- soft glow gradients
- scroll reveal
- gradient movement

Avoid heavy or distracting effects.

---

# Footer

Minimal dark footer.

Links
Shop
Science
About
Instagram
Newsletter


Include newsletter signup.

---

# SEO Strategy

## Primary Keywords

- functional vitamin drink
- energy vitamin drink
- nitric oxide drink
- relaxation supplement drink
- recovery vitamin drink

---

## Product Keywords

Vitality

- nitric oxide energy drink
- L-citrulline energy supplement
- libido performance drink

Unwind

- ashwagandha relaxation drink
- stress relief supplement drink
- calm focus beverage

Afterglow

- detox recovery drink
- lion’s mane brain supplement
- liver support drink

---

## SEO Content Pages

Recommended blog topics:

- Benefits of L-Citrulline for energy
- Ashwagandha for stress and focus
- Lion's Mane for brain fog
- Nitric oxide and blood flow

---

# Performance Optimization

Images

- WEBP format
- max width 2000px

Hosting CDN handled by Vercel.

Lazy load product images.

---

# Marketing Tracking

Install:

- Meta Pixel
- Google Analytics
- Google Tag Manager

Track:

- page visits
- WhatsApp clicks
- product page engagement

---

# Recommended Tech Stack

Frontend: Next.js
Styling: Tailwind CSS
Animations: GSAP
Hosting: Vercel
Orders: WhatsApp Business
Analytics: Google Analytics + Meta Pixel

---

# Core UX Strategy

Instead of **Shop All Products**, guide users with:
How do you want to feel?

Options

⚡ Energy  
🌊 Relaxation  
🌅 Recovery

Each choice leads to the relevant product page and WhatsApp order.