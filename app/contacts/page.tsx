import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты",
  description:
    "Напишите Елене Зайцевой — обсудим ваш проект. Первая консультация бесплатна.",
  alternates: {
    canonical: "https://zaytsevaelena.ru/contacts",
  },
};

const contacts: {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}[] = [
  {
    icon: Phone,
    label: "Телефон",
    value: "+7 (923) 355-10-49",
    href: "tel:+79233551049",
  },
  {
    icon: Mail,
    label: "Email",
    value: "Komarovaelen001@mail.ru",
    href: "mailto:Komarovaelen001@mail.ru",
  },
  {
    icon: Send,
    label: "Telegram",
    value: "@zaytseva_elena_official",
    href: "https://t.me/zaytseva_elena_official",
  },
  {
    icon: MessageCircle,
    label: "Макс",
    value: "+7 (923) 355-10-49",
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
            const cls =
              "flex items-center gap-4 p-5 rounded-2xl border border-border bg-card transition-all group" +
              (c.href ? " hover:border-primary/30 hover:bg-primary/5" : "");
            const inner = (
              <>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground mb-0.5">{c.label}</div>
                  <div className="font-medium text-sm group-hover:text-primary transition-colors">
                    {c.value}
                  </div>
                </div>
              </>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className={cls}>
                {inner}
              </a>
            ) : (
              <div key={c.label} className={cls}>
                {inner}
              </div>
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
