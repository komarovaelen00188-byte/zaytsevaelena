import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Главная" },
  { href: "/services/strategy", label: "Стратегия" },
  { href: "/services/prototype", label: "Прототип" },
  { href: "/services/positioning", label: "Позиционирование" },
  { href: "/cases", label: "Кейсы" },
  { href: "/contacts", label: "Контакты" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">

          {/* Бренд */}
          <div className="space-y-2">
            <Link
              href="/"
              className="text-lg font-semibold tracking-tight hover:text-primary transition-colors"
            >
              Елена Зайцева
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Маркетолог. Помогаю бизнесу расти через стратегию и понятный маркетинг.
            </p>
          </div>

          {/* Навигация */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
          <p>© {year} Елена Зайцева. Все права защищены.</p>
          <p>Сделано с <span className="text-primary">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
