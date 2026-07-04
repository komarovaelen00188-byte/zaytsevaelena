import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug, formatDate } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://zaytsevaelena.ru/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      url: `https://zaytsevaelena.ru/blog/${slug}`,
      images: post.featuredImage ? [post.featuredImage] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    author: {
      "@type": "Person",
      name: "Елена Зайцева",
      url: "https://zaytsevaelena.ru",
    },
    publisher: {
      "@type": "Person",
      name: "Елена Зайцева",
    },
    ...(post.featuredImage
      ? { image: `https://zaytsevaelena.ru${post.featuredImage}` }
      : {}),
    url: `https://zaytsevaelena.ru/blog/${slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-2xl mx-auto px-4 sm:px-6 py-16 md:py-24">
        {/* Назад */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Все статьи
        </Link>

        {/* Категории */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {post.categories.map((cat) => (
            <span
              key={cat}
              className="px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
            >
              {cat}
            </span>
          ))}
        </div>

        {/* Заголовок */}
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight mb-4">
          {post.title}
        </h1>

        {/* Дата */}
        <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-12 pb-8 border-b border-border">
          <Calendar className="w-4 h-4" />
          {formatDate(post.publishedAt)}
        </div>

        {/* Обложка */}
        {post.featuredImage && (
          <div className="overflow-hidden rounded-2xl border border-border mb-12">
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        {/* Контент */}
        <div className="prose prose-neutral dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-code:text-primary max-w-none">
          <MDXRemote source={post.content} />
        </div>

        {/* Подпись автора */}
        <div className="mt-16 pt-8 border-t border-border flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg flex-shrink-0">
            Е
          </div>
          <div>
            <div className="font-semibold text-sm">Елена Зайцева</div>
            <div className="text-xs text-muted-foreground">
              Маркетолог · Стратег · Практик
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
