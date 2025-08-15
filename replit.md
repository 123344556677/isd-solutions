# Overview

TechVision is a modern IT solutions and corporate services company website built as a full-stack application. The project features a React frontend with a Node.js Express backend, designed to showcase the company's services, projects, testimonials, and team members. The application includes a contact form for lead generation and provides a professional corporate presence with responsive design and modern UI components.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing (lightweight React router alternative)
- **UI Components**: Shadcn/ui component library with Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system featuring dark theme and red accent colors
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for type-safe form validation
- **Build System**: Vite with TypeScript support and hot module replacement

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints following conventional patterns
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Development**: Custom Vite integration for seamless full-stack development experience
- **Error Handling**: Centralized error handling middleware with proper HTTP status codes

## Data Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema**: Centralized schema definitions in TypeScript with Zod validation
- **Database**: PostgreSQL (configured but currently using in-memory storage)
- **Migrations**: Drizzle Kit for database schema migrations
- **Connection**: Neon Database serverless driver for PostgreSQL connections

## Design System
- **Theme**: Dark mode with custom color palette featuring red accents
- **Typography**: Inter font family with multiple weights
- **Components**: Comprehensive UI component library with consistent styling
- **Responsive**: Mobile-first responsive design with Tailwind breakpoints
- **Animations**: CSS animations and transitions for enhanced user experience

## Development Environment
- **Bundler**: Vite with React plugin and TypeScript support
- **Hot Reload**: Vite's HMR for instant development feedback
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, etc.)
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared code

# External Dependencies

## Core Framework Dependencies
- **@tanstack/react-query**: Server state management and caching
- **wouter**: Lightweight client-side routing for React
- **express**: Web application framework for Node.js
- **drizzle-orm**: Type-safe ORM for database operations
- **zod**: Schema validation for runtime type checking

## UI and Styling
- **@radix-ui/***: Accessible, unstyled UI primitives (20+ components)
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Component variant management
- **lucide-react**: Icon library with consistent design

## Development Tools
- **vite**: Build tool and development server
- **typescript**: Static type checking
- **@vitejs/plugin-react**: React support for Vite
- **drizzle-kit**: Database migration and introspection tools

## Database and Validation
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **drizzle-zod**: Integration between Drizzle ORM and Zod validation
- **@hookform/resolvers**: Form validation resolvers for React Hook Form

## Production Utilities
- **date-fns**: Date manipulation and formatting
- **nanoid**: Unique ID generation
- **clsx**: Conditional className utility
- **embla-carousel-react**: Carousel component for React