import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CasesGrid } from "./CasesGrid";

export function Cases() {
  return (
    <section id="cases" className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Заголовок */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Реализованные проекты
          </h2>
          <Link
            href="/cases"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Все кейсы
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <CasesGrid />
      </div>
    </section>
  );
}
