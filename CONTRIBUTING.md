# Contributing

## Scope

`act-tmpl` is a single-action template repository. The active runtime surface is the GitHub Action contract in `action.yml`, the TypeScript boundaries under `src/`, and the release-managed package output in `dist/`.

## Local Verification

`just` is the canonical local entrypoint for repository tasks.

The repository-owned verification and maintenance recipes are:

- `just fix`: runs `npm run format` and `npm run lint:fix`
- `just check`: runs `npm run format:check`, `npm run lint`, and `npm run typecheck`
- `just test`: runs `npm test`
- `just package`: runs `npm run package`
- `just clean`: removes repository-local generated artifacts under `.tmp`, `coverage`, and `node_modules`

`package.json` retains the atomic npm scripts behind these recipes:

- `npm run format`
- `npm run format:check`
- `npm run lint`
- `npm run lint:fix`
- `npm test`
- `npm run typecheck`
- `npm run package`

## Distribution Boundary

`dist/` remains the JavaScript runtime loaded by `action.yml`. Development integrates on `dev`. Release promotion flows from `dev` to `main`, and the release workflow regenerates `dist/` on `main` immediately before it creates release tags.

## Release Model

The repository versions one action. Consumer-facing tags follow `vX.Y.Z`, and the moving major tag for workflows is `v1`.
The release workflow runs from `main`, validates the requested semver tag, regenerates `dist/`, commits the release distribution when needed, and then publishes the GitHub Release while moving the corresponding major tag.

## Documentation

`README.md` is the public front door. `docs/` owns task-oriented usage, durable architecture, and configuration reference surfaces.
