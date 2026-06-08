import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Обо мне",
  description:
    "Елена Зайцева — маркетолог с 5+ годами опыта. Помогаю бизнесу с позиционированием, стратегией, исследованиями ЦА и контент-стратегией.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/about",
  },
};

const skills = [
  "Разработка позиционирования",
  "Маркетинговые стратегии",
  "Прототипы лендингов",
  "Исследования ЦА (опросы, интервью, JTBD)",
  "Контент-стратегии",
  "Анализ конкурентов",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Елена Зайцева",
  jobTitle: "Маркетолог",
  url: "https://zaytsevaelena.ru",
  sameAs: [],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Левая колонка */}
          <div className="space-y-8">
            <div>
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
                Обо мне
              </p>
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-6">
                Привет, я Елена
              </h1>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Я маркетолог — помогаю компаниям разобраться, кто они, для кого работают
                  и как об этом рассказать. Без общих слов и шаблонных решений.
                </p>
                <p>
                  За 5+ лет работала с малым и средним бизнесом, стартапами и личными
                  брендами. Специализируюсь на позиционировании и стратегии — том фундаменте,
                  на котором держится весь маркетинг.
                </p>
                <p>
                  Верю, что хороший маркетинг — это прежде всего понимание клиента.
                  Поэтому всегда начинаю с исследований, а не с красивых презентаций.
                </p>
              </div>
            </div>

            <Link
              href="/contacts"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
            >
              Написать мне
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Правая колонка */}
          <div className="space-y-8">
            {/* Аватар-плейсхолдер */}
            <div className="w-full aspect-square max-w-sm rounded-3xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
              <div className="text-8xl font-bold text-primary/30">Е</div>
            </div>

            {/* Навыки */}
            <div>
              <h2 className="font-semibold text-base mb-4">Чем занимаюсь</h2>
              <ul className="space-y-3">
                {skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
