# RRV7-BOILERPLATE - Project Structure

## 📁 Folder Structure

```
RRV7-BOILERPLATE/
├── .react-router/               # React Router v7 build artifacts
├── app/                         # Main application directory
│   ├── components/              # Reusable UI components
│   │   ├── common/              # Common/shared components
│   │   ├── features/            # Feature-specific components
│   │   ├── layout/              # Layout components (header, footer, etc.)
│   │   └── ui/                  # Base UI components (buttons, inputs, etc.)
│   │
│   ├── hooks/                   # Custom React hooks
│   │   ├── auth/                # Authentication related hooks
│   │   └── index.ts             # Hooks barrel export
│   │
│   ├── lib/                     # Library configurations and utilities
│   │   ├── api/                 # API client configurations
│   │   ├── constants/           # Application constants
│   │   ├── helpers/             # Helper functions
│   │   ├── schemas/             # Validation schemas (Zod, Yup, etc.)
│   │   ├── utils/               # Utility functions
│   │   └── config.ts            # App configuration
│   │
│   ├── middleware/              # Route middleware
│   ├── providers/               # Context providers
│   ├── routes/                  # Route definitions
│   ├── stores/                  # State management (Zustand, Redux, etc.)
│   ├── types/                   # TypeScript type definitions
│   │
│   ├── app.css                  # Global application styles
│   ├── root.tsx                 # Root application component
│   └── routes.ts                # Route configuration
│
├── docs/                        # Documentation
├── node_modules/                # Dependencies (auto-generated)
├── public/                      # Static assets
├── test/                        # Test files
├── .dockerignore                # Docker ignore rules
├── .env.example                 # Environment variables template
├── .gitignore                   # Git ignore rules
├── components.json              # UI components configuration
├── Dockerfile                   # Docker configuration
├── eslint.config.js             # ESLint configuration
├── package.json                 # Dependencies & scripts
├── pnpm-lock.yaml               # pnpm lock file
├── react-router.config.ts       # React Router v7 configuration
├── README.md                    # Project documentation
├── tsconfig.json                # TypeScript configuration
└── vite.config.ts               # Vite configuration


📋 Folder Descriptions

🎯 # app/ -- Core Application
Main directory that contains all runtime code for the front-end.

🧩 # components/ -- UI Components
-- common/ -- Reusable elements used across the entire app
-- features/ -- Components scoped to a specific feature or domain
-- layout/ -- Structural pieces such as Header, Sidebar, Footer
-- ui/ -- Low-level atoms/molecules (Button, Input, Modal, etc.)

🎣 # hooks/ -- Custom Hooks
-- auth/ -- Authentication / authorisation hooks
-- index.ts -- Barrel file to re-export every custom hook

📚 # lib/ -- Libraries & Configuration
-- api/ -- API-client setup (Axios / Fetch wrappers)
-- constants/ -- App-wide constant values
-- helpers/ -- Generic helper utilities
-- schemas/ -- Validation schemas (Zod/Yup)
-- utils/ -- Miscellaneous reusable functions
-- config.ts -- Centralised app configuration & env parsing

🛡️ # middleware/ -- Route Middleware
Guards for auth, permissions, or pre-route hooks.

🔗 # providers/ -- Context Providers
Global React Context providers (AuthProvider, ThemeProvider, etc.).

🛣️ # routes/ -- Route Definitions
Typed route maps and lazy-loaded page components.

🗄️ # stores/ -- State Management
Global stores (Zustand, Redux Toolkit, or equivalent).

📝 # types/ -- TypeScript Types
Interfaces, enums, and shared type declarations.

🖌️ # Style Files
-- app.css -- Global styles & CSS variables
📱 # Root Components
-- root.tsx -- Root React component (mounts providers & routes)
-- routes.ts -- React-Router v7 route config helper
📦 # Config Artifacts
-- .react-router/ -- Auto-generated build artifacts from React-Router v7

📚 # docs/ -- Documentation
API docs, architecture notes, deployment guides.
🧪 # test/ -- Testing Suite
Unit & integration tests; setup.ts bootstraps the runner.
🌐 # public/ -- Static Assets
Images, icons, PWA manifest, robots.txt, etc.

🔧 Development Config
-- vite.config.ts -- Vite bundler configuration
-- react-router.config.ts -- Extra React-Router v7 settings
-- tsconfig.json -- TypeScript compiler options
-- eslint.config.js -- Linting & code-style rules

🎨 UI & Styling
-- components.json -- shadcn/ui component generator config
-- app.css -- (listed above) global style sheet

🐳 Deployment
-- Dockerfile -- Container build script
-- .dockerignore -- Exclude files from Docker build context
-- .env.example -- Environment-variable starter template

📦 Package Management
-- package.json -- Dependencies, scripts, project metadata
-- pnpm-lock.yaml -- Lockfile for repeatable, deterministic installs

🚀 Starter-Kit Highlights
✅ Already Included
-- React-Router v7 -- Modern file-based routing
-- TypeScript -- Static typing out-of-the-box
-- Component Library -- shadcn/ui + Tailwind ready
-- Vite -- Fast dev server & HMR
-- ESLint -- Consistent code quality rules
-- Comprehensive Docs -- /docs folder structure

🚀 Why This Structure Rocks
-- 📂 Modular -- Clear separation of concerns
-- 🔄 Reusable -- Hooks and components are shareable and portable
-- 📈 Scalable -- Easy to extend as features grow
-- 🧹 Clean -- Intuitive hierarchy for faster onboarding
-- 🎯 Feature-oriented -- Grouped by features, boosting maintainability

🛠️ Best Practices
-- Leverage barrel exports (index.ts) for cleaner imports
-- Separate business logic from presentation components
-- Follow consistent naming conventions (Pascal, camel, kebab)
-- Embrace TypeScript for end-to-end type safety
-- Adhere to the Single Responsibility Principle in every module

This structure is optimised for a React + TypeScript codebase using React-Router v7, with emphasis on scalability, maintainability and developer happiness.