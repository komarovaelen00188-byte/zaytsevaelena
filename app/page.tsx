import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Tasks } from "@/components/sections/Tasks";
import { Cases } from "@/components/sections/Cases";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { BlogPreview } from "@/components/sections/BlogPreview";

export const metadata: Metadata = {
  title: "Елена Зайцева — Маркетолог",
  description:
    "Маркетолог: позиционирование, стратегии, прототипы лендингов, исследования ЦА и контент-стратегии.",
  alternates: {
    canonical: "https://zaytsevaelena.ru",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-10 md:py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <p className="text-sm uppercase tracking-[0.24em] text-muted-foreground mb-3">
              Визуальный кейс
            </p>
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              Прототип и готовый сайт
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <div className="aspect-[16/9] bg-secondary/30">
                <img
                  src="/images/prototip_website_bermuda.png"
                  alt="Прототип сайта"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-sm font-medium text-foreground">Прототип</p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border bg-card shadow-sm">
              <div className="aspect-[16/9] bg-secondary/30">
                <img
                  src="/images/website_bermuda_prototip_elena_zaytseva.png"
                  alt="Готовый сайт"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-5 py-4 text-center">
                <p className="text-sm font-medium text-foreground">Готовый сайт</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />
      <Tasks />
      <Cases />
      <Services />
      <Testimonials />
      <CTA />
      <BlogPreview />
    </>
  );
}
