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
             value: "default-src 'self' https://fundingchoicesmessages.google.com; script-src 'self' 'unsafe-eval' 'unsafe-inline' 'unsafe-hashes' *.googletagmanager.com *.googlesyndication.com *.adtrafficquality.google fundingchoicesmessages.google.com *.fundingchoicesmessages.google.com consent.google.com https://www.google.com/recaptcha/ https://www.gstatic.com/recaptcha/ https://accounts.google.com; style-src 'self' 'unsafe-inline' 'unsafe-hashes' https://fonts.googleapis.com; style-src-elem 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' blob: data: https://fundingchoicesmessages.google.com *.googletagmanager.com *.google-analytics.com *.googlesyndication.com; font-src 'self' data: https://fonts.gstatic.com; connect-src 'self' *.google-analytics.com *.googlesyndication.com *.adtrafficquality.google fundingchoicesmessages.google.com *.fundingchoicesmessages.google.com https://*.firebasedatabase.app https://*.firebaseio.com wss://*.firebaseio.com https://*.googleapis.com https://*.supabase.co https://accounts.google.com; frame-src 'self' *.googlesyndication.com *.doubleclick.net https://www.google.com/recaptcha/ https://recaptcha.google.com/; worker-src 'self' blob:; child-src 'self' blob:;"
          }
        ],
      },
    ];
  },
};

module.exports = withMDX(nextConfig);
