import Link from "next/link";
import { notFound } from "next/navigation";

import { blogPosts, getBlogPost } from "@/app/lib/blogPosts";

const baseUrl = "https://burnrate-six.vercel.app";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: "Nie znaleziono artykułu | BurnRate",
    };
  }

  return {
    title: `${post.title} | BurnRate`,
    description: post.excerpt,
  };
}

function renderBlock(block, index) {
  if (block.type === "paragraph") {
    return (
      <p
        key={index}
        className="text-slate-300 text-lg leading-8"
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "heading") {
    return (
      <h2
        key={index}
        className="text-3xl font-bold text-white mt-12 mb-5"
      >
        {block.text}
      </h2>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        key={index}
        className="space-y-3 my-6"
      >
        {block.items.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-slate-300 text-lg leading-8"
          >
            <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-cyan-400" />

            <span>
              {item}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "calculation") {
    return (
      <div
        key={index}
        className="my-7 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5"
      >
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-cyan-400">
          Obliczenie
        </p>

        <pre className="whitespace-pre-wrap font-mono text-base leading-7 text-white">
          {block.text}
        </pre>
      </div>
    );
  }

  return null;
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const articleUrl = `${baseUrl}/blog/${post.slug}`;

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    inLanguage: "pl-PL",
    articleSection: post.category,
    url: articleUrl,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    author: {
      "@type": "Organization",
      name: "BurnRate",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "BurnRate",
      url: baseUrl,
    },
  };

  const otherPosts = blogPosts
    .filter((item) => item.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="min-h-screen bg-slate-950 text-white px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleJsonLd),
        }}
      />

      <article className="max-w-4xl mx-auto">
        <Link
          href="/blog"
          className="inline-flex mb-10 text-slate-400 hover:text-cyan-400 transition"
        >
          ← Wróć do bloga
        </Link>

        <header className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="text-sm font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
              {post.category}
            </span>

            <span className="text-sm text-slate-500">
              {post.readingTime}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            {post.title}
          </h1>

          <p className="text-xl text-slate-400 leading-8">
            {post.excerpt}
          </p>
        </header>

        {post.calculatorHref && (
          <section className="mb-12 rounded-3xl border border-slate-800 bg-slate-900 p-7">
            <p className="text-cyan-400 font-semibold mb-3">
              Policz to na własnych danych
            </p>

            <p className="text-slate-400 leading-7 mb-5">
              Artykuł pokazuje przykład i sposób liczenia. Najdokładniejszy
              wynik uzyskasz po wpisaniu własnych danych w kalkulatorze.
            </p>

            <Link
              href={post.calculatorHref}
              className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300 transition"
            >
              {post.calculatorLabel}
            </Link>
          </section>
        )}

        <div className="space-y-6">
          {post.content.map((block, index) =>
            renderBlock(block, index)
          )}
        </div>

        {post.calculatorHref && (
          <section className="mt-16 rounded-3xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-3xl font-bold mb-4">
              Powiązany kalkulator
            </h2>

            <p className="text-slate-400 leading-7 mb-6">
              Użyj kalkulatora, żeby sprawdzić wynik dla własnego auta,
              przebiegu, cen paliwa, OC albo kosztów trasy.
            </p>

            <Link
              href={post.calculatorHref}
              className="inline-flex rounded-xl bg-cyan-400 px-5 py-3 font-bold text-slate-950 hover:bg-cyan-300 transition"
            >
              {post.calculatorLabel}
            </Link>
          </section>
        )}

        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-6">
            Inne poradniki
          </h2>

          <div className="grid gap-4">
            {otherPosts.map((item) => (
              <Link
                key={item.slug}
                href={`/blog/${item.slug}`}
                className="rounded-2xl border border-slate-800 bg-slate-900 p-5 hover:border-cyan-400 transition"
              >
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                    {item.category}
                  </span>

                  <span className="text-xs text-slate-500">
                    {item.readingTime}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {item.title}
                </h3>

                <p className="text-slate-400 leading-7">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </main>
  );
}