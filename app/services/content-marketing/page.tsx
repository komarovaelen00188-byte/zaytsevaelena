import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Контент-маркетинг",
  description: "Создаю контент-систему, которая помогает бизнесу привлекать внимание, удерживать интерес и продавать.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/services/content-marketing",
  },
};

export default function ContentMarketingPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 space-y-16">
      <Link href="/services" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
        <ArrowLeft className="w-3.5 h-3.5" />
        К услугам
      </Link>

      <div className="space-y-6">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          Контент-маркетинг, который работает не только на «видимость»
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Строю контент как систему: от сообщений и тем до форматов, которые помогают бизнесу быть заметнее и понятнее.
        </p>
        <Link href="/contacts" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:bg-primary/90 glow-emerald transition-all text-sm">
          Обсудить контент <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
