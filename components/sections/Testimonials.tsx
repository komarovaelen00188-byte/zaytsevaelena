import testimonials from "@/content/testimonials.json";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Отзывы
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div
              key={item.id}
              className="flex flex-col p-6 rounded-2xl border border-border bg-card"
            >
              {/* Звёзды */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-foreground text-foreground"
                  />
                ))}
              </div>

              {/* Текст */}
              <p className="text-sm leading-relaxed text-foreground/80 flex-1 mb-6">
                &ldquo;{item.text}&rdquo;
              </p>

              {/* Автор */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full border border-border bg-secondary flex items-center justify-center text-foreground font-semibold text-sm flex-shrink-0">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium">{item.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {item.role}, {item.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
