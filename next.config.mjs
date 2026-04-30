/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages
  output: 'export',

  // basePath is set at build-time via env var (empty for local dev, /repo-name for GH Pages)
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Required for static export — disables the Next.js Image Optimization server
  images: {
    unoptimized: true,
  },

  // Append trailing slash so /about → /about/index.html (works correctly on GH Pages)
  trailingSlash: true,

  reactStrictMode: true,
};

export default nextConfig;
