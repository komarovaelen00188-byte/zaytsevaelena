import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ArrowLeft, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Разработка позиционирования бренда и компании — Елена Зайцева",
  description:
    "Разработка позиционирования бренда, продукта и компании за 1 месяц. Этапы разработки стратегии позиционирования, что входит, цены. Твёрдый бизнес — 600+ проектов.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/positioning",
  },
};

const requests = [
  "Нужно донести смыслы: кто мы, наш образ, статус, почему клиенту нужно купить у нас по заявленной цене и почему нам можно доверять",
  "Сотрудники отвечают разное на вопрос «кто мы и что продаём» — нужна единая база для всей компании",
  "Нет уникальности, сливаемся с конкурентами. Менеджеры думают, что преимущества — «недорого» и «качественно». Нужна отстройка",
  "Продаём то же что и все, по тем же ценам — нужна концепция бренда и точки отличия",
  "Сайт не продаёт или приводит не тех клиентов — нужно сформулировать бренд так, чтобы маркетинг работал",
  "Сложный продукт — клиент не понимает ценность. Нужно объяснить сложное простым языком",
  "Нет бренда как такового: каждому подрядчику и партнёру заново объясняем кто мы, наши ценности и принципы",
  "Нужно сформировать образ компании для клиентов, партнёров и инвесторов",
];

const included = [
  "Ваш оффер — что предлагаете рынку, в чём основные выгоды",
  "Кто ваш клиент — аватары и сегменты целевой аудитории",
  "Почему нужно купить у вас — выгоды и преимущества предложения",
  "Чем отличаетесь от конкурентов — анализ до 7–8 игроков рынка",
  "Кто ключевые лица компании — регалии основателя и команды",
  "История бренда, миссия, ценности, принципы",
  "Почему вам можно доверять — кейсы, цифры, награды",
  "Портфолио как фактор доверия",
  "Сильное рыночное позиционирование компании — ёмко и лаконично",
];

const steps = [
  { num: "01", who: "Вместе", text: "Бриф и сбор первичной информации о бизнесе" },
  { num: "02", who: "Я", text: "Анализ ЦА и конкурентов" },
  { num: "03", who: "Вместе", text: "Глубокое интервью: распаковка, гипотезы, идеи" },
  { num: "04", who: "Я", text: "Разработка позиционирования" },
  { num: "05", who: "Вместе", text: "Презентация проекта и обсуждение" },
  { num: "06", who: "Я", text: "Правки (до 3 пакетов) и согласование текста" },
  { num: "07", who: "Дизайнер", text: "Графическое оформление презентации" },
];

const noPositioning = [
  "Разработка и управление позиционированием занимает в 2–10 раз больше времени — смыслы не согласованы, каждый подрядчик начинает с нуля",
  "Долгая адаптация сотрудников и сложности делегирования — каждому нужно объяснять компанию заново",
  "Отдел продаж теряет конверсию — менеджеры не знают ни ЦА, ни конкурентов, ни концепцию продаж",
  "Слишком много переделок и коммуникаций — нет документа, на который можно опереться при создании сайта, КП, презентаций",
];

const otherServices = [
  { href: "/services/strategy", label: "Стратегия", description: "Маркетинговая дорожная карта для роста бизнеса" },
  { href: "/services/prototype", label: "Прототип / структура сайта", description: "Смысловая упаковка и структура продающего сайта" },
  { href: "/services/research", label: "Исследование ЦА", description: "Глубинные интервью и опросы целевой аудитории" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка позиционирования бренда",
  provider: { "@type": "Person", name: "Елена Зайцева", url: "https://zaytsevaelena.ru" },
  description: "Разработка системы позиционирования компании, бренда и продукта. Этапы: анализ ЦА и конкурентов, интервью, разработка, дизайн. Результат — презентация 10 разворотов.",
  url: "https://zaytsevaelena.ru/services/positioning",
};

export default function PositioningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">

        {/* Назад */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          На главную
        </Link>

        {/* Блок 1 — Герой */}
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Срок: от 1 месяца
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Разработка позиционирования бренда за 1 месяц
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Позиционирование — фундаментальный маркетинговый документ компании и продукта. Разработаю систему позиционирования: кто вы, для кого работаете, чем отличаетесь от конкурентов и почему клиент должен купить именно у вас.
          </p>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Результат — презентация 10 разворотов в дизайне. Дизайн разрабатывается в подарок.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Блок 2 — С какими задачами обращаются */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            С какими задачами обращаются
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requests.map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl border border-border bg-card">
                <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 3 — Кейсы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Реализованные проекты
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { title: "Позиционирование для производителя барных станций", result: "Маркетинг, который приносит клиентов уже 3 года" },
              { title: "Позиционирование логистической компании", result: "Разработка стратегии позиционирования продукта для международного рынка" },
              { title: "Разработка позиционирования компании в сфере инжиниринга", result: "Отстройка от конкурентов и рост конверсии сайта" },
            ].map((c, i) => (
              <div key={i} className="flex flex-col p-5 rounded-2xl border border-border bg-card">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl mb-4 flex items-center justify-center border border-border">
                  <span className="text-xs text-muted-foreground">Фото проекта</span>
                </div>
                <h3 className="font-semibold text-sm mb-2">{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{c.result}</p>
                <Link href="/cases" className="inline-flex items-center gap-1 text-xs text-primary hover:underline mt-3">
                  Смотреть кейс <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 4 — Что входит */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что входит в разработку позиционирования компании
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 5 — Этапы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Этапы разработки стратегии позиционирования
          </h2>
          <div className="space-y-3">
            {steps.map((step) => (
              <div key={step.num} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card">
                <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">{step.num}</span>
                <p className="text-sm text-muted-foreground flex-1">{step.text}</p>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                  step.who === "Я" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                }`}>
                  {step.who}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 6 — Если нет позиционирования */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что происходит, если позиционирования нет
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {noPositioning.map((item, i) => (
              <div key={i} className="flex items-start gap-3 p-5 rounded-2xl border border-destructive/20 bg-destructive/5">
                <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 7 — Другие услуги */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Возможно, вас заинтересуют другие услуги
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{s.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.description}</p>
                <span className="text-primary text-xs mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Блок 8 — Елена */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                Привет, я Елена.{" "}
                <span className="text-primary">Маркетолог</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                600+ реализованных проектов в твёрдых нишах: строительство, логистика, производство, инжиниринг, ремонт, поставки, проектирование, медицина, консалтинг.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Твёрдому бизнесу помогаю сделать понятным, почему клиентам нужно купить у вас.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-primary/20 mb-2">Е</div>
                <p className="text-xs text-muted-foreground">Фото появится здесь</p>
              </div>
            </div>
          </div>
        </div>

        {/* Блок 9 — CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 md:p-14 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-primary/8 blur-3xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            Давайте обсудим ваш проект
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Расскажите о задаче — вместе разберёмся, чем я могу помочь.
          </p>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
          >
            Написать мне
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </>
  );
}
