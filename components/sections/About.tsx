export function About() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Левая колонка — текст */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight leading-tight">
              Привет, я Елена.{" "}
              <span className="text-primary">Маркетолог</span>
            </h2>

            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                600+ реализованных проектов в твёрдых нишах: строительство,
                логистика, производство, инжиниринг, ремонт, поставки,
                проектирование, медицина, консалтинг.
              </p>
              <p>
                Твёрдому бизнесу помогаю сделать понятным, почему клиентам
                нужно купить у вас.
              </p>
            </div>
          </div>

          {/* Правая колонка — фото */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
              <div className="text-center space-y-2 p-8">
                <div className="text-7xl font-bold text-primary/20">Е</div>
                <p className="text-sm text-muted-foreground">Фото появится здесь</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-primary/10 border border-primary/20 -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
}
