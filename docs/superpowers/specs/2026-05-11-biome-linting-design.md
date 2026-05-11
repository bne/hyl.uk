# Biome Linting Setup — Design Spec

**Date:** 2026-05-11  
**Status:** Approved

## Goal

Add JS linting + formatting and CSS formatting to the hyl.uk Hugo static site using Biome. Linting runs locally via CLI and auto-formats on save in VS Code. No CI enforcement.

## Scope

Target files: `static/js/*.js` and `static/css/*.css`. Hugo templates and the generated `public/` directory are excluded.

## Files to Create

### `package.json`

Minimal Node package manifest. Installs `@biomejs/biome` as a dev dependency and exposes two scripts:

- `lint` — check all targeted files for errors
- `lint:fix` — auto-fix safe issues (formatting, safe lint rules)

No build pipeline. Hugo handles all site building independently.

### `biome.json`

Biome configuration:

- **Linter:** enabled, using the `recommended` ruleset for JS
- **Formatter:** enabled for JS and CSS; consistent indentation (2 spaces) and quote style (double quotes for JS)
- **Files:** `include` scoped to `["static/js/**", "static/css/**"]`; `ignore` excludes `public/` and `node_modules/`
- **CSS:** formatter enabled; linter enabled in recommended mode (property validation)

### `.vscode/settings.json`

- Sets `[javascript]` and `[css]` default formatter to `biomejs.biome`
- Enables `editor.formatOnSave: true` scoped to JS and CSS

### `.vscode/extensions.json`

- Recommends `biomejs.biome` so VS Code prompts collaborators to install it

## Workflow After Setup

```
npm install          # one-time: installs biome
npm run lint         # check for errors
npm run lint:fix     # auto-fix safe issues
# save a .js or .css file in VS Code → formats automatically
```

## Out of Scope

- CI/GitHub Actions enforcement (not wanted)
- Hugo template linting
- CSS property-level linting beyond Biome's built-in recommended rules (Stylelint not used)
