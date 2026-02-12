# Website Update Guide

This guide explains how to easily update the company website content and information.

## Quick Updates

### Company Information

All company information is centralized in `src/config/company.ts`. Update this file to change:

- Company name and tagline
- Contact information (email, phone, address)
- Social media links
- Services list
- Company description

**Example:**
```typescript
export const companyConfig = {
  name: 'Your Company Name',
  tagline: 'Your New Tagline',
  contact: {
    email: 'contact@yourcompany.com',
    phone: '+1-234-567-8900',
  },
  // ... etc
};
```

### Page Content

- **Home Page**: `src/pages/HomePage.tsx` - Main landing page
- **Services Page**: `src/pages/ServicesPage.tsx` - Services listing
- **About Page**: `src/pages/AboutPage.tsx` - Company information
- **Portfolio Page**: `src/pages/PortfolioPage.tsx` - Project showcase
- **Career Page**: `src/pages/CareerPage.tsx` - Job listings
- **Contact Page**: `src/pages/ContactPage.tsx` - Contact form/info

### Components

Reusable components are in `src/components/`:
- `HomeHero.tsx` - Hero section (uses company config)
- `HomeServicesPreview.tsx` - Services preview
- `HomeWhyUs.tsx` - Why choose us section
- `HomeTechStrip.tsx` - Technology showcase
- `HomeStats.tsx` - Statistics section

### Styling

- Global styles: `src/index.css`
- Component-specific styles: Use Tailwind CSS classes in components
- Color scheme: Dark blue theme (`#020B1F` background, cyan accents)

### Branding

- Logo: `src/assets/brand/logo-akiturhs.png`
- Favicon: Update `/public/vite.svg` or add your favicon

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

The site is configured for GitHub Pages deployment:

```bash
# Build and deploy
npm run deploy
```

Update the `homepage` field in `package.json` if deploying to a different URL.

## Structure

```
src/
├── config/
│   └── company.ts          # Company configuration (UPDATE THIS!)
├── components/             # Reusable components
├── pages/                  # Page components
├── assets/                 # Images, logos, etc.
└── App.tsx                 # Main app component with routing
```

## Tips

1. **Always update `company.ts` first** - This ensures consistency across the site
2. **Test locally** - Run `npm run dev` to preview changes
3. **Check mobile responsiveness** - Test on different screen sizes
4. **Update metadata** - Don't forget to update `index.html` meta tags if needed
