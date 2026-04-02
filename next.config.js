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
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.googlesyndication.com fundingchoicesmessages.google.com *.fundingchoicesmessages.google.com consent.google.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data: *.googletagmanager.com *.google-analytics.com *.googlesyndication.com; font-src 'self' data:; connect-src 'self' *.google-analytics.com *.googlesyndication.com https://ep1.adtrafficquality.google https://*.firebasedatabase.app https://*.firebaseio.com wss://*.firebaseio.com https://*.googleapis.com https://*.supabase.co; frame-src 'self' *.googlesyndication.com *.doubleclick.net https://www.google.com/recaptcha/ https://recaptcha.google.com/;"
          }
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
