import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Фоновое свечение */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">

          {/* Заголовок */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight animate-fade-up">
            Контент & Маркетинг
          </h1>

          {/* Подзаголовок */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed">
            Изменив УТП, позиционирование, смыслы и контент в своём бизнесе,
            вы можете кратно увеличить продажи на том же количестве трафика.
          </p>

          {/* CTA */}
          <div className="animate-fade-up">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
            >
              Обсудить проект
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
