import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Sparkles, Search, PenTool, Presentation, Compass, MessagesSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги",
  description: "Стратегия, позиционирование, исследования ЦА, контент и прототипы лендингов для роста бизнеса.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services",
  },
};

const services = [
  {
    title: "Разработка позиционирования",
    description: "Формулирую, кто вы, зачем вы, почему вас выбирают и как это рассказать рынку.",
    href: "/services/positioning",
    icon: Compass,
  },
  {
    title: "Маркетинговая стратегия",
    description: "Собираю понятную дорожную карту роста: от оффера до коммуникаций и контента.",
    href: "/services/strategy",
    icon: Sparkles,
  },
  {
    title: "Исследование ЦА",
    description: "Провожу интервью, опросы и анализ, чтобы понимать мотивацию и боли клиента.",
    href: "/services/research",
    icon: Search,
  },
  {
    title: "Контент-стратегия",
    description: "Собираю систему контента, которая помогает продавать и удерживать внимание.",
    href: "/services/content-marketing",
    icon: PenTool,
  },
  {
    title: "Прототипы и структуры",
    description: "Строю логичную структуру сайта и лендинга, чтобы он продавал, а не просто смотрелся.",
    href: "/services/prototype",
    icon: Presentation,
  },
  {
    title: "Контент для соцсетей",
    description: "Подбираю сообщение, тональность и форматы, которые усиливают доверие и вовлечение.",
    href: "/services/social-content",
    icon: MessagesSquare,
  },
];

export default function ServicesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-3xl mb-16">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">Услуги</p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
          Услуги, которые помогают бизнесу говорить понятнее и продавать увереннее
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Работаю на стыке стратегии, смысла и коммуникации. Помогаю не просто «сделать красиво», а создать понятную систему роста.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Link
              key={service.href}
              href={service.href}
              className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:bg-primary/5 transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Icon className="w-5 h-5 text-primary" />
              </div>
              <h2 className="font-semibold text-lg mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                {service.description}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                Подробнее <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
