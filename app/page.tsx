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
