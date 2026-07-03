import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Прототип продающего сайта за 3 дня — Елена Зайцева",
  description:
    "Разработка прототипа продающего сайта: тексты, структура, оффер, УТП и отстройка. Анализ ЦА и конкурентов, защита прототипа, передача дизайнеру. Опыт 800+ проектов.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/prototype",
  },
};

const stats = [
  "800+ проектов",
  "90% клиентов — маркетологи и агентства",
  "10% — бизнес",
];

const showcase = [
  {
    image: "/images/prototip_logistica_atrans1.png",
    caption: "Прототип сайта логистической компании",
  },
  {
    image: "/images/prototip_logistica_atrans2.png",
    caption: "Сайт, разработанный по прототипу",
  },
];

const requests = [
  "Продали сайт под ключ — нужен прототип сайта",
  "Упаковать и запустить продукт с нуля",
  "Уже есть сайт, но он не продаёт — нужно поработать с заголовками, текстами, смыслами",
  "Уже есть сайт, но он приводит не тех клиентов — нужно проработать оффер, УТП, отстройку",
  "Продукт сложный, технический, люксовый или с длинным циклом сделки — нужен вдумчивый и нестандартный прототип",
];

const workSteps = [
  {
    title: "Бриф и погружение",
    text: "Созваниваемся, забираем вводные: продукт, цели, источники трафика. Если есть действующий сайт — запрашиваем доступ к метрикам и записям звонков отдела продаж.",
  },
  {
    title: "Анализ ЦА и конкурентов",
    text: "Разбираем 5–10 конкурентов из выдачи и рекламы: офферы, структуру, УТП. Сегментируем аудиторию, выписываем боли, возражения и критерии выбора по каждому сегменту.",
  },
  {
    title: "Структура и офферы",
    text: "Собираем логику страницы: путь пользователя от первого экрана до заявки. Формулируем оффер, УТП и отстройку. Согласовываем с вами до отрисовки — чтобы не переделывать готовый прототип.",
  },
  {
    title: "Прототип",
    text: "Отрисовываем текстово-графический прототип: все тексты, блоки, формы, кнопки, расположение элементов. Готовый макет для передачи дизайнеру.",
  },
  {
    title: "Защита и передача в работу",
    text: "Презентуем прототип устно, отвечаем на вопросы, вносим правки. После утверждения остаёмся на связи с вашим дизайнером и разработчиком, пока сайт не выйдет в продакшн.",
  },
];

const results = [
  "Прототип (Figma / PDF или другой формат) — со всеми текстами, блоками и формами, готовый к передаче дизайнеру",
  "Анализ конкурентов и ЦА отдельным документом — пригодится для рекламных кампаний и креативов",
  "Сформулированные оффер, УТП и отстройка от конкурентов",
  "Устная защита прототипа — перед вами или вашим конечным клиентом",
  "Поддержка на этапе дизайна и разработки: ответы на вопросы дизайнера, чтобы смыслы не потерялись при отрисовке",
];

const forAgencies = [
  "Звоним и согласовываем прототип с вашим клиентом — нейросеть это за вас не сделает",
  "Защита прототипа перед вашим конечным клиентом — под вашим брендом или от своего имени, как удобнее",
  "Соблюдение дедлайнов: вы называете срок клиенту — гибко подстраиваемся",
];

const reviews = [
  "/images/otziv_na_prototip1.jpg",
  "/images/otziv_na_prototip2.jpg",
  "/images/otziv_na_prototip4.jpg",
  "/images/otziv_na_prototip5.jpg",
  "/images/otziv_na_prototip6.jpg",
];

const relatedCases = [
  {
    href: "/cases/prototype-renovation",
    title: "Прототип компании по ремонту квартир",
    result: "Переход из среднего сегмента в премиум",
    image: "/images/prototip_website_neapol.png",
  },
  {
    href: "/cases/prototype-it-product",
    title: "Прототип сайта для IT-продукта",
    result: "Сложный продукт стал понятным",
    image: "/images/prototip_saita_po_dlya_inansovogo_ucheta1.png",
  },
];

const tariffs = [
  {
    title: "Прототип лендинга",
    price: "от 35 000 ₽",
    term: "срок от 3 дней",
    text: "Одностраничник под трафик: анализ, структура, тексты, прототип, защита.",
  },
  {
    title: "Прототип многостраничного сайта",
    price: "от 35 000 ₽",
    term: "срок от 4 дней",
    text: "Цена рассчитывается от количества страниц.",
  },
  {
    title: "Прототип + упаковка продукта с нуля",
    price: "от 100 000 ₽",
    term: "",
    text: "Когда нужны исследования, позиционирование, оффер, финмодель. Примеры: упаковка франшиз с нуля или производителей оборудования.",
  },
];

const faq: {
  q: string;
  a: string[];
  bullets?: string[];
  examples?: { title: string; text: string }[];
}[] = [
  {
    q: "Что такое прототип сайта?",
    a: [
      "Технически прототип сайта — это текстово-графический документ с проектом будущего сайта. Включает все тексты, формы, блоки, кнопки и расположение элементов. Готовый макет для передачи дизайнеру.",
      "Фактически прототип — это маркетинговая проработка бизнеса на основе анализа конкурентов, ЦА и ниши. Продуманная методология продаж, вшитая в сайт: тексты и смыслы, которые ведут пользователя от первого экрана до кнопки «оставить заявку».",
    ],
  },
  {
    q: "В чём ценность прототипа сайта?",
    a: [],
    bullets: [
      "Маркетинговая проработка продукта и бизнеса, упакованная в прототип сайта",
      "Снижение затрат на разработку: дизайнер видит, сколько блоков и баннеров отрисовать, а разработчик — какой функционал заложить",
      "Заранее продуманный путь пользователя",
      "Согласованные на этапе прототипа структура и тексты исключают переделки на этапе дизайна и разработки",
    ],
  },
  {
    q: "Почему нельзя просто сделать прототип нейросетями?",
    a: [
      "Прототип можно сделать нейросетями самостоятельно, если это делает маркетолог-копирайтер и точно знает, какой прототип должен получиться на выходе. А для этого предварительно нужно сделать анализ ЦА и анализ конкурентов.",
      "Если прототип делает немаркетолог по одному промту — вряд ли сайт будет продавать.",
    ],
  },
  {
    q: "В каких случаях нельзя доверять разработку сайта нейросетям?",
    a: [],
    examples: [
      {
        title: "Пример 1",
        text: "У вас есть сайт, который не продавал или не давал желаемой конверсии. Нужно посмотреть поведение пользователей (метрики, тепловые карты) — этого нейросеть не видит. И прослушать звонки отдела продаж, чтобы получить реальные возражения и потребности клиентов — этого нейросеть не запросит, какой промт ни вводи.",
      },
      {
        title: "Пример 2",
        text: "В нише есть крупные и небольшие клиенты. Боли и потребности у них разные. Нужно строить офферы на крупного клиента и добавлять преимущества именно для него: крупный спрашивает оборот, чтобы убедиться в надёжности; мелкий — про рассрочку, скидки, окупаемость. С такими задачами нейросеть пока не работает.",
      },
      {
        title: "Пример 3",
        text: "Нейросеть не защитит прототип устно перед заказчиком, не ответит на все вопросы, не позвонит за утверждением и не будет держать коммуникацию с дизайнером, если у него возникнут вопросы.",
      },
    ],
  },
];

const otherServices = [
  {
    href: "/services/positioning",
    label: "Разработка позиционирования",
    description: "Кто вы, чем отличаетесь и почему купить у вас",
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
  name: "Разработка прототипа продающего сайта",
  provider: {
    "@type": "Person",
    name: "Елена Зайцева",
    url: "https://zaytsevaelena.ru",
  },
  description:
    "Прототип продающего сайта: тексты, структура, оффер, УТП и отстройка на основе анализа ЦА и конкурентов. Защита прототипа и передача дизайнеру.",
  url: "https://zaytsevaelena.ru/services/prototype",
};

export default function PrototypePage() {
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

        {/* Герой */}
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Срок: от 3 дней
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Прототип продающего сайта за 3 дня
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            С текстами, структурой и маркетинговой проработкой — готовый к
            передаче дизайнеру. Проектирую продающий сайт под трафик: с учётом
            анализа ЦА, конкурентов, метрик и бизнеса.
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

        {/* Прототип и сайт */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {showcase.map((item) => (
            <div
              key={item.image}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={item.image}
                alt={item.caption}
                className="w-full h-auto"
              />
              <div className="px-5 py-4 text-center">
                <p className="text-sm font-medium text-foreground">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Задачи */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Задачи, с которыми обращаются чаще всего
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {requests.map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl border border-border bg-card"
              >
                <span className="text-primary font-bold text-sm flex-shrink-0 mt-0.5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Как проходит работа */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Как проходит работа над прототипом
          </h2>
          <div className="space-y-4">
            {workSteps.map((step, i) => (
              <div
                key={i}
                className="flex gap-5 p-6 rounded-2xl border border-border bg-card"
              >
                <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Что вы получите */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что входит в результат
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {results.map((item) => (
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

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-4">
            <h3 className="font-semibold text-base">
              Отдельно для маркетологов и агентств
            </h3>
            <ul className="space-y-3">
              {forAgencies.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Отзывы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Отзывы
          </h2>
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4">
            {reviews.map((src) => (
              <img
                key={src}
                src={src}
                alt="Отзыв о работе над прототипом"
                className="w-full h-auto rounded-2xl border border-border mb-4 break-inside-avoid"
              />
            ))}
          </div>
        </div>

        {/* Кейсы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Кейсы
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedCases.map((c) => (
              <Link
                key={c.href}
                href={c.href}
                className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/30 hover:bg-primary/5 transition-all"
              >
                <div className="aspect-[16/9] bg-gradient-to-br from-primary/10 to-primary/5 border-b border-border overflow-hidden">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="font-semibold text-base mb-2 group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {c.result}
                  </p>
                  <span className="text-primary text-sm mt-3 inline-flex items-center gap-1">
                    Смотреть кейс <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          <Link
            href="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Все кейсы <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Тарифы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Тарифы и цена разработки прототипа
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {tariffs.map((t) => (
              <div
                key={t.title}
                className="flex flex-col p-6 rounded-2xl border border-border bg-card"
              >
                <h3 className="font-semibold text-base mb-3">{t.title}</h3>
                <div className="text-2xl font-bold text-primary">{t.price}</div>
                {t.term && (
                  <div className="text-xs text-muted-foreground mt-1">
                    {t.term}
                  </div>
                )}
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 flex-1">
                  {t.text}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground">
            Дополнительно: проработка мобильных версий.
          </p>
        </div>

        {/* FAQ */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details
                key={item.q}
                className="group rounded-2xl border border-border bg-card p-6"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-4 space-y-3 text-sm text-muted-foreground leading-relaxed">
                  {item.a.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {item.bullets && (
                    <ul className="space-y-2">
                      {item.bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                      ))}
                    </ul>
                  )}
                  {item.examples?.map((ex) => (
                    <div key={ex.title} className="space-y-1">
                      <p className="font-medium text-foreground">{ex.title}</p>
                      <p>{ex.text}</p>
                    </div>
                  ))}
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Другие услуги */}
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

        {/* CTA */}
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 md:p-14 text-center">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] rounded-full bg-primary/8 blur-3xl" />
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 max-w-2xl mx-auto">
            Нужен прототип продающего сайта?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Расскажите о продукте и задаче — обсудим структуру, сроки и стоимость.
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
