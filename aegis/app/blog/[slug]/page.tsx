import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

const dateFmt = new Intl.DateTimeFormat("ru-RU", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return { title: "Статья не найдена" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

function renderMarkdown(md: string) {
  const blocks = md.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="font-display text-2xl text-text mt-12 mb-6">
          {block.replace(/^## /, "")}
        </h2>
      );
    }
    if (/^\d+\.\s/.test(block)) {
      const items = block.split(/\n/).map((l) => l.replace(/^\d+\.\s/, ""));
      return (
        <ol key={i} className="list-decimal pl-6 space-y-3 my-6 text-text-muted">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ol>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split(/\n/).map((l) => l.replace(/^-\s/, ""));
      return (
        <ul key={i} className="list-disc pl-6 space-y-3 my-6 text-text-muted">
          {items.map((it, j) => (
            <li key={j}>{it}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-text-muted leading-relaxed my-6">
        {block}
      </p>
    );
  });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto px-6 pt-24 pb-32 md:pt-32">
      <Link href="/blog" className="btn-link mb-12 inline-block">
        ← Все статьи
      </Link>
      <div className="flex items-center gap-4 mb-6">
        <span className="mono-label text-accent text-[10px]">
          {post.category}
        </span>
        <span className="text-text-dim text-xs">
          {dateFmt.format(new Date(post.date))}
        </span>
        <span className="text-text-dim text-xs">
          · {post.readTime} мин чтения
        </span>
      </div>
      <h1 className="font-display text-text mb-12">{post.title}</h1>
      <div className="article-content">{renderMarkdown(post.content)}</div>
      <div className="mt-20 pt-10 border-t border-line">
        <Link href="/contact" className="btn btn-primary">
          Записаться на разбор
        </Link>
      </div>
    </article>
  );
}
