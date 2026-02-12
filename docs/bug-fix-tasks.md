# Bug-Fix Task Proposals

## 1) Fix TypeScript asset import failures (High)
- **Problem:** `npx tsc --noEmit` fails because TypeScript cannot resolve `*.jpg` and `*.png` imports used in App Router pages.
- **Impact:** CI/type-check pipelines fail and can block deployments.
- **Task:** Keep and maintain shared module declarations for static image imports in `src/types/assets.d.ts`.
- **Acceptance criteria:** `npx tsc --noEmit` passes without asset module resolution errors.

## 2) Re-enable or remove dead social sign-in code in sign-in form (Medium)
- **Problem:** `handleSocialSignIn` exists but social sign-in UI is commented out, leaving dead code and lint warnings.
- **Impact:** Confusing maintenance path and warning noise in CI lint output.
- **Task:** Either re-enable provider buttons (Google/GitHub) with UX states, or remove the unused handler until social login is shipped.
- **Acceptance criteria:** `npm run lint` reports zero warnings in `sign-in-form.tsx`.

## 3) Add an offline-safe build font strategy (Medium)
- **Problem:** `npm run build` fails in restricted/offline environments due to runtime fetches of Google-hosted Geist fonts.
- **Impact:** Non-deterministic builds in CI or private network environments.
- **Task:** Replace remote font fetches with locally hosted fonts via `next/font/local` or vendored assets.
- **Acceptance criteria:** Production build succeeds in offline CI runners.
