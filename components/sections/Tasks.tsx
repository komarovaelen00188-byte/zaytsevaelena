const tasks = [
  "Нужно УПАКОВАТЬ бизнес с нуля",
  "Сайт приводит НЕ НАШИХ клиентов - нужно переделать подачу",
  "Бизнес вырос из старого сайта - мы уже в другом сегменте, позиционировании, положении",
  "Хотим отстроиться от конкурентов",
  "Повысить качество лида",
  "У нас сложный продукт и длинный цикл сделки",
];

export function Tasks() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="max-w-2xl mb-16">
          <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold tracking-tight leading-tight">
            Топ-задач, с которыми ко мне обращаются
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="flex gap-4 p-6 rounded-2xl border border-border bg-card"
            >
              <span className="text-foreground font-bold text-lg leading-none mt-0.5 flex-shrink-0">
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
