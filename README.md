# Victor Piolin

This repository contains my personal website hosted at [victorpiolin.com](https://www.victorpiolin.com/).

## Tech Stack

-   **React 18** with **TypeScript** - UI framework
-   **Vite** - Build tool and dev server
-   **React Router** - Client-side routing
-   **Tailwind CSS** - Utility-first CSS framework
-   **Shadcn UI** - Component library built on Radix UI
-   **Lucide React** - Icon library
-   **ESLint** - Code linting

## Getting Started

### Prerequisites

-   Node.js (v18 or higher recommended)
-   npm or yarn

### Installation

```bash
npm install
```

## Available Scripts

### Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build

Build the project for production:

```bash
npm run build
```

The output will be in the `dist` directory.

### Preview

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code issues:

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── ui/             # Shadcn UI components (Card, Button, etc.)
│   └── social-link.tsx # Social media link component
├── lib/                # Utility functions
│   └── utils.ts        # Helper functions (cn utility for className merging)
├── page/               # Page components
│   ├── index.tsx       # Home page
│   └── error.tsx        # Error page
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS directives and custom styles
└── main.tsx            # Application entry point
```

## Edit Content

The main content is currently in [`src/page/index.tsx`](src/page/index.tsx). Future plans include potentially using a headless CMS like [Contentful](https://www.contentful.com/) for content management.

## Styling

This project uses Tailwind CSS with Shadcn UI components. The design system is configured in:

-   `tailwind.config.js` - Tailwind configuration
-   `src/styles/globals.css` - Global styles and CSS variables
-   `components.json` - Shadcn UI configuration
