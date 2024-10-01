/** @type {import('next').NextConfig} */
const CircularDependencyPlugin = require('circular-dependency-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});

function getFrontUrl() {
  return process.env.NEXT_PUBLIC_FRONT_URL;
}

function getApiUrl() {
  return process.env.NEXT_PUBLIC_API_URL;
}

module.exports = withBundleAnalyzer({
  async redirects() {
    return [
      {
        source: '/laws',
        destination: '/laws/all',
        permanent: true
      },
      {
        source: '/articles',
        destination: '/articles/all',
        permanent: true
      },
      {
        source: '/faculties',
        destination: '/faculties/all',
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
