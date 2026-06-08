import type { Metadata } from "next";
import { Mail, MessageCircle, Send } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Напишите Елене Зайцевой — обсудим ваш проект. Первая консультация бесплатна.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/contacts",
  },
};

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@zaytsevaelena.ru",
    href: "mailto:hello@zaytsevaelena.ru",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@zaytsevaelena",
    href: "https://t.me/zaytsevaelena",
  },
];

export default function ContactsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-4">
          Контакты
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          Давайте поговорим
        </h1>
        <p className="text-muted-foreground text-lg mb-12">
          Расскажите о задаче — вместе разберёмся, чем я могу помочь.
          Первая консультация бесплатна.
        </p>

        {/* Способы связи */}
        <div className="space-y-4 mb-12">
          {contacts.map((c) => {
            const Icon = c.icon;
            return (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 p-5 rounded-2xl border border-border bg-card hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>
              </a>
            );
          })}
        </div>

        {/* Заметка */}
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-secondary/50 border border-border text-sm text-muted-foreground">
          <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p>
            Обычно отвечаю в течение нескольких часов в рабочее время.
            Опишите задачу — это поможет мне сразу дать полезный ответ.
          </p>
        </div>
      </div>
    </div>
  );
}
