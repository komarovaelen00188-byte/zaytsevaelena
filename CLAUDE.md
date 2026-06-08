# CLAUDE.md — Память по проекту

## Стек технологий
- **Next.js** (App Router, последняя стабильная) + **React** + **TypeScript**
- Серверные компоненты по умолчанию, клиентские (`"use client"`) — только там, где реально нужно
- **Tailwind CSS** для стилизации
- **shadcn/ui** для компонентов интерфейса (`npx shadcn@latest add ...`)
- **MDX** для статей блога (файлы в `content/blog/`)
- **next-themes** для светлой/тёмной темы
- **next/font** для шрифтов
- Данные (отзывы, ссылки и т.п.) — JSON-файлы в `content/`
- Никакой базы данных, никакой CMS, никакой авторизации

## Дизайн-подход
- Компоненты: shadcn/ui
- Готовые блоки секций: Tailark, Magic UI, shadcn.io
- Если блока нет — собираем из shadcn-компонентов, не отклоняясь от их стиля
- Анимации лёгкие, без перегруза
- Поддержка светлой и тёмной темы

## Контент
- Статьи блога: `.mdx`-файлы в `content/blog/`
- Фронт-маттер каждой статьи: `title`, `description`, `publishedAt`, `featuredImage`, `categories`
- Списочные данные: JSON в `content/`
- Никакой админки — контент правится через файлы

## SEO (закладываем сразу)
- `app/sitemap.ts` и `app/robots.ts`
- `generateMetadata` на каждой странице (title, description, OG-картинка)
- JSON-LD разметка: BlogPosting, Person/Organization, Review, BreadcrumbList
- Canonical URL на каждой странице
- Картинки только через `next/image` (AVIF/WebP, lazy-loading)
- IndexNow-пинг после деплоя

## Инфраструктура и деплой
- VPS, Ubuntu LTS
- Docker (multi-stage build, `output: standalone`) + Docker Compose
- Nginx как reverse proxy, HTTPS + gzip
- Let's Encrypt (certbot, авто-обновление)
- GitHub Actions: тесты → сборка → SSH-деплой → healthcheck
  - Workflow-файл кладём в проект сейчас, активируем когда появится репозиторий
- Скрипт первичной настройки VPS (запускается один раз)

## Структура папок
```
app/                   — страницы (Next.js App Router)
  layout.tsx           — корневой layout, шрифты, темы
  page.tsx             — главная
  about/               — страница «Обо мне»
  blog/                — лента и [slug] статьи
  contacts/            — контакты
  sitemap.ts           — автогенерируемый sitemap
  robots.ts            — robots.txt
components/
  layout/              — Header, Footer, ThemeProvider, ThemeToggle
  sections/            — Hero, Services, Cases, Testimonials, CTA, BlogPreview
content/
  blog/                — .mdx-файлы статей
  cases.json           — кейсы
  testimonials.json    — отзывы
lib/
  mdx.ts               — утилиты чтения MDX (getAllPosts, getPostBySlug, formatDate)
  utils.ts             — cn() helper
docker/
  nginx.conf           — конфиг Nginx (reverse proxy, HTTPS, gzip)
scripts/
  vps-setup.sh         — первичная настройка VPS (запускается один раз)
.github/workflows/
  deploy.yml           — GitHub Actions: lint → build → SSH deploy → healthcheck
```

## Команды разработки
```bash
npm install          # установить зависимости (первый раз)
npm run dev          # локальный сервер http://localhost:3000
npm run build        # production-сборка
npm run lint         # проверка кода
```

## Деплой
- GitHub Actions срабатывает при push в main
- Secrets нужны: VPS_HOST, VPS_USER, VPS_SSH_KEY
- Перед первым деплоем: обновить REPO_URL в scripts/vps-setup.sh


- IP сервера: —
- Пользователь SSH: —
- Путь к SSH-ключу: —
- Домен: —

## Как работаем
1. Перед большой задачей — план (файлы, зависимости), жду «делай»
2. Маленькими итерациями
3. После изменений — `npm run dev`, проверка без ошибок, фикс самостоятельно
4. Перед коммитом — убираю мусор и закомментированный код
5. Один коммит = одна задача, название осмысленное

## Информация о проекте
- **Имя:** Елена Зайцева (`zaytsevaelena`)
- **Домен:** заполним позже (пока плейсхолдер `zaytsevaelena.ru`)
- **Ниша:** Маркетолог — позиционирование, стратегии, прототипы лендингов, исследования ЦА, контент-стратегии
- **Тон текстов:** профессиональный, но дружелюбный и живой
- **Цветовая палитра:** тёмная база + изумрудный акцент (как Vercel Turbo / `#00DC82` и близкие)
- **Секции главной (порядок):** Hero → Услуги/фичи → Кейсы/портфолио → Отзывы → CTA → Последние статьи из блога
- **Отдельные страницы:** Обо мне, Блог (лента), Статья (отдельная), Контакты
