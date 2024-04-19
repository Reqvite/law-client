/** @type {import('next').NextConfig} */
const CircularDependencyPlugin = require("circular-dependency-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig = {};

function getFrontUrl(dev) {
  return dev
    ? "http://localhost:3000"
    : "http://localhost:3000";
}

function getApiUrl(dev) {
  return dev ? "http://localhost:1400" : "http://localhost:1400";
}

module.exports = withBundleAnalyzer({
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      },
      {
        protocol: "http",
        hostname: "localhost",
      },
    ],
  },
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }
  ) => {
    config.plugins.push(
      new webpack.DefinePlugin({
        __FRONT_URL__: JSON.stringify(getFrontUrl(dev)),
        __API_URL__: JSON.stringify(getApiUrl(dev)),
        __PROJECT__: JSON.stringify("frontend"),
      })
    );

    if (dev) {
      new CircularDependencyPlugin({
        exclude: /node_modules/,
        failOnError: true,
      });
    }

    return config;
  },
});
