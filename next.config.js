/** @type {import('next').NextConfig} */
const repo = 'betulcagril-portfolio';
const basePath =
  process.env.NODE_ENV === 'production' ? `/${repo}` : '';

const nextConfig = {
  output: 'export',
  basePath,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

module.exports = nextConfig;
