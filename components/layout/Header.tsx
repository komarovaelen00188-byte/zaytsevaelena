"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const featuredServices = [
  { href: "/services/strategy", label: "Стратегия" },
  { href: "/services/prototype", label: "Прототип лендинга" },
  { href: "/services/positioning", label: "Позиционирование" },
];

const allServices = [
  { href: "/services/strategy", label: "Стратегия" },
  { href: "/services/communication-strategy", label: "Коммуникационная стратегия" },
  { href: "/services/research", label: "Исследование ЦА" },
  { href: "/services/prototype", label: "Прототип / структура сайта" },
  { href: "/services/presentation", label: "Презентация компании / бренда" },
  { href: "/services/positioning", label: "Разработка позиционирования" },
  { href: "/services/social-content", label: "Контент в социальные сети" },
  { href: "/services/book", label: "Книга под ключ" },
  { href: "/services/speech", label: "Речь выступления" },
  { href: "/services/reels", label: "Сценарии рилс" },
  { href: "/services/content-marketing", label: "Контент-маркетинг" },
];

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const isServicesActive = pathname.startsWith("/services");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* Логотип */}
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-primary transition-colors">
            <span className="text-foreground">Елена Зайцева</span>
          </Link>

          {/* Навигация — десктоп */}
          <nav className="hidden md:flex items-center gap-1">

            {/* Главная */}
            <Link
              href="/"
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              Главная
            </Link>

            {/* 3 featured услуги */}
            {featuredServices.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === s.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {s.label}
              </Link>
            ))}

            {/* Кнопка «Услуги» с выпадашкой для остальных */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={cn(
                  "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  isServicesActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                Все услуги
                <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", servicesOpen && "rotate-180")} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full right-0 mt-1 w-72 rounded-xl border border-border bg-background/95 backdrop-blur-md shadow-lg py-1.5 z-50">
                  {allServices.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className={cn(
                        "block px-4 py-2 text-sm transition-colors",
                        pathname === s.href
                          ? "text-primary bg-primary/5"
                          : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                      )}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Кейсы и Контакты */}
            {[{ href: "/cases", label: "Кейсы" }, { href: "/contacts", label: "Контакты" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href ? "text-primary" : "text-muted-foreground hover:text-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Правая часть */}
          <div className="flex items-center gap-2">
            <a
              href="tel:+79233551049"
              className="hidden sm:inline-flex text-sm font-semibold text-foreground hover:text-primary transition-colors mr-1"
            >
              +7 (923) 355-10-49
            </a>
            <ThemeToggle />
            <button
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-border"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Меню"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className={cn(
                "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                pathname === "/" ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
              )}
            >
              Главная
            </Link>

            <button
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors w-full text-left"
            >
              Услуги
              <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", mobileServicesOpen && "rotate-180")} />
            </button>

            {mobileServicesOpen && (
              <div className="ml-3 flex flex-col gap-0.5 border-l border-border pl-3">
                {allServices.map((s) => (
                  <Link
                    key={s.href}
                    href={s.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}

            {[{ href: "/cases", label: "Кейсы" }, { href: "/contacts", label: "Контакты" }].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "px-3 py-2.5 rounded-md text-sm font-medium transition-colors",
                  pathname === link.href ? "text-primary bg-primary/10" : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                )}
              >
                {link.label}
              </Link>
            ))}

            <a
              href="tel:+79233551049"
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-md text-sm font-semibold text-foreground hover:text-primary hover:bg-secondary transition-colors"
            >
              +7 (923) 355-10-49
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
