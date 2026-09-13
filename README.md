# Bansals Apparel — Family Fashion & Ethnic Retail Store

> **Official web catalog and digital storefront for Bansals Apparel, Bhajanpura, Delhi.**  
> Complete family clothing and ethnic wear destination for Women, Men, Kids (Newborn to Pre-teens), and Matching Cosmetics & Accessories.

---

## 📍 Store Information

- **Store Name:** Bansals Apparel
- **Address:** 2/654/21, Main Market Rd, near Bhajanpura, Block B, Bhajanpura, Tukhmirpur, Delhi, 110053
- **Contact Number:** [+91 97737 19071](tel:+919773719071)
- **WhatsApp:** [+91 97737 19071](https://wa.me/919773719071)
- **Google Rating:** 4.0 ★ (140+ Customer Reviews)
- **Timings:**
  - Monday – Saturday: 10:30 AM – 09:30 PM
  - Sunday: 10:30 AM – 10:00 PM
  - Festive Seasons (Diwali, Eid, Karwa Chauth, Weddings): 10:00 AM – 10:30 PM

---

## ✨ Key Features

### 1. Responsive TopBar & Store Status
- **Live Status Indicator:** Real-time store status badge (*"Open Today"*) with pulsing animation.
- **Adaptive Breakpoints:** Displays full store timings and landmarks on desktop while maintaining compact one-tap call and map actions on mobile.
- **Instant Actions:** One-tap telephone dialing (`tel:`) and direct Google Maps navigation.

### 2. Interactive Navigation & Department Hub
- **Branded Header:** Traditional bespoke circular monogram emblem with Cinzel serif typography.
- **Department Routing:** Fast tab-based switching across Women's Wear, Men's Fashion, Kids & Newborns, Cosmetics, and Store Visit / Contact.
- **Saved Items (Wishlist) & Inquiry Bag:** Persistent client-side shopping state tracking favorite designs and bulk in-store inquiries.
- **Mobile Drawer:** Smooth responsive slide-over drawer for easy thumb navigation on smartphone screens.

### 3. Product Cards with Hover Slide Transition
- **Sliding Image Hover Effect:** When hovering over a product card, the primary photo slides out to the left while an alternate angle or detailed shot slides in seamlessly from the right.
- **Slide Indicator Pill:** Subtle overlay indicating multi-angle view availability.
- **Direct Card Actions:** Save to Wishlist, Add to Inquiry Bag, launch Quick View, or inquire directly on WhatsApp.

### 4. Comprehensive Quick View & Details Modal
- **Multi-Photo Image Gallery:** Large preview stage with clickable thumbnail strip, previous/next carousel arrows, and photo counter.
- **Interactive Size Selector:** Choose available sizes (`S`, `M`, `L`, `XL`, `XXL`, `Free Size`).
- **Interactive Shade Selector:** View and select from available color options in stock.
- **Fabric & Craft Details:** Material composition, wash care, and in-house alteration/tailoring notes.
- **Dynamic WhatsApp Inquiries:** Automatically attaches selected size, color, and product title into the WhatsApp inquiry message.

### 5. Curated Family Fashion Collections
- **Women's Wear:** Festive kurtis, bridal lehengas, semi-stitched sets, Chanderi suits, everyday mulmul cotton kurtis, and Indo-Western co-ords.
- **Men's Wear:** Pure linen shirts, mandarin collar kurtas, festive Nehru jackets, stretch denim, and formal trousers.
- **Newborn & Kids (0-14 Years):** 5-piece organic cotton infant hospital kits, toddler dhoti kurta sets, party gowns, and pre-teen denim dungarees.
- **Cosmetics & Accessories:** Velvet bangle chudas, Kundan choker necklaces, Banarasi potli bags, organza dupattas, and bridal beauty kits.

### 6. Local Trust & Store Visit Guide
- **Customer Reviews:** Real Google customer reviews highlighting trial room comfort, fabric durability, and friendly staff.
- **Transit & Parking Guide:** Transit directions from Shastri Park (Red Line) and Maujpur-Babarpur (Pink Line) metro stations with parking guidance.
- **Floating WhatsApp Button:** Quick access chat widget for real-time stock inquiries from any page.

---

## 🛠️ Technology Stack

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** Playfair Display (Serif), Plus Jakarta Sans (Body), Cinzel (Monogram)
- **State Management:** React Context API (`StoreContext`) with `localStorage` persistence

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (version 18.0.0 or higher recommended)
- `npm` or `pnpm` or `yarn`

### Installation

1. **Clone or download the repository:**
   ```bash
   git clone <repository-url>
   cd bansals-apparel
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   The application will boot at `http://localhost:3000`.

4. **Run TypeScript linter / type checker:**
   ```bash
   npm run lint
   ```

5. **Build for production:**
   ```bash
   npm run build
   ```
   The optimized production bundle will be generated in the `dist/` directory.

6. **Preview production build:**
   ```bash
   npm run preview
   ```

---

## 📁 Project Structure

```text
├── index.html                  # HTML5 entry template with Google Fonts & SEO meta tags
├── metadata.json               # Platform application metadata
├── package.json                # Dependencies and build scripts
├── tsconfig.json               # TypeScript compiler configuration
├── vite.config.ts              # Vite bundler configuration
├── src/
│   ├── main.tsx                # Application React mount entry point
│   ├── App.tsx                 # Root layout, routing state, and modal orchestrator
│   ├── index.css               # Tailwind CSS theme import and custom scrollbars
│   ├── types.ts                # TypeScript interfaces and data contracts
│   ├── context/
│   │   └── StoreContext.tsx    # Wishlist and Inquiry Bag state management
│   ├── data/
│   │   └── storeData.ts        # Store information, hero slides, categories, and catalog
│   ├── components/
│   │   ├── TopBar.tsx          # Responsive announcements, timings, and one-tap call/map
│   │   ├── Navbar.tsx          # Primary navigation header, search, and drawer
│   │   ├── HeroSlider.tsx      # Editorial banner slider with seasonal CTAs
│   │   ├── CategoryGrid.tsx    # Visual family shopping category cards
│   │   ├── FreshArrivals.tsx   # Carousel of new arrivals with hover slide effect
│   │   ├── ProductCard.tsx     # Reusable product card with dual-angle sliding hover
│   │   ├── QuickInquiryModal.tsx # Full product details, size selector, and WhatsApp CTA
│   │   ├── NavigationModals.tsx# Wishlist and Inquiry Bag flyout drawers
│   │   ├── ReviewsSection.tsx  # Customer testimonial showcase & rating badge
│   │   ├── FloatingWhatsApp.tsx# Persistent quick-connect chat button
│   │   └── Footer.tsx          # VIP club banner, trust pillars, and neighborhood directory
│   └── views/
│       ├── HomeView.tsx        # Homepage combining hero, categories, arrivals, reviews
│       ├── WomenView.tsx       # Women's ethnic wear catalog with subcategory filters
│       ├── MenView.tsx         # Men's casual & festive catalog
│       ├── KidsView.tsx        # Newborn, toddler, and pre-teen collections
│       ├── CosmeticsView.tsx   # Bangles, jewelry, dupattas, and makeup
│       └── ContactView.tsx     # Store visit directions, map, timings, and FAQ
```

---

## 📄 License & Attribution

Designed and maintained for **Bansals Apparel**, Bhajanpura, Delhi. All rights reserved.
