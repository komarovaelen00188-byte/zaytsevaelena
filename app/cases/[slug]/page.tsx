import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { casesContent, getCaseContent } from "@/content/cases-content";
import { PrototypeFrame } from "@/components/cases/PrototypeFrame";

export function generateStaticParams() {
  return Object.keys(casesContent).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = getCaseContent(slug);

  if (!item) {
    return { title: "Кейс не найден" };
  }

  return {
    title: item.metaTitle,
    description: item.metaDescription,
    alternates: {
      canonical: `https://zaytsevaelena.ru/cases/${item.slug}`,
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getCaseContent(slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      <Link
        href="/#cases"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        К проектам
      </Link>

      <div className="space-y-6">
        <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
          {item.category}
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          {item.title}
        </h1>
        {item.summary && (
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            {item.summary}
          </p>
        )}
      </div>

      {item.image &&
        (item.imageContain ? (
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <img
              src={item.image}
              alt={item.imageAlt ?? item.title}
              className="w-full h-auto"
            />
          </div>
        ) : (
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <div className="aspect-[16/9] bg-secondary/30">
              <img
                src={item.image}
                alt={item.imageAlt ?? item.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}

      {item.facts && item.facts.length > 0 && (
        <div className="grid gap-4 sm:grid-cols-3">
          {item.facts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-2">
                {fact.label}
              </p>
              <p className="text-sm font-medium text-foreground">{fact.value}</p>
            </div>
          ))}
        </div>
      )}

      {item.beforeAfter && (
        <div className="grid gap-6 md:grid-cols-2">
          {(
            [
              { fallback: "Сайт до", data: item.beforeAfter.before },
              { fallback: "Сайт после", data: item.beforeAfter.after },
            ] as const
          ).map(({ fallback, data }) => {
            const label = data.label ?? fallback;
            return (
              <div
                key={fallback}
                className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
              >
                <div className="aspect-[16/9] bg-secondary/30 flex items-center justify-center">
                  {data.image ? (
                    <img
                      src={data.image}
                      alt={data.alt ?? label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      Изображение скоро будет
                    </span>
                  )}
                </div>
                <div className="px-5 py-4 text-center">
                  <p className="text-sm font-medium text-foreground">{label}</p>
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="space-y-12">
        {item.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="space-y-4">
            {section.heading && (
              <h2 className="text-2xl font-bold tracking-tight">
                {section.heading}
              </h2>
            )}
            {section.images && section.images.length > 0 && (
              <div className="space-y-6">
                {section.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
                  >
                    <img
                      src={img.image}
                      alt={img.alt ?? item.title}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
            {section.paragraphs?.map((paragraph, i) => (
              <p
                key={i}
                className="text-base text-muted-foreground leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            {section.bullets && section.bullets.length > 0 && (
              <ul className="space-y-3 text-base text-muted-foreground">
                {section.bullets.map((bullet, i) => (
                  <li key={i}>• {bullet}</li>
                ))}
              </ul>
            )}
            {section.steps && section.steps.length > 0 && (
              <div className="space-y-6 pt-2">
                {section.steps.map((step, stepIndex) => (
                  <div
                    key={step.title}
                    className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-4"
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="text-sm font-semibold text-primary tabular-nums">
                        {String(stepIndex + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-lg font-semibold tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                    {step.paragraphs?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {step.bullets && step.bullets.length > 0 && (
                      <ul className="space-y-2 text-base text-muted-foreground">
                        {step.bullets.map((bullet, i) => (
                          <li key={i}>• {bullet}</li>
                        ))}
                      </ul>
                    )}
                    {step.note?.map((paragraph, i) => (
                      <p
                        key={i}
                        className="text-base text-muted-foreground leading-relaxed"
                      >
                        {paragraph}
                      </p>
                    ))}
                    {step.value && step.value.length > 0 && (
                      <div className="rounded-2xl bg-primary/5 border border-primary/10 p-4 space-y-2">
                        <p className="text-xs uppercase tracking-[0.18em] text-primary font-medium">
                          Ценность этапа
                        </p>
                        {step.value.map((paragraph, i) => (
                          <p
                            key={i}
                            className="text-sm text-muted-foreground leading-relaxed"
                          >
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {item.gallery && item.gallery.length > 0 && (
        <div className="space-y-6">
          {item.gallery.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm"
            >
              <img
                src={img.image}
                alt={img.alt ?? item.title}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      )}

      {item.prototype && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold tracking-tight">
            {item.prototype.heading}
          </h2>
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            {item.prototype.embed ? (
              <PrototypeFrame
                src={item.prototype.embed}
                title={item.prototype.alt ?? item.prototype.heading}
              />
            ) : item.prototype.image ? (
              <img
                src={item.prototype.image}
                alt={item.prototype.alt ?? item.prototype.heading}
                className="w-full h-auto"
              />
            ) : null}
          </div>
        </div>
      )}

      <div className="rounded-3xl border border-border bg-card p-8 flex flex-col gap-4 items-start">
        <h2 className="text-2xl font-bold tracking-tight">
          Нужен похожий результат?
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
          Расскажите о задаче — обсудим, как позиционирование и прототип помогут
          вашему бизнесу.
        </p>
        <Link
          href="/contacts"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm"
        >
          Обсудить проект <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
