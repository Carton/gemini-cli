# Technology Stack

## Core Technologies

- **Language**: TypeScript (Node.js >= 20.0.0)
- **Runtime**: Node.js (with ESM support)

## Frontend / CLI Interface

- **React**: UI library.
- **Ink**: React for interactive command-line interfaces.
- **Yargs**: For command-line argument parsing.

## Build & Infrastructure

- **esbuild**: Main bundler for high-speed builds.
- **NPM Workspaces**: Monorepo management.
- **Husky**: Git hooks management.

## Quality & Testing

- **Vitest**: Modern testing framework.
- **ESLint**: Linter (using Flat Config).
- **Prettier**: Code formatting.
- **Testing Libraries**: `ink-testing-library`, `msw` (Mock Service Worker),
  `memfs`.

## Key Dependencies

- **simple-git**: Git automation.
- **node-pty**: Terminal emulation for interactive shell tools.
