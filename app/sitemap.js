import { blogPosts } from "@/app/lib/blogPosts";

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

  const staticPages = pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
  }));

  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticPages, ...blogPages];
}