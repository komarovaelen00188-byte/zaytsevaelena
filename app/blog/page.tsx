import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";
import { Calendar, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Блог",
  description:
    "Статьи о маркетинге, позиционировании, стратегии и исследовании аудитории. Без воды — только практика.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/blog",
  },
  openGraph: {
    title: "Блог — Елена Зайцева",
    description: "Статьи о маркетинге без воды: методы, кейсы, разборы.",
    url: "https://zaytsevaelena.ru/blog",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  // Собираем все уникальные категории
  const allCategories = Array.from(
    new Set(posts.flatMap((p) => p.categories))
  );

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      {/* Заголовок */}
      <div className="max-w-2xl mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Блог
        </h1>
        <p className="text-muted-foreground text-lg">
          Пишу о маркетинге без воды: методы, кейсы, разборы. Подписывайтесь —
          публикую регулярно.
        </p>
      </div>

      {/* Категории */}
      {allCategories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-10">
          <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium">
            Все
          </span>
          {allCategories.map((cat) => (
            <span
              key={cat}
              className="px-3 py-1.5 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:border-primary/40 cursor-pointer transition-colors"
            >
              {cat}
            </span>
          ))}
        </div>
      )}

      {/* Список статей */}
      {posts.length === 0 ? (
        <p className="text-muted-foreground">Статьи скоро появятся.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.categories.map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              <h2 className="font-semibold text-lg leading-snug mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h2>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-4">
                {post.description}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3.5 h-3.5" />
                  {formatDate(post.publishedAt)}
                </div>
                <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Читать <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
