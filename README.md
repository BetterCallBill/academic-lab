# academic-lab

Academic research lab website built with Astro, Tailwind CSS, and Alpine.js. Deployed on Cloudflare Pages.

## Requirements

- [Node.js](https://nodejs.org/) v18+
- [pnpm](https://pnpm.io/) v9+

## Getting started

```bash
pnpm install
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start dev server at `localhost:4321` |
| `pnpm build` | Build for production into `dist/` |
| `pnpm preview` | Preview the production build locally |

## Deployment

Deployed to Cloudflare Pages. The `dist/` folder is the build output (`pages_build_output_dir` in `wrangler.toml`).
