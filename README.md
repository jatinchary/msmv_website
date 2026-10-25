# MSVV Wealth Partners - Corporate Finance Website

A production-ready, static corporate website for MSVV Wealth Partners built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Features

- **Next.js 14+ App Router** - Modern React framework with static export
- **Tailwind CSS** - Utility-first styling with custom design system
- **Framer Motion** - Smooth scroll-triggered animations and interactions
- **Lucide React** - Consistent, modern icon system
- **Static Site Export** - Ready for deployment to Netlify, Vercel, Cloudflare Pages, or any static host
- **Fully Responsive** - Mobile-first approach, flawless on all devices
- **Clean, Professional Design** - Light theme with blue accents, approachable and trustworthy
- **SEO Optimized** - Complete metadata, Open Graph, Twitter cards, sitemap-ready
- **Accessible** - Semantic HTML, ARIA labels, keyboard navigation, reduced motion support

## Design System

### Colors
- **Primary Blue**: `#2563eb` - Professional, trustworthy, financial
- **Light Blue**: `#3b82f6` - Accent, hover states
- **Background**: `#ffffff` / `#f8fafc` - Clean, spacious
- **Text**: `#1e293b` (primary) / `#64748b` (secondary) - High contrast, readable

### Typography
- **Font**: Inter (Google Fonts) - Clean, modern, highly readable
- **Hierarchy**: Clear visual hierarchy with generous whitespace

### Animations
- Subtle fade-in and slide-up on scroll
- Gentle hover effects on cards and buttons
- Staggered entrance animations
- Carousel auto-play with touch support
- Respects `prefers-reduced-motion`

### Visual Style
- Generous whitespace and breathing room
- Soft shadows (no heavy drop shadows)
- Clean borders (1px, slate-200)
- Rounded corners (xl/2xl)
- Human-centric, approachable feel

## Project Structure

```
msmv_website/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx       # Sticky navbar with backdrop blur
│   │   ├── Hero.tsx         # Hero with highlights and stats
│   │   ├── Services.tsx     # 6 service cards with features
│   │   ├── Approach.tsx     # 4-phase process timeline
│   │   ├── Testimonials.tsx # Auto-playing carousel
│   │   ├── CTA.tsx          # Strategy call booking
│   │   └── Footer.tsx       # Comprehensive footer
│   ├── privacy-policy/
│   │   └── page.tsx         # Full privacy policy page
│   ├── globals.css          # Global styles & utilities
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Home page composition
├── public/
│   ├── images/
│   │   └── logo.svg         # Logo
│   ├── favicon.svg          # Favicon
│   └── og-image.svg         # Social sharing image
├── next.config.js           # Static export config
├── tailwind.config.js       # Design system tokens
├── tsconfig.json            # TypeScript config
└── package.json
```

## Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
cd msmv_website
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
```

This generates a static `out/` directory ready for deployment.

### Preview Production Build

```bash
npx serve out
```

## Deployment

### Static Hosting (Recommended)

The `out/` directory contains fully static files. Deploy to:

- **Netlify**: Drag & drop `out/` folder
- **Vercel**: Connect repo, framework preset: Next.js
- **Cloudflare Pages**: Connect repo, build command: `npm run build`, output: `out/`
- **AWS S3 + CloudFront**: Sync `out/` to bucket
- **GitHub Pages**: Push `out/` to `gh-pages` branch

### Build Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
}
```

## Customization

### Replace Placeholder Images

Replace these files in `public/` with your actual assets:
- `images/logo.svg` - Company logo
- `favicon.svg` - Browser favicon
- `og-image.svg` - Social sharing image (1200x630)

### Update Content

Edit content directly in the component files:
- **Hero**: `app/components/Hero.tsx`
- **Services**: `app/components/Services.tsx`
- **Approach**: `app/components/Approach.tsx`
- **Testimonials**: `app/components/Testimonials.tsx`
- **CTA**: `app/components/CTA.tsx`
- **Footer**: `app/components/Footer.tsx`
- **Privacy Policy**: `app/privacy-policy/page.tsx`

### Colors & Theme

Modify `tailwind.config.js` to customize:
- Color palette
- Font families
- Animation keyframes
- Spacing scale
- Box shadows

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production (static export) |
| `npm run start` | Preview production build |
| `npm run lint` | Run ESLint |

## Performance

- **First Load JS**: ~143 kB (shared: 87 kB)
- **Static HTML**: Pre-rendered at build time
- **Images**: Unoptimized (static export) - replace with optimized assets
- **Fonts**: Self-hosted via next/font (Inter)
- **CSS**: Minimal, purged by Tailwind

## Accessibility

- Semantic HTML5 structure
- ARIA labels and roles
- Focus management
- Color contrast compliance (WCAG AA)
- Keyboard navigation
- Reduced motion support
- Screen reader optimized

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

Private - MSVV Wealth Partners

## Contact

For questions about this implementation, contact the development team.