export default function sitemap() {
  const baseUrl = "https://burnrate-six.vercel.app";

  const pages = [
    "",
    "/kalkulator",
    "/oc",
    "/ev",
    "/trasa",
    "/blog",
    "/metodologia",
    "/o-projekcie",
    "/polityka-prywatnosci",
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));
}