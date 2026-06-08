import Link from "next/link";
import { getAllPosts, formatDate } from "@/lib/mdx";
import { ArrowRight, Calendar } from "lucide-react";

export function BlogPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="blog" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Последние статьи
            </h2>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline flex-shrink-0"
          >
            Все статьи
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col p-6 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all duration-300"
            >
              {/* Категории */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {post.categories.slice(0, 2).map((cat) => (
                  <span
                    key={cat}
                    className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Заголовок */}
              <h3 className="font-semibold text-base leading-snug mb-3 group-hover:text-primary transition-colors flex-1">
                {post.title}
              </h3>

              {/* Описание */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">
                {post.description}
              </p>

              {/* Дата */}
              <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <Calendar className="w-3.5 h-3.5" />
                {formatDate(post.publishedAt)}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
