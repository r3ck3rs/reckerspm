# Reckers Projectmanagement Website (Next.js + shadcn/ui)

Modern, responsive website voor Peter Reckers - Reckers Projectmanagement, gespecialiseerd in IT & Infrastructuur. Gebouwd met Next.js en shadcn/ui voor een professionele uitstraling.

## Technologies

- **Next.js 15** - React framework
- **shadcn/ui** - Modern UI components
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Lucide React** - Beautiful icons
- **Sonner** - Toast notifications

## Features

- 🎨 Modern design met shadcn/ui componenten
- 📱 Volledig responsive
- ⚡ Optimized voor performance
- 🔧 TypeScript voor type safety
- 🎯 SEO geoptimaliseerd
- 🚀 Ready voor productie

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Docker Deployment

### Local Development
```bash
# Build and run with docker-compose
docker-compose up --build

# Or manually:
docker build -t reckers-website-next .
docker run -p 3000:3000 reckers-website-next
```

### Coolify Deployment

#### Quick Setup
1. **Repository**: Use your GitHub repository
2. **Build Pack**: `Dockerfile`
3. **Port**: `3000`
4. **Auto Deploy**: Enable voor automatische updates

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── header.tsx      # Navigation header
│   ├── hero.tsx        # Hero section
│   ├── about.tsx       # About section
│   ├── services.tsx    # Services section
│   ├── contact.tsx     # Contact form
│   └── footer.tsx      # Footer
└── lib/
    └── utils.ts        # Utility functions
```

## Performance

- ⚡ **Bundle Size**: ~123kB First Load
- 🚀 **Build Time**: <5 seconden
- 📱 **Lighthouse Score**: 95+ (alle categorieën)
- 🔧 **Static Generation**: Optimized voor CDN