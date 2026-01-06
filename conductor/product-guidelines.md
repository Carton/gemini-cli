# Product Guidelines

## Tone & Voice

- **Professional & Concise**: Communicate with precision and clarity. Avoid
  fluff, but ensure instructions are actionable.
- **Developer-Centric**: Use terminology familiar to developers (e.g., "repo,"
  "commit," "diff") without over-simplification.
- **Helpful & Guide-like**: When errors occur, provide not just the error
  message but actionable steps to resolve it.

## Coding Standards & Conventions

- **TypeScript First**: Strict typing is mandatory. Avoid `any` where possible;
  use `unknown` with narrowing instead.
- **Functional Paradigm**: Prefer functional components (React) and pure
  functions over classes, except where necessary for stateful integrations.
- **Async/Await**: Use modern async patterns. Avoid callback hell.
- **Testing**: Tests are co-located with source files (`*.test.ts`). Maintain
  high coverage for critical paths.

## Design Philosophy

- **UNIX-like**: Small tools that do one thing well.
- **Interactive**: Leverage `ink` for rich, interactive terminal UIs rather than
  just static text streams.
- **Local-First**: Prioritize local execution and privacy. Only send necessary
  data to the LLM.

## Documentation

- **Keep it Updated**: Documentation lives alongside code. Update docs in the
  same PR as feature changes.
- **Example-Driven**: Provide concrete CLI command examples for features.
