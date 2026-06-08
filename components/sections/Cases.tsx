import cases from "@/content/cases.json";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Cases() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Реализованные проекты
          </h2>
        </div>

        {/* Сетка кейсов — 3 колонки */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {/* Изображение */}
              <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center border-b border-border">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-xs text-muted-foreground">Изображение</span>
                )}
              </div>

              {/* Контент */}
              <div className="flex flex-col flex-1 p-6 gap-4">

                {/* Категория */}
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                  {item.category}
                </span>

                {/* Заголовок */}
                <h3 className="font-semibold text-base leading-snug">
                  {item.title}
                </h3>

                {/* Описание */}
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                  {item.description}
                </p>

                {/* Кнопка */}
                <Link
                  href={`/cases/${item.slug}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline mt-auto"
                >
                  Смотреть кейс
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
