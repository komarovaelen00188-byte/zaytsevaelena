const tasks = [
  "У нас сложный продукт/бизнес, нужно сделать его понятным и объяснить, почему нужно купить у нас",
  "Наш сайт, КП, презентации не продают — нужно поработать со смыслами, которые мы доносим",
  "Нужно переформулировать маркетинг на новых клиентов (из розницы в опт; из эконом в средний; из крупных в b2c)",
  "У нас премиум-сегмент, а маркетинг и смыслы этого не отражают — нужно переупаковать",
  "Мало продаж, нужно работать со смыслами, преимуществами и контентом",
  "Нужно запустить контент в соцсетях — кто как не ты",
  "Нужен креатив и отстройка от конкурентов — мы сейчас ничем не отличаемся и продаём то же что и все",
  "Нужно разложить бизнес по полочкам — сделать структуру сайта",
  "С сайта приходят не наши клиенты, нужно сделать чтобы приходили НАШИ",
];

export function Tasks() {
  return (
    <section className="py-20 md:py-28 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Задачи, с которыми обращаются
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-card"
            >
              <span className="text-primary font-bold text-lg leading-none mt-0.5 flex-shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {task}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
