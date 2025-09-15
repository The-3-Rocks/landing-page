/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.the-3rocks.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/ _next/static/"],
      },
    ],
  },
};
