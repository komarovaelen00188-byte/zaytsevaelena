export function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
              Передай разработку прототипа контент-маркетологу
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Елена Зайцева, маркетолог, контент-маркетолог, копирайтер.
              </p>
              <p>
                Разрабатываю UX прототипы сайтов: от лендингов до сложных
                корпоративных порталов. Мои клиенты: 90% - маркетологи,
                агентства, трафик-специалисты; 10% - бизнес. Реализовано 500+
                проектов из твёрдых ниш: производство, строительство, ремонт,
                медицина, поставки, услуги и пр.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border bg-background flex items-center justify-center shadow-[0_0_0_1px_rgba(0,0,0,0.04)]">
              <img
                src="/images/elena_zaytseva_conten_marketig_prototip.webp"
                alt="Елена Зайцева"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl border border-border bg-secondary/70 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
