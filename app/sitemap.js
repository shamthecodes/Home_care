export default function sitemap() {
  return [
    {
      url: "https://home-care-rouge-kappa.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://home-care-rouge-kappa.vercel.app",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
