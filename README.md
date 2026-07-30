# iChatAI Website

A modern, polished marketing website for iChatAI, showcasing the platform’s AI capabilities, cloud sync features, prompt library, and trust signals. The site is designed to be fast, responsive, and visually engaging for visitors exploring the product.

## Description

iChatAI Website is a React-based landing page experience built with Vite and TypeScript. It presents a compelling overview of the product through sections such as hero content, feature highlights, AI model support, cloud synchronization, testimonials, FAQs, and strong call-to-action areas.

The project is optimized for modern web performance and uses a component-driven UI approach with Tailwind CSS and reusable UI primitives.

## Features

- Responsive landing page design
- Multiple content sections including hero, features, AI models, cloud sync, testimonials, and FAQ
- Dark/light theme support
- Smooth animations and transitions
- Privacy and terms pages
- Deployable as a static site via GitHub Pages

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- Framer Motion
- Wouter for routing
- TanStack Query
- shadcn-style component architecture

## Project Structure

- src/components – reusable layout and section components
- src/pages – main pages such as home, privacy, and terms
- src/ui – shared UI building blocks
- src/lib – utility helpers
- public – static assets

## Getting Started

### Prerequisites

- Node.js (18+ recommended)
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the local Vite development server.

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Deploy

```bash
npm run deploy
```

The deployment script publishes the built site from the dist folder to GitHub Pages.

## Contribution

Contributions are welcome. If you want to improve the site, feel free to open an issue or submit a pull request.

## Notes

This project is currently set up as a frontend/static website and is suitable for hosting on platforms such as GitHub Pages, Netlify, or Vercel.
