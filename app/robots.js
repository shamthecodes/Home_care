export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yourdomain.vercel.app/sitemap.xml",
  };
}
