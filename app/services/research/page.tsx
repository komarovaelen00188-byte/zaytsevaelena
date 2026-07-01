import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Исследование ЦА",
  description: "Провожу исследования аудитории, интервью и анализ, чтобы маркетинг работал точнее и понятнее.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/research",
  },
};

export default function ResearchPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" />
        К услугам
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Исследование ЦА как база для сильного маркетинга
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Когда вы понимаете, что реально важно для клиента, вы перестаёте делать «наугад» и начинаете говорить с ним на его языке.
        </p>
        <Link href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
          Записаться на исследование <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
