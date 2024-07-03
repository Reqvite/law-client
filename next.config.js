/** @type {import('next').NextConfig} */
const CircularDependencyPlugin = require('circular-dependency-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

function getFrontUrl(dev) {
  return dev ? 'http://localhost:3000' : 'https://law-client-demo.vercel.app';
}

function getApiUrl(dev) {
  return dev ? 'http://localhost:1400' : 'https://strapi-9z7b.onrender.com';
}

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/articles',
        destination: '/articles/all',
        permanent: true
      },
      {
        source: '/resource-hub/literature',
        destination: '/resource-hub/literature/all',
        permanent: true
      },
      {
        source: '/resource-hub',
        destination: '/resource-hub/literature/all',
        permanent: true
      }
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*'
      },
      {
        protocol: 'http',
        hostname: 'localhost'
      }
    ]
  },
  webpack: (config, {dev, webpack}) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __FRONT_URL__: JSON.stringify(getFrontUrl(dev)),
        __API_URL__: JSON.stringify(getApiUrl(dev)),
        __PROJECT__: JSON.stringify('frontend')
      })
    );

    if (dev) {
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true
      });
    }

    return config;
  }
});
