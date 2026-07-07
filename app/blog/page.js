import Link from "next/link";
import { blogPosts } from "@/app/lib/blogPosts";

export const metadata = {
  title: "Blog | BurnRate",

  description:
    "Poradniki o kosztach posiadania samochodu, OC, EV, paliwie i planowaniu wydatków na auto.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <p className="text-cyan-400 font-semibold mb-3">
          Blog
        </p>

        <h1 className="text-5xl font-bold mb-4">
          Poradniki BurnRate
        </h1>

        <p className="text-slate-400 text-xl mb-12 max-w-3xl">
          Konkretne poradniki o realnych kosztach posiadania auta. Bez lania
          wody — przykłady, założenia i proste obliczenia.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-slate-900 border border-slate-800 hover:border-cyan-400 transition rounded-2xl p-8"
            >
              <div className="flex items-center justify-between gap-4 mb-4">
                <p className="text-cyan-400 font-semibold">
                  {post.category}
                </p>

                <p className="text-slate-500 text-sm">
                  {post.readingTime}
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-4">
                {post.title}
              </h2>

              <p className="text-slate-400 text-lg leading-8">
                {post.excerpt}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}