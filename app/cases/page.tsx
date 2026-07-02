import type { Metadata } from "next";
import { CasesGrid } from "@/components/sections/CasesGrid";

export const metadata: Metadata = {
  title: "Кейсы",
  description:
    "Реализованные проекты: сайты, прототипы, исследования ЦА, позиционирование и маркетинговая упаковка продуктов.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/cases",
  },
};

export default function CasesPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-2xl mb-12 md:mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Кейсы
        </h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Реализованные проекты: сайты, прототипы, исследования аудитории,
          позиционирование и маркетинговая упаковка продуктов.
        </p>
      </div>

      <CasesGrid />
    </div>
  );
}
