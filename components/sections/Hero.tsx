import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-20 pb-24 md:pt-28 md:pb-32">
      {/* Фоновые линии */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_55%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border border-border/70" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">

          {/* Заголовок */}
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight animate-fade-up">
            Делаешь сайт под рекламу?
          </h1>

          {/* Подзаголовок */}
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed">
            Сделаю прототип сайта за 3 дня — будет продавать. Сэкономьте время! Разберу ЦА, скрипты ОП, продукт, конкурентов и выдам готовую структуру.
          </p>

          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-up leading-relaxed">
            800+ проектов из твердых ниш. Беру на себя коммуникацию с клиентом до полного согласования. Вы получаете - готовый для передачи в дизайн макет.
          </p>

          {/* CTA */}
          <div className="animate-fade-up">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
            >
              Передать проект
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
