export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://burnrate-six.vercel.app/sitemap.xml",
  };
}