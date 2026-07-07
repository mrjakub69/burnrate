import Link from "next/link";
import {
  blogPosts,
  getBlogPost,
} from "@/app/lib/blogPosts";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Artykuł nie istnieje | BurnRate",
      description: "Ten artykuł nie istnieje lub został usunięty.",
    };
  }

  return {
    title: `${post.title} | BurnRate`,
    description: post.excerpt,
  };
}

function renderBlock(block, index) {
  if (block.type === "heading") {
    return (
      <h2
        key={index}
        className="text-3xl font-bold text-white mt-10 mb-4"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "paragraph") {
    return (
      <p
        key={index}
        className="text-slate-300 text-xl leading-10"
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={index}
        className="space-y-3 text-slate-300 text-xl leading-9"
      >
        {block.items.map((item) => (
          <li key={item}>
            • {item}
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "calculation") {
    return (
      <div
        key={index}
        className="bg-slate-950 border border-slate-800 rounded-2xl p-6 text-cyan-400 text-xl leading-9 whitespace-pre-line font-semibold"
      >
        {block.text}
      </div>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  const post = getBlogPost(slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-slate-950 text-white p-8">
        <div className="max-w-4xl mx-auto">
          <p className="text-cyan-400 font-semibold mb-4">
            Blog BurnRate
          </p>

          <h1 className="text-4xl font-bold mb-4">
            Artykuł nie istnieje
          </h1>

          <p className="text-slate-400 text-xl">
            Ten artykuł został usunięty albo adres jest nieprawidłowy.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="text-cyan-400 font-semibold mb-6 inline-block hover:text-cyan-300 transition"
        >
          ← Blog BurnRate
        </Link>

        <div className="mb-10">
          <p className="text-cyan-400 font-semibold mb-3">
            {post.category}
          </p>

          <h1 className="text-5xl font-bold mb-5 leading-tight">
            {post.title}
          </h1>

          <p className="text-slate-500">
            {post.readingTime}
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8">
          <div className="space-y-7">
            {post.content.map((block, index) =>
              renderBlock(block, index)
            )}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-slate-950 border border-slate-800">
            <h2 className="text-2xl font-bold mb-3">
              Sprawdź własne dane
            </h2>

            <p className="text-slate-400 text-lg leading-8 mb-5">
              Najlepiej policzyć koszt auta na własnych założeniach:
              przebiegu, spalaniu, OC, serwisie, naprawach i utracie
              wartości.
            </p>

            <Link
              href={post.calculatorHref}
              className="inline-flex items-center justify-center bg-cyan-400 hover:bg-cyan-300 transition text-slate-950 font-bold px-7 py-4 rounded-2xl"
            >
              {post.calculatorLabel} →
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}