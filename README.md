# Cyberpunk Neon Portfolio

A modern, cyberpunk-themed portfolio built with Next.js 14, TypeScript, and Tailwind CSS featuring hot pink and electric cyan neon aesthetics.

## Features

- **Cyberpunk Neon Design**: Hot pink and cyan neon glow effects on dark backgrounds
- **6 Portfolio Sections**: Hero, About, Experience, Projects, Skills, Contact
- **GitHub API Integration**: Automatically fetches your latest repositories and profile data
- **Smooth Scroll Navigation**: Single-page application with smooth scrolling between sections
- **Responsive Design**: Fully responsive across all devices
- **Contact Form**: Integrated with Formspree for easy contact submissions
- **Static Export**: Optimized for GitHub Pages deployment

## Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Customization Guide

### 1. Personal Information ([data/config.ts](data/config.ts))

Update your GitHub username, social links, and contact information:

```typescript
social: {
  github: 'https://github.com/maudiaz221',
  linkedin: 'https://linkedin.com/in/YOUR_PROFILE', // TODO: Update
  email: 'your.email@example.com', // TODO: Update
},
```

### 2. About Me ([data/personal.ts](data/personal.ts))

Replace placeholder bio, interests, and education.

### 3. Experience ([data/experience.ts](data/experience.ts))

Add your work experience from your CV.

### 4. Skills ([data/skills.ts](data/skills.ts))

Modify skills list with your technologies.

### 5. Projects ([data/projects.ts](data/projects.ts))

Update project metadata and add images to `/public/images/projects/`.

### 6. Profile Picture

Replace `/public/images/profile/morty.jpg` with your photo.

## Deployment

The build creates static files in `/out` directory ready for GitHub Pages:

```bash
npm run build
```

Then deploy the `/out` folder using your existing GitHub Pages workflow.

## Tech Stack

- Next.js 14+ (App Router), TypeScript
- Tailwind CSS, Framer Motion
- Iconify React, Octokit (GitHub API)

## License

MIT - Free to use for your portfolio!
