# Targo Freight Showcase

Here's your complete prompt:

---

Build a single-page landing website for a logistics/freight company called **"Targo"**. Use React, TypeScript, Tailwind CSS, and lucide-react icons. Use **"Plus Jakarta Sans"** font from Google Fonts (weights: 200, 300, 400, 500).

## Theme & Styling

- Pure black background (`#000`), white text, red-orange accent color `hsl(5, 84%, 55%)`

- Border radius: 0 (sharp corners everywhere)

- Minimal, editorial, high-end aesthetic

- Text opacity variations: use white at 100%, 80%, 50%, 40%, 30%, 20%, and 4% for hierarchy

- Custom CSS utility class `.clip-corner` using `clip-path: polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))` for angular button shapes

## Structure

### 1. Header (absolute positioned, z-20)

- Left: Targo logo — an inline SVG geometric hexagonal shape (32×32) made of a hexagon outline (`polygon points="16,1 29,8.5 29,23.5 16,31 3,23.5 3,8.5"` stroke white, strokeWidth 1.2, no fill) with three crossing lines inside (diagonal from top-left vertex to bottom-right vertex, diagonal from top-right vertex to bottom-left vertex, and a vertical center line from top to bottom — all stroke white, strokeWidth 0.8). Next to the SVG, the text "TARGO" in uppercase, tracking-tighter, text-xl, font-medium.

- Center: Navigation links (`Home`, `About`, `Contact Us`) — hidden on mobile, white at 80% opacity, text-sm, hover transitions to full white.

- Right: "Contact Us" button using the `clip-corner` style with the primary accent color background, text-sm, font-medium, px-6 py-2.5, hover reduces opacity to 90%.

### 2. Hero Section (full screen height, relative, overflow-hidden)

- Video background covering the entire section using this stream URL: `https://go.screenpal.com/player/stream/cOeifenZ3wA` — set autoPlay, loop, muted, playsInline, absolute inset-0, w-full h-full, object-cover. **No dark overlay on the video.**

- 3-column info bar positioned absolute at top-24, full width, px-8 md:px-16: a CSS grid with 3 columns on desktop (1 on mobile), gap-4, with a bottom border (border-foreground/10, pb-6). Three text items in text-xs, white at 50% opacity: "Worldwide Logistics" | "Premium freight solutions by Targo" | "Delivering excellence across continents with precision and care."

- Large headline positioned absolute at bottom-20, full width, px-8 md:px-16: a flex container with items-end gap-6. On desktop, a small "001" label (text-xs, white at 30% opacity, mb-2, hidden on mobile). The main h1 text: "Swift and Simple\nTransport." — text-[40px] on mobile, text-[72px] on desktop, font-medium, tracking-tighter, leading-[0.95], white.

- Bottom CTA bar: absolute bottom-0, full width, border-t border-foreground/10. Contains a flex row with two equal `` links side by side. First link: "Get a Quote" (text-sm, white at 80%) with an ArrowRight icon (size 16, white at 30%, hover changes to accent color). Second link: "Track Shipment" with same styling. First link has a border-r border-foreground/10. Both links have px-8 md:px-16, py-5, hover:bg-foreground/5 transition. Use `group` and `group-hover` for the icon color transition.

### 3. About Section (px-8 md:px-16, py-24 md:py-36)

- Section label: a flex row with items-center gap-4 mb-16. A horizontal line div (w-10 h-px bg-foreground/30) followed by "About Us" text in uppercase, tracking-widest, text-xs, white at 50% opacity.

- Large headline h2 (text-[28px] md:text-[56px], font-medium, tracking-tighter, leading-[1.1], max-w-5xl): First span in full white: "From express deliveries to full-scale freight operations, " — second span in white at 40% opacity: "Targo offers an exceptional network and trusted, personalised service."

- Below: a divider (mt-16 pt-8 border-t border-foreground/10) with a paragraph (text-sm, white at 50% opacity, max-w-lg, leading-relaxed): "Our comprehensive logistics solutions include air freight, sea freight, road transport, warehousing, and customs brokerage — all tailored to your unique supply chain requirements."

### 4. Fleet Showcase Section (px-8 md:px-16, py-24 md:py-36)

- Section label + buttons row: flex-col on mobile, flex-row on desktop, justify-between, gap-6, mb-20. Left side: accent color line (w-10 h-px bg-primary) and "Our Fleet" text in accent color (text-xs, uppercase, tracking-widest). Right side: two pill-shaped outline buttons (rounded-full, border border-primary, px-5 py-2, text-xs, text-primary): "Get a Quote" and "Our Services" — hover fills bg-primary and text becomes primary-foreground.

- Centerpiece (relative, flex items-center justify-center, py-20):

  - Giant "TARGO" text: absolute, text-[100px] md:text-[200px], font-medium, tracking-tighter, white at 4% opacity (`text-foreground/[0.04]`), uppercase, select-none.

  - Elliptical ring: a div with border border-foreground/10, rounded-[50%], aspect-[2.2/1], w-full max-w-xl, flex items-center justify-center. Inside: Ship icon from lucide-react (size 120, strokeWidth 1, white at 20% opacity).

  - "Global Fleet" label: absolute bottom-8, text-xs, white at 30% opacity, uppercase, tracking-widest.

  - Vertical "Freight Class" text: absolute left-0, hidden on mobile, text-xs, white at 20% opacity, uppercase, tracking-widest, `[writing-mode:vertical-lr] rotate-180`.

- Bottom info bar (border-t border-foreground/10, pt-8 mt-8, grid: 1 col mobile, `grid-cols-[1fr_auto_auto]` on desktop, gap-8, items-start):

  - Left: "Express Air Freight" title (text-lg, font-medium, white, mb-2) with description paragraph (text-sm, white at 40%, max-w-sm, leading-relaxed): "Time-critical shipments delivered globally with guaranteed schedules and real-time tracking across our premium carrier network."

  - Center: three stats in a flex row (gap-8), each with an icon (size 18, strokeWidth 1.5, white at 30%) and text: `Gauge` icon → "150+" / "Routes", `Globe` icon → "80" / "Countries", `Clock` icon → "24/7" / "Support". Values in text-sm font-medium white, labels in text-xs white at 40%.

  - Right: "View Details" pill button (rounded-full, border border-foreground/20, px-5 py-2, text-xs, white at 50%, hover border and text brighten).

## Important Details

- All horizontal padding: px-8 on mobile, px-16 on desktop

- Section vertical padding: py-24 on mobile, py-36 on desktop

- Use lucide-react icons: `ArrowRight`, `Gauge`, `Globe`, `Clock`, `Ship`

- Responsive: mobile-first with `md:` breakpoints

- All links use `href="#"` as placeholders

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3fa96633-0201-403d-b68e-0d7edb70c545).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
