/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});
const nextTranslate = require('next-translate-plugin');

const { i18n } = require('./next-i18next.config');

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  i18n,
  env: {
    API_INTERNAL: 'http://localhost:3000',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  // The starter code load resources from `public` folder with `router.basePath` in React components.
  // So, the source code is "basePath-ready".
  // You can remove `basePath` if you don't need it.
  reactStrictMode: true,
});

module.exports = nextTranslate({
  webpack: (config, { isServer, webpack }) => {
    return config;
  },
});
