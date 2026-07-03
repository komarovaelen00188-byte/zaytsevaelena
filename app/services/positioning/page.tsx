import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Разработка позиционирования бренда за 1 месяц — Елена Зайцева",
  description:
    "Разработка позиционирования бренда: кто вы, чем отличаетесь от конкурентов и почему покупать у вас. Презентация 10 разворотов — основа для сайта, КП и скриптов. 600+ проектов.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/positioning",
  },
};

const stats = ["600+ проектов в твёрдых нишах", "10+ лет в маркетинге"];

const tasks = [
  {
    title: "«Мы сливаемся с конкурентами»",
    text: "Клиент не видит разницы между вами и другими. Менеджеры называют преимуществами «недорого, качественно, гарантия» — как у всех. Нужна отстройка и уникальность в глазах клиента.",
  },
  {
    title: "«Сотрудники не знают, что мы продаём»",
    text: "В компании 50, 100, 500 человек — и на вопрос «кто мы и что делаем» каждый отвечает по-своему. Нужен единый документ для обучения отдела продаж и адаптации новых сотрудников.",
  },
  {
    title: "«Сайт не продаёт или приводит не тех клиентов»",
    text: "Маркетинговые материалы не доносят ценность. Нужно сформулировать бренд так, чтобы реклама и сайт приводили целевых клиентов.",
  },
  {
    title: "«У нас сложный продукт»",
    text: "Клиент не понимает ни продукт, ни его ценность. Нужно объяснить сложное простым языком — без потери статуса и экспертности.",
  },
  {
    title: "«Каждому подрядчику объясняем всё заново»",
    text: "Бренд существует, но нигде не оцифрован. Дизайнеру, копирайтеру, партнёру, дилеру — каждый раз рассказываете с нуля, кто вы и в чём ваши ценности.",
  },
  {
    title: "«Готовимся к росту»",
    text: "Запуск новых направлений, активное продвижение, масштабирование, выход в сети — нужна единая чёткая картина бренда, на которую ляжет вся дальнейшая работа.",
  },
];

const uses = [
  "Для отдела продаж — как внутренний документ обучения и адаптации: кто мы, что продаём, почему у нас покупают",
  "Для маркетинга — как основу всех материалов: сайта, КП, буклетов, лифлетов, презентаций, статей, скриптов",
  "Для дилеров и партнёров — кто мы, в чём наши сильные стороны, кому и что мы продаём",
];

const insideDoc = [
  "Оффер — что вы предлагаете рынку и в чём выгоды предложения",
  "Кто ваш клиент — сегменты ЦА и ключевые обращения к каждому",
  "Почему нужно купить у вас — выгоды и преимущества",
  "Отстройка от конкурентов — что вы делаете такого, чтобы выбрали вас (клиент не слеп, он тоже сравнивает)",
  "Ключевые лица компании — регалии основателя и команды как фактор доверия",
  "История и концепция бренда — вехи, идея, миссия, принципы",
  "Доказательства — кейсы, проекты, цифры, награды, портфолио",
  "Рыночное позиционирование — ёмко и лаконично суть предложения",
];

const included = [
  "Бриф и получение первичной информации о бизнесе",
  "Анализ ниши и конкурентов в интернете (7–8 компаний) по открытым источникам",
  "Анализ ЦА: потребности, слабые стороны, предпочтения, сегментация",
  "Аватары клиентов и ключевые обращения к каждой группе ЦА",
  "Поиск и выделение конкурентных преимуществ компании",
  "Ключевой посыл потребителю: чем занимается компания и зачем создана",
  "Миссия, характер и ценности бренда — эмоциональные и рациональные",
  "Разработка уникальности и отстройки от конкурентов",
  "УТП — предложение, которое выгодно отличает вас на рынке",
  "Портрет первого лица компании: кто он, его история, почему ему можно доверять",
  "История бренда: идея создания, вехи, случаи, связанные с компанией",
  "Сильное рыночное позиционирование — суть предложения ёмко и лаконично",
  "Графическое оформление презентации дизайнером",
];

const noPositioning = [
  "Сайт, лого, визуал и презентации делаются в 2–10 раз дольше — смыслы не согласованы, каждый подрядчик придумывает своё",
  "Отдел продаж теряет конверсию: менеджеры не знают ни конкурентов, ни ЦА, ни концепцию продаж",
  "Долгая адаптация новых сотрудников, сложно делегировать — каждому объясняете компанию с нуля",
  "Бесконечные коммуникации и переделки: нет паспорта бренда, на который можно опереться",
];

const steps = [
  { num: "01", text: "Бриф и сбор первичной информации", who: "Разработчик + вы" },
  { num: "02", text: "Анализ ЦА и конкурентов", who: "Разработчик" },
  {
    num: "03",
    text: "Сессия: 18 точек отстройки, гипотезы, показ готового анализа конкурентов",
    who: "Разработчик + вы",
  },
  { num: "04", text: "Глубокое интервью", who: "Разработчик + вы" },
  { num: "05", text: "Разработка позиционирования", who: "Разработчик" },
  { num: "06", text: "Презентация проекта", who: "Разработчик + вы" },
  { num: "07", text: "Правки — до 3 пакетов включено", who: "Разработчик" },
  { num: "08", text: "Утверждение", who: "Вы" },
  { num: "09", text: "Графическое оформление", who: "Дизайнер" },
];

const caveats = [
  "Дизайн — строгий и лаконичный, как в примерах выше. Разработка логотипа, подбор фирменных цветов, 3D-графика и рекламные ролики в услугу не входят",
  "Печать — отдаём исходники, готовые к печати, но сами не печатаем",
  "Анализ конкурентов — проводится по открытым источникам в интернете",
];

const otherServices = [
  {
    href: "/services/prototype",
    label: "Прототип сайта",
    description: "Смысловая упаковка и структура продающего сайта",
  },
  {
    href: "/services/research",
    label: "Исследование ЦА",
    description: "Глубинные интервью и опросы целевой аудитории",
  },
  {
    href: "/services/strategy",
    label: "Стратегия",
    description: "Маркетинговая дорожная карта для роста бизнеса",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка позиционирования бренда",
  provider: {
    "@type": "Person",
    name: "Елена Зайцева",
    url: "https://zaytsevaelena.ru",
  },
  description:
    "Разработка системы позиционирования компании, бренда и продукта: анализ ЦА и конкурентов, интервью, разработка, дизайн. Результат — презентация 10 разворотов.",
  url: "https://zaytsevaelena.ru/services/positioning",
};

export default function PositioningPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        {/* Назад */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          На главную
        </Link>

        {/* Блок 1 — Герой */}
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Срок: от 1 месяца
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Разработка позиционирования бренда
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Кто вы, чем отличаетесь от конкурентов и почему покупать нужно у вас —
            в одном документе. Основа для сайта, КП, скриптов отдела продаж и всех
            маркетинговых материалов.
          </p>
          <div className="flex flex-wrap gap-2">
            {stats.map((s) => (
              <span
                key={s}
                className="inline-flex items-center px-3 py-1.5 rounded-full border border-border bg-card text-sm text-muted-foreground"
              >
                {s}
              </span>
            ))}
          </div>
          <Link
            href="/contacts"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
          >
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Блок 2 — Изображение */}
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
          <img
            src="/images/pozicionirovanie_kto.png"
            alt="Позиционирование бренда"
            className="w-full h-auto"
          />
        </div>

        {/* Блок 3 — Задачи */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            6 задач, которые решает позиционирование
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tasks.map((item, i) => (
              <div
                key={i}
                className="flex flex-col gap-2 p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 4 — Как выглядит результат */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Как выглядит результат
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Позиционирование — это презентация на 10 разворотов в строгом
            лаконичном дизайне. Её можно распечатать и использовать:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {uses.map((item) => (
              <div
                key={item}
                className="p-5 rounded-2xl border border-border bg-card text-sm text-muted-foreground leading-relaxed"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 space-y-4">
            <h3 className="font-semibold text-base">Внутри документа</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {insideDoc.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Блок 5 — Что входит */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что входит в разработку
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card"
              >
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground">
            *Разработчик может незначительно менять пункты в процессе работы, если
            этого требует логика проекта.
          </p>
        </div>

        {/* Блок 6 — Ценность */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Ценность
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
              <h3 className="font-semibold text-base text-primary">
                С позиционированием
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Разрабатывается один раз — работает годами. Готовая основа для
                сайта, КП, презентаций, статей, блога, скриптов отдела продаж,
                буклетов и сувенирной продукции.
              </p>
            </div>
            <div className="rounded-2xl border border-destructive/20 bg-destructive/5 p-6 space-y-3">
              <h3 className="font-semibold text-base">Без позиционирования</h3>
              <ul className="space-y-3">
                {noPositioning.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <AlertTriangle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Блок 7 — Этапы */}
        <div className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-3">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
              Этапы работы
            </h2>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              Срок: от 1 месяца
            </span>
          </div>
          <div className="space-y-3">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card"
              >
                <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">
                  {step.num}
                </span>
                <p className="text-sm text-muted-foreground flex-1">
                  {step.text}
                </p>
                <span
                  className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${
                    step.who === "Разработчик"
                      ? "bg-primary/10 text-primary"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {step.who}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 8 — Нюансы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что важно знать заранее
          </h2>
          <div className="space-y-3">
            {caveats.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-card"
              >
                <CheckCircle2 className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Блок 9 — Другие услуги */}
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
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">
                  {s.label}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">
                  {s.description}
                </p>
                <span className="text-primary text-xs mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Подробнее <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Блок 10 — CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 md:p-14 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-primary/8 blur-3xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            Обсудим ваш проект?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Расскажите о компании и задаче — за 20 минут разбора скажу, решит ли её
            позиционирование, и предложу план работы.
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
