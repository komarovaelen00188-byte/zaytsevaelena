import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Маркетинговая стратегия",
  description: "Разрабатываю маркетинговую стратегию для роста бизнеса, понятной коммуникации и последовательного развития.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/strategy",
  },
};

export default function StrategyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" />
        К услугам
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Маркетинговая стратегия для роста без хаоса
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Часто бизнес не нуждается в «ещё одном креативе», а в системе: кто мы, для кого работаем, как говорим, что делаем и в какой последовательности развиваемся.
        </p>
        <Link href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
          Обсудить проект <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="rounded-3xl border border-border bg-card p-8">
        <h2 className="text-2xl font-bold tracking-tight mb-4">Что включает</h2>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li>• анализ рынка, конкурентов и клиента</li>
          <li>• формулировка оффера и ценностного предложения</li>
          <li>• план каналов и точек контакта</li>
          <li>• контент-план и последовательность коммуникаций</li>
        </ul>
      </div>
    </div>
  );
}
