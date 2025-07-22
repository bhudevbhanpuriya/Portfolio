# Portfolio Website - Bhudev Bhanpuriya

## Overview

This is a modern full-stack portfolio website built with React, TypeScript, and Node.js. The application features a sophisticated frontend with animated components, a clean design system using Tailwind CSS and shadcn/ui components, and a backend API for handling contact form submissions. The project is structured as a monorepo with shared code between frontend and backend.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **Animation**: Custom CSS animations and JavaScript-based particle effects

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Style**: RESTful API endpoints
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-backed sessions using connect-pg-simple
- **Development**: Hot reloading with Vite integration

### Database Design
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: Defined in shared TypeScript files
- **Tables**: 
  - `users` - User authentication (currently unused but prepared)
  - `contact_messages` - Contact form submissions
- **Migrations**: Managed through Drizzle Kit

## Key Components

### Frontend Components
1. **Animation Components**:
   - `ParticlesBackground` - Canvas-based animated particle system
   - `TypingAnimation` - Text typing effect with multiple texts
   - `CounterAnimation` - Animated number counters with intersection observer
   - `SkillBar` - Animated progress bars for skills

2. **UI Components**: Comprehensive set of shadcn/ui components including forms, dialogs, toasts, and interactive elements

3. **Contact System**: 
   - `ContactForm` - Form with validation using React Hook Form
   - Real-time form submission with success/error feedback

### Backend Components
1. **API Routes**:
   - `POST /api/contact` - Submit contact form messages
   - `GET /api/contact` - Retrieve contact messages (admin endpoint)

2. **Storage Layer**:
   - `MemStorage` - In-memory storage implementation for development
   - Interface designed for easy database integration

3. **Middleware**: Request logging, JSON parsing, and error handling

## Data Flow

1. **Contact Form Submission**:
   - User fills out contact form on frontend
   - Form data validated using Zod schemas
   - POST request sent to `/api/contact` endpoint
   - Backend validates and stores message
   - Success/error response sent back to frontend
   - Toast notification displayed to user

2. **Animation System**:
   - Intersection Observer API triggers animations when elements enter viewport
   - Canvas-based particle system runs continuously in background
   - Typing animation cycles through predefined text arrays

3. **Theme System**:
   - CSS custom properties define color scheme
   - Dark theme implemented with space/cosmic color palette
   - Components use Tailwind CSS classes referencing custom properties

## External Dependencies

### Frontend Dependencies
- **UI & Styling**: @radix-ui/react-* components, tailwindcss, class-variance-authority
- **State Management**: @tanstack/react-query for server state
- **Forms**: react-hook-form with @hookform/resolvers for validation
- **Routing**: wouter for lightweight routing
- **Utilities**: clsx, date-fns, embla-carousel-react

### Backend Dependencies
- **Framework**: express for web server
- **Database**: @neondatabase/serverless, drizzle-orm, drizzle-zod
- **Session**: connect-pg-simple for PostgreSQL session storage
- **Validation**: zod for schema validation
- **Development**: tsx for TypeScript execution, esbuild for bundling

### Development Dependencies
- **Build Tools**: vite, @vitejs/plugin-react
- **TypeScript**: Full TypeScript setup with strict configuration
- **Replit Integration**: @replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer

## Deployment Strategy

### Development Mode
- Frontend served by Vite dev server with HMR
- Backend runs with tsx for TypeScript execution
- Database uses Neon PostgreSQL with connection pooling
- Environment variables required: `DATABASE_URL`

### Production Build
1. **Frontend Build**: Vite builds React app to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Deployment**: Single Node.js process serves both static files and API

### Database Configuration
- PostgreSQL database required (configured for Neon serverless)
- Drizzle ORM handles schema management and queries
- Connection string provided via `DATABASE_URL` environment variable
- Session storage configured to use same database

### Static Assets
- Frontend assets served from `dist/public` in production
- Development assets served by Vite dev server
- Font assets loaded from Google Fonts CDN
- Icons from Font Awesome CDN

The application is designed to be easily deployable on platforms like Replit, with automatic detection of development vs production environments and appropriate server configuration for each.