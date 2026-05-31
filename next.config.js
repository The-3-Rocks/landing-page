const withMDX = require("@next/mdx")();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
  swcMinify: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/articles/antimony-mining-in-morocco-khenifra-region-applications",
        destination: "/articles/antimony-mining-morocco",
        permanent: true,
      },
      {
        source: "/articles/moroccan-barite-drilling-grade-industrial-applications",
        destination: "/articles/moroccan-barite",
        permanent: true,
      },
      {
        source: "/articles/moroccan-cobalt-battery-grade-superalloy-applications",
        destination: "/articles/moroccan-cobalt",
        permanent: true,
      },
      {
        source: "/process",
        destination: "/our-process",
        permanent: true,
      },
    ];
  },
  experimental: {
    optimizePackageImports: ["react-icons", "date-fns"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
             key: "Permissions-Policy",
             value: "camera=(), microphone=(), geolocation=(), interest-cohort=()"
          },
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups"
          }
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
