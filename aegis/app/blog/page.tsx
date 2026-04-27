import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog";

export const metadata: Metadata = {
  title: "Блог",
  description: "Статьи о методе, дисциплине, тренировках и восстановлении.",
};

const dateFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function BlogPage() {
  const posts = [...blogPosts].sort((a, b) =>
    a.date < b.date ? 1 : -1
  );

  return (
    <>
      <section className="max-w-7xl mx-auto px-6 pt-24 pb-16 md:pt-32 border-b border-line">
        <div className="mono-label text-text-muted mb-6">Блог</div>
        <h1 className="font-display text-text max-w-3xl">
          Заметки о методе, <span className="text-accent">привычках</span> и
          теле
        </h1>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="divide-y divide-line">
          {posts.map((p) => (
            <article key={p.slug} className="py-10 group">
              <Link href={`/blog/${p.slug}`} className="block">
                <div className="flex items-center gap-4 mb-4">
                  <span className="mono-label text-accent text-[10px]">
                    {p.category}
                  </span>
                  <span className="text-text-dim text-xs">
                    {dateFmt.format(new Date(p.date))}
                  </span>
                  <span className="text-text-dim text-xs">
                    · {p.readTime} мин чтения
                  </span>
                </div>
                <h2 className="font-display text-3xl text-text mb-3 group-hover:text-accent transition-colors">
                  {p.title}
                </h2>
                <p className="text-text-muted leading-relaxed max-w-2xl">
                  {p.excerpt}
                </p>
                <span className="btn-link mt-6 inline-block">Читать →</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
