# QA Task Checklist
RULE should look premium and elegant, check visually

1. Start local server cleanly (`next dev`) and ensure no stale lock/process.
2. Run route smoke test for key pages (`/`, `/products`, `/projects`, `/contact`, etc.) and capture non-200 responses.
3. Run link audit for internal assets/pages to identify real 404s.
4. Run `npm run build` for compile/runtime errors.
5. Run `npm run lint` and classify blocking errors vs warnings.
6. Run `npm test` and capture failing tests with root causes.
7. Perform typography audit:
   - font loading and fallbacks
   - heading hierarchy (`h1`/`h2` consistency)
   - line-height/contrast/readability issues
8. Deliver a final QA report with:
   - confirmed issues
   - exact file paths/routes
   - severity
   - fix recommendations
