/**
 * @type {import('next').NextConfig}
 *
 * Static Export Configuration for GitHub Pages
 * =============================================
 * - output: "export" generates a fully static site in the /out folder
 * - images.unoptimized: true is required since GitHub Pages doesn't support Next.js image optimization
 * - trailingSlash: true ensures proper routing on GitHub Pages
 *
 * Deployment with GitHub Actions:
 * 1. Push this repo to GitHub
 * 2. Go to Settings > Pages > Source > GitHub Actions
 * 3. Create .github/workflows/deploy.yml with:
 *
 *    name: Deploy to GitHub Pages
 *    on:
 *      push:
 *        branches: [main]
 *    permissions:
 *      contents: read
 *      pages: write
 *      id-token: write
 *    jobs:
 *      build:
 *        runs-on: ubuntu-latest
 *        steps:
 *          - uses: actions/checkout@v4
 *          - uses: pnpm/action-setup@v2
 *            with:
 *              version: 9
 *          - uses: actions/setup-node@v4
 *            with:
 *              node-version: 20
 *              cache: pnpm
 *          - run: pnpm install
 *          - run: pnpm build
 *          - uses: actions/upload-pages-artifact@v3
 *            with:
 *              path: out
 *      deploy:
 *        needs: build
 *        runs-on: ubuntu-latest
 *        environment:
 *          name: github-pages
 *          url: ${{ steps.deployment.outputs.page_url }}
 *        steps:
 *          - id: deployment
 *            uses: actions/deploy-pages@v4
 */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
