import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  { href: "/services/strategy", label: "Стратегия" },
  { href: "/services/communication-strategy", label: "Коммуникационная стратегия" },
  { href: "/services/research", label: "Исследование ЦА" },
  { href: "/services/prototype", label: "Прототип / структура сайта" },
  { href: "/services/presentation", label: "Презентация компании / бренда" },
  { href: "/services/positioning", label: "Разработка позиционирования" },
  { href: "/services/social-content", label: "Контент в социальные сети" },
  { href: "/services/book", label: "Книга под ключ" },
  { href: "/services/speech", label: "Речь выступления" },
  { href: "/services/reels", label: "Сценарии рилс" },
  { href: "/services/content-marketing", label: "Контент-маркетинг" },
];

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Основные услуги
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {services.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="group flex items-center justify-between gap-3 rounded-2xl border border-border bg-card px-5 py-4 hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
            >
              <span className="font-medium text-sm">{service.label}</span>
              <ArrowRight className="w-4 h-4 text-primary shrink-0 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
            </Link>
          ))}
        </div>

        {/* Кнопка «Все услуги» */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-border hover:border-primary/40 hover:bg-primary/5 font-medium text-sm transition-all"
          >
            Все услуги
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
