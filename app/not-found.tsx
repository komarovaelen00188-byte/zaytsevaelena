import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
      <div className="text-7xl font-bold text-primary/20 mb-6">404</div>
      <h1 className="text-2xl font-bold mb-3">Страница не найдена</h1>
      <p className="text-muted-foreground mb-8">
        Такой страницы не существует. Возможно, ссылка устарела или была удалена.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all text-sm"
      >
        <ArrowLeft className="w-4 h-4" />
        На главную
      </Link>
    </div>
  );
}
