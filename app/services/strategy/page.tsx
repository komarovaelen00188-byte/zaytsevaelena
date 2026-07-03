import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowLeft, CheckCircle2, Quote } from "lucide-react";

export const metadata: Metadata = {
  title: "Разработка маркетингового плана",
  description:
    "Разработка маркетингового плана под бизнес: точки роста, слабые места, инструменты и пошаговая последовательность действий от точки А к точке Б. План на 2–3 года вперёд.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/strategy",
  },
};

const outcomes = [
  "Понятная пошаговая инструкция: что делать, в какой последовательности, сколько это стоит и какого результата можно достичь",
  "Выделенные точки роста — что позволит увеличить прибыль, средние чеки и количество клиентов",
  "Выявленные слабые места, которые нужно устранить, чтобы повысить конкурентоспособность",
];

const clientQuotes = [
  { text: "Нам нужно увеличить оборот с 600 млн до 900 млн ₽", niche: "Кровельные материалы" },
  { text: "Хотим забрать 95% рынка и увеличить оборот в 3 раза", niche: "Организация спортивных мероприятий" },
  { text: "Производим продукты, которые нужно спозиционировать и продать по всей РФ. Сейчас у нас нет никакого продвижения", niche: "БАДы" },
  { text: "Сейчас мои услуги стоят 3 000 – 20 000 ₽. Что делать, чтобы продавать их за 50 000 – 200 000 ₽ и стать № 1 в нише?", niche: "Психология" },
  { text: "С продажами всё хорошо, продаём на всю РФ — нужна узнаваемость и медийность", niche: "Одежда на маркетплейсах" },
  { text: "Продавали оптом, открываем второе производство и хотим в розницу — маржа выше. Распишите план работ: внедрять будет наш маркетолог, с вас — что ему делать", niche: "Производитель мебели" },
  { text: "Мы продаём меньше и дешевле, чем конкуренты. Что делать?", niche: "Одежда" },
  { text: "Сделайте систему действий, чтобы я мог зайти в любой другой город и быстро развернуть в нём бизнес", niche: "Масштабирование" },
];

const always = [
  "Анализ конкурентов и анализ ЦА",
  "Инструменты интернет-маркетинга с подробным описанием каждого: например, для сайта — рекомендуемая структура; для соцсетей — структура и акции; для КП — кому оно и что должно быть внутри",
  "Механики работы с инструментами",
  "Инструменты гео-маркетинга, PR, формирования имиджа и репутации",
  "Решения, которые вы можете внедрить своими силами",
  "Решения, за которыми можно обратиться к подрядчикам",
  "Последовательность действий",
];

const sometimes = [
  "Акции с wow-эффектом",
  "Безбюджетные решения — как привлечь клиентов без затрат на рекламу",
  "Коллаборации с другими бизнесами — для роста среднего чека, трафика и сарафанного радио",
  "Предложения по созданию новых продуктов",
  "Креативные решения для дальнейшего роста",
];

const benefits = [
  {
    title: "Подборка решений, которые сработают",
    text: "Без слива бюджета и времени на тесты. Опыт во всех нишах: знаем, что и как работает, а что не даёт результата.",
  },
  {
    title: "Понятная структура действий от точки А к точке Б",
    text: "Системность, последовательность и понимание точки Б. Без плана маркетинг делается хаотично: сделали одно — потом ничего, и результат слабый.",
  },
  {
    title: "Крутые идеи",
    text: "Свежий незамыленный взгляд, экспертность, мышление.",
  },
  {
    title: "Один раз заказал — получил план на 2–3 года вперёд",
    text: "Разовое решение, которое запускает действия. Без плана нет действий, а значит — потеря позиций, конкуренты дышат в спину, упущенные возможности.",
  },
];

const steps = [
  { num: "01", title: "Заполнение брифа", text: "Клиент заполняет бриф.", who: "Вы" },
  { num: "02", title: "Предварительный анализ", text: "Маркетолог делает анализ конкурентов и ЦА по информации из брифа, если это возможно.", who: "Маркетолог" },
  { num: "03", title: "Созвон на 30–60 минут", text: "Задаём вопросы, чтобы получить недостающую информацию: средние чеки по каналам продаж, какой канал приносит больше прибыли, маржинальность продуктов, финансовые показатели, опыт прошлых акций и пр.", who: "Вместе" },
  { num: "04", title: "Разработка маркетингового плана", text: "Маркетолог разрабатывает ряд решений в соответствии с поставленной задачей.", who: "Маркетолог" },
  { num: "05", title: "Zoom-сессия*", text: "Встречаемся в Zoom, маркетолог презентует план. Затем отправляет документ с планом для детального ознакомления.", who: "Вместе" },
  { num: "06", title: "Знакомство с планом", text: "Клиент и его команда изучают план и выбирают инструменты, которые хотят реализовать.", who: "Вы" },
  { num: "07", title: "Обратная связь от клиента", text: "Клиент направляет вопросы или говорит: «А мы уже кое-что из плана внедряем».", who: "Вы" },
  { num: "08", title: "Правки в план", text: "Иногда вносим правки-уточнения. Обычно маркетолог заранее знает, где будут правки, и предупреждает об этом ещё на Zoom-сессии.", who: "Маркетолог" },
  { num: "09", title: "Реализация плана", text: "Заказчик реализует план своими силами, с подрядчиками или делегирует часть работ нам.", who: "Вы" },
];

const otherServices = [
  { href: "/services/positioning", label: "Разработка позиционирования", description: "Кто вы, чем отличаетесь и почему купить у вас" },
  { href: "/services/prototype", label: "Прототип сайта", description: "Смысловая упаковка и структура продающего сайта" },
  { href: "/services/research", label: "Исследование ЦА", description: "Глубинные интервью и опросы целевой аудитории" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Разработка маркетингового плана",
  provider: { "@type": "Person", name: "Елена Зайцева", url: "https://zaytsevaelena.ru" },
  description:
    "Индивидуальный маркетинговый план: анализ ЦА и конкурентов, инструменты, механики и пошаговая последовательность действий для роста бизнеса.",
  url: "https://zaytsevaelena.ru/services/strategy",
};

export default function StrategyPage() {
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
            План на 2–3 года вперёд
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Разработка маркетингового плана
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Комплекс решений, идей и инструментов, которые помогут увеличить прибыль или решить любую другую задачу. Все решения разрабатываются индивидуально под ваш бизнес.
          </p>
          <Link href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
            Обсудить проект
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Что на выходе */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что вы получаете на выходе
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {outcomes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-5 rounded-2xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Что говорят клиенты */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            С какими задачами приходят
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {clientQuotes.map((q, i) => (
              <div key={i} className="flex flex-col gap-3 p-6 rounded-2xl border border-border bg-card">
                <Quote className="w-5 h-5 text-primary/40" />
                <p className="text-sm text-foreground leading-relaxed flex-1">{q.text}</p>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                  {q.niche}
                </span>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 space-y-3">
            <h3 className="font-semibold text-base">
              Даже маркетологи заказывают план
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Однажды маркетинговый план у нас заказало агентство, специализирующееся на продвижении ресторанных бизнесов. Зачем маркетинговый план тем, кто сам занимается маркетингом? «Мы слишком глубоко в своей нише, взгляд замылился — нужна чёткая структурная стратегия по шагам и свежий взгляд со стороны».
            </p>
          </div>
        </div>

        {/* Что всегда есть в плане */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что всегда есть в маркетинговом плане
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {always.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Что есть не в каждом плане */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Что есть не в каждом плане
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            Зависит от ниши и задачи — в план может войти что угодно.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sometimes.map((item) => (
              <div key={item} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card">
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Выгоды */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Зачем заказывать маркетинговый план
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col gap-2 p-6 rounded-2xl border border-border bg-card">
                <h3 className="font-semibold text-base">{b.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Этапы */}
        <div className="space-y-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Этапы работы
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-2xl">
            План — всегда совместная работа.
          </p>
          <div className="space-y-4">
            {steps.map((step) => (
              <div key={step.num} className="flex gap-5 p-6 rounded-2xl border border-border bg-card">
                <span className="text-2xl font-bold text-primary/30 flex-shrink-0 w-10">{step.num}</span>
                <div className="space-y-1.5 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-semibold text-base">{step.title}</h3>
                    <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                      step.who === "Маркетолог" ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                    }`}>
                      {step.who}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>*Zoom-сессия нужна не всегда: в плане всё прописано подробно и понятно. Иногда клиенты отказываются от сессии — «нам и так всё понятно».</p>
            <p>План от брифа до согласования — в среднем 1 месяц. Для старта работы нужно заполнить бриф.</p>
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
            Нужен маркетинговый план?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
            Расскажите о бизнесе и задаче — обсудим точку Б и план действий к ней.
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
