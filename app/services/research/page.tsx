import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Исследование ЦА через опросы клиентской базы (кастдев)",
  description:
    "Исследование целевой аудитории через опросы клиентской базы: почему покупают и почему не покупают. Отчёт с выводами, записи разговоров, точки роста. 900+ проектов.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/research",
  },
};

const tasks = [
  {
    title: "Истинные причины решений",
    text: "Почему клиент купил — и почему после первой покупки больше не вернулся. Не гипотезы, а ответы самих людей.",
  },
  {
    title: "Как вас видят на самом деле",
    text: "Какие ваши преимущества клиенты знают, а о каких даже не догадываются. Каких конкурентов рассматривают как альтернативу — и почему.",
  },
  {
    title: "Сильные и слабые места",
    text: "Что в продукте, сервисе и коммуникации работает на вас, а что отталкивает — по всем точкам контакта.",
  },
];

const otherUses = [
  {
    title: "Отзывы",
    text: "Живую речь респондентов (с их согласия) превращают в отзывы и размещают на площадках.",
  },
  {
    title: "Стимул к покупке",
    text: "Сам звонок в ряде случаев возвращает клиента: напоминает о компании, акции, рассрочке.",
  },
  {
    title: "Проверка гипотез",
    text: "Один в компании уверен в факте, второй сомневается — опрос ставит точку.",
  },
  {
    title: "Аватары под таргет",
    text: "Ответы про соцсети, радио, хобби и профессию складываются в портреты сегментов для рекламы.",
  },
  {
    title: "Новые рекламные связки",
    text: "Если респонденты массово говорят «слушаем авторадио» — вот и канал.",
  },
  {
    title: "Донесение месседжа",
    text: "В ходе разговора аудитории можно рассказать: «мы не только про товары, мы про сервис», «мы единственные, кто…».",
  },
  {
    title: "Тест будущих акций",
    text: "«Что нужно сделать, чтобы вы нас рекомендовали? А если мы запустим вот такую программу?»",
  },
];

const steps = [
  {
    title: "Договор и согласование ТЗ",
    text: "Утверждаем, какие вопросы задаём и какие сегменты базы берём в работу.",
  },
  {
    title: "Подготовка базы",
    text: "Вы выгружаете контакты из CRM, мы заносим их в рабочую таблицу.",
  },
  {
    title: "Первичное согласие",
    text: "Берём у базы согласие на звонок: предварительным звонком, анкетой в Telegram-канале или другим способом под ваш формат. Опрашиваем только тех, кто согласился.",
  },
  {
    title: "Звонки по сценарию",
    text: "Каждый звонок идёт по утверждённому скрипту, записывается и фиксируется в текстовый документ: вопросы слева — ответы респондента справа.",
  },
  {
    title: "Корректировка на ходу",
    text: "Если после первых 10–30 звонков видно, что вопрос лишний, вызывает негатив или не раскрывает истину — сообщаем вам и правим сценарий, а не прогоняем всю базу по нерабочему скрипту.",
  },
  {
    title: "Отчёт и выводы",
    text: "Завершаем обзвон, готовим письменный отчёт, при необходимости защищаем его устно на сессии.",
  },
];

const deliverables = [
  "Подробный письменный отчёт — понятный и информативный, с выводами и рекомендациями",
  "Устная защита отчёта (1 раз)",
  "Записи всех разговоров",
  "Таблица с тезисной текстовой фиксацией каждого разговора",
  "Прозрачность на каждом шаге: любой звонок можно прослушать, любой ответ — найти в документе",
];

const requirements = [
  "Заполненный маркетинговый бриф — подойдёт любой готовый: для сайта, пиарщиков, агентства. Если брифа нет — нужно заполнить",
  "База контактов для обзвона",
  "Согласование опросника",
  "Решение по количеству респондентов",
];

const faq = [
  {
    q: "От чего зависят сроки?",
    a: "От скорости предоставления базы и её качества. Если в базе нелояльные контакты, разговоры не складываются. Если данные нужны срочно — по договорённости готовим промежуточный отчёт после отработки 50% базы.",
  },
  {
    q: "Какие звонки не идут в расчёт?",
    a: "Звонки, где респондент отреагировал негативно, бросил трубку, не договорил или многократно переносил разговор, — в общую статистику и в стоимость не включаются: информативности в них нет. Если таких звонков критическая масса, отражаем это в отчёте отдельно — это тоже данные о вашей базе.",
  },
  {
    q: "Сколько стоит?",
    a: "Стоимость зависит от количества звонков и длительности разговора (а она — от объёма опросника). Пришлите задачу — рассчитаем и предложим оптимальный объём выборки.",
  },
  {
    q: "Как оформляется работа?",
    a: "Типовой договор на маркетинговые услуги.",
  },
];

const bio = [
  "Более 10 лет в маркетинге: опросы, исследования, маркетинговые и коммуникационные стратегии, привлечение клиентов, сайты, книги для бизнеса",
  "Более 900 проектов по РФ для бизнесов с оборотом от 0 до 1,5 млрд ₽",
  "60+ ниш: товарный бизнес, логистика, строительство, производство, медицина, юруслуги, IT и другие",
];

const otherServices = [
  { href: "/services/positioning", label: "Разработка позиционирования", description: "Кто вы, чем отличаетесь и почему купить у вас" },
  { href: "/services/prototype", label: "Прототип сайта", description: "Смысловая упаковка и структура продающего сайта" },
  { href: "/services/strategy", label: "Стратегия", description: "Маркетинговый план и последовательность действий" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Исследование ЦА через опросы клиентской базы",
  provider: { "@type": "Person", name: "Елена Зайцева", url: "https://zaytsevaelena.ru" },
  description:
    "Исследование целевой аудитории через опросы клиентской базы (кастдев): почему покупают и не покупают, отчёт с выводами и рекомендациями, записи разговоров.",
  url: "https://zaytsevaelena.ru/services/research",
};

export default function ResearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-24">
        {/* Назад */}
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" />
          На главную
        </Link>

        {/* Герой */}
        <div className="space-y-6">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            Кастдев · опрос клиентской базы
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Исследование ЦА через опросы клиентской базы
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Почему покупают и почему не покупают. Лучший способ что-то узнать о своих клиентах — спросить у них напрямую.
          </p>
          <Link href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Задачи */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Задачи, которые закрывает исследование
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {tasks.map((item) => (
              <div key={item.title} className="flex flex-col gap-2 p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold text-base">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            На основе этих данных принимается решение о корректировке маркетинговой стратегии: офферы, каналы, позиционирование, работа отдела продаж.
          </p>
        </div>

        {/* Как ещё используют данные */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Как ещё компании используют данные опросов
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherUses.map((item) => (
              <div key={item.title} className="flex flex-col gap-1.5 p-5 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold text-sm">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Почему сторонний подрядчик */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Почему опросы делает сторонний подрядчик, а не штатный сотрудник
          </h2>
          <div className="rounded-2xl border border-border bg-card p-6 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Главная ценность исследования — объективность. Штатный сотрудник вольно или невольно может «натягивать» ответы на нужный результат. Сторонний исполнитель фиксирует то, что аудитория сказала, — без интерпретаций и приукрашивания.
            </p>
            <p>
              После опроса вы сравниваете две картины: что о вас думают клиенты — и что вы думаете о том, что думают клиенты. Расхождения между ними и есть точки роста.
            </p>
          </div>
        </div>

        {/* Этапы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Этапы работ
          </h2>
          <div className="space-y-4">
            {steps.map((step, i) => (
              <div key={i} className="flex gap-5 p-6 rounded-2xl border border-border bg-card">
                <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-base">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img
              src="/images/zvonki_issledovaniya1.webp"
              alt="Фиксация звонков исследования в Google Docs"
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
            Почему фиксация в Google Docs, а не в Excel или CRM? Маркетологу заказчика так удобнее контролировать работу: видно, сделаны ли звонки и что ответили люди. А поиском по документу можно за секунды найти конкретного респондента по номеру телефона.
          </p>
        </div>

        {/* Что вы получаете */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что вы получаете на выходе
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {deliverables.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Что понадобится от вас */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что понадобится от вас для старта
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {requirements.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Бонус для прошедших опрос</span> — сертификат, бонусные баллы или подарок. Поощрение заметно повышает долю согласившихся ответить.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Частые вопросы
          </h2>
          <div className="space-y-3">
            {faq.map((item) => (
              <details key={item.q} className="group rounded-2xl border border-border bg-card p-6">
                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-semibold text-base [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <ChevronDown className="w-4 h-4 flex-shrink-0 text-muted-foreground transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>

        {/* Кто проводит */}
        <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight leading-tight">
                Кто проводит исследование
              </h2>
              <p className="text-primary font-semibold">Елена Зайцева — маркетолог</p>
              <ul className="space-y-3">
                {bio.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="overflow-hidden rounded-2xl border border-primary/20 aspect-[3/4]">
              <img
                src="/images/elena_zaytseva_conten_marketig_prototip.webp"
                alt="Елена Зайцева — маркетолог"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Другие услуги */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Возможно, вас заинтересуют другие услуги
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherServices.map((s) => (
              <Link key={s.href} href={s.href} className="group flex flex-col p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all">
                <h3 className="font-semibold text-sm mb-2 group-hover:text-primary transition-colors">{s.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1">{s.description}</p>
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
            Узнать, что на самом деле думают ваши клиенты?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Пришлите задачу — рассчитаем объём выборки и предложим план исследования.
          </p>
          <Link href="/contacts" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
            Написать мне
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </>
  );
}
