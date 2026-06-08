import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-card p-8 md:p-14 text-center">
          {/* Декоративное свечение */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-primary/8 blur-3xl" />
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
    </section>
  );
}
