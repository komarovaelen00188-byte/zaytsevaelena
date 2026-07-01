import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Главная" },
  { href: "/services/strategy", label: "Стратегия" },
  { href: "/services/prototype", label: "Прототип" },
  { href: "/services/positioning", label: "Позиционирование" },
  { href: "/cases", label: "Кейсы" },
  { href: "/contacts", label: "Контакты" },
];

const POLICY_URL =
  "https://docs.google.com/document/d/1pvX7WwqXAAQsFYAzDdJ4MeuMnlzOPExCq8Jc5m0zRW4/edit?tab=t.0";
const CONSENT_URL =
  "https://docs.google.com/document/d/1SijXHHRPqINp8Tq4dAm_-itk0I3KguLFWvmvRmJ2vRw/edit?tab=t.0";

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

        <div className="mt-8 pt-8 border-t border-border flex flex-col gap-4 text-sm text-muted-foreground">
          <div className="space-y-1">
            <p>Copyright © ИП Зайцева Елена Владимировна {year}</p>
            <p>ИНН: 246313807242 · ОГРН: 322246800066133</p>
            <p>Сайт не является публичной офертой</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={POLICY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Политика в области обработки ПД
            </a>
            <a
              href={CONSENT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Согласие на обработку
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
