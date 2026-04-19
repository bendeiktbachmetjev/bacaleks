# Bacaleks Marine Advisory — Website

Independent marine advisory website built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4** and **Inter + JetBrains Mono**.
Design follows the "Marine Standard × Apple Aesthetic" direction documented
in `instructions.md`.

## Stack

- Next.js 16 / React 19 (App Router, Turbopack)
- Tailwind CSS v4 with CSS-level design tokens (`src/app/globals.css`)
- Inter (headings/body) + JetBrains Mono (numerics) via `next/font/google`
- No database — content is currently defined in `src/lib/site.ts`
- Zero-config contact form → `POST /api/contact` (stub, ready to wire to
  Resend / SMTP / Postmark)

## Routes

| Path                               | Page                                |
| ---------------------------------- | ----------------------------------- |
| `/`                                | Home                                |
| `/about`                           | About Us (with founder placeholder) |
| `/services`                        | Services overview (Bento Grid)      |
| `/services/claims-advisory`        | Claims Advisory                     |
| `/services/surveys`                | Surveys                             |
| `/services/superintendency`        | Superintendency                     |
| `/services/performance-audits`     | Performance Audits                  |
| `/industries`                      | Industries                          |
| `/case-studies`                    | Case Studies                        |
| `/coverage`                        | Coverage / Regions                  |
| `/insights`                        | Insights / Technical notes          |
| `/contact`                         | Contact                             |

## Local development

```bash
npm install
npm run dev
# http://localhost:3000
```

## Production build

```bash
npm run build
npm run start
```

## Deploy to Railway

This repo already contains `railway.json` and `Procfile`.

1. Push this repository to GitHub.
2. In Railway: **New Project → Deploy from GitHub**.
3. Railway detects Next.js via Nixpacks and runs:
   - install: `npm ci`
   - build:   `npm run build`
   - start:   `npm run start`  (binds to `$PORT` / `0.0.0.0`)
4. Add your custom domain in Railway → Settings → Networking.

### Environment variables (optional, wire when ready)

| Name               | Purpose                                  |
| ------------------ | ---------------------------------------- |
| `RESEND_API_KEY`   | If using Resend for `/api/contact` email |
| `CONTACT_TO_EMAIL` | Destination inbox for form submissions   |
| `SITE_URL`         | Canonical URL used in OpenGraph tags     |

Currently `/api/contact` logs submissions to the server console and
returns `{ ok: true }`. See `src/app/api/contact/route.ts` — add your
email provider there.

---

## What I still need from you

Фронт полностью функционален. Ниже — список всего, что мне нужно от тебя,
чтобы заменить плейсхолдеры реальным контентом. Все поля с `TODO:` в коде
отмечены именно по этому списку.

### 1. Контакты и юрлицо (`src/lib/site.ts`)

- [ ] Полное название фирмы (как в регистрации).
- [ ] Рабочий email (сейчас заглушка `office@bacaleks.com`).
- [ ] Офисный телефон.
- [ ] Номер 24/7 Technical Attendance (может совпадать с офисным).
- [ ] WhatsApp/Telegram для emergency-модалки.
- [ ] Точный адрес офиса в Клайпеде.
- [ ] Регистрационный номер / VAT.
- [ ] Год основания компании.
- [ ] Актуальная канонический URL (для SEO — `src/app/layout.tsx`
      → `metadataBase`).

### 2. Founder / About Us (`src/app/about/page.tsx`)

- [ ] Имя, фамилия, должность отца (сейчас стоит
      `[Founder Name], C/E · LL.M.`).
- [ ] Фото отца — рекомендованный формат:
      **портрет 4:3, минимум 1600×1200, студийный или полу-постановочный,
      холодный тон (синеватый), однотонный/размытый фон.**
- [ ] Биография (3–5 абзацев) — сейчас заглушка `[Placeholder biography…]`.
      Рекомендую структуру:
      1. Сейчас и сегодня — кто он и что делает.
      2. Морская карьера — суда, позиции, годы, C/E endorsement.
      3. Переход на берег — образование (LL.M.), специализация.
      4. Философия практики — почему независимость, на кого работает.
      5. Личная нота (факультативно) — семья, Балтика, хобби.
- [ ] Реальные даты в timeline (сейчас 1989–2024 — шаблон).
- [ ] Сертификаты / ассоциации (IIMS, NI, Association of Average
      Adjusters, SNAME и т. п.).
- [ ] Скан CV (PDF) — если захочешь кнопку "Download CV".

### 3. Изображения (все с пометкой "Image placeholder" на сайте)

Формат ниже — ориентир. Если присланные фото другого размера, я их
кроплю/оптимизирую. Желательны **горизонтальные, мало деталей, холодный
тон, много неба / воды / металла**.

- [ ] Hero (главная) — предпочтительно **замедленное видео-лупа 10–20 c,
      MP4, 1920×1080, < 6 МБ**: волны, шкала эхолота, работающий
      двигатель крупным планом, причал в тумане. Если видео нет — 1–2
      фото 1920×1080.
- [ ] Founder portrait (см. п. 2).
- [ ] Case Studies — 4 кадра, по одному на кейс, 16:9, 1600×900
      (фото процесса, НЕ логотипы судов).
- [ ] Industries — 6 кадров по одному на отрасль, 16:9, 1600×900
      (Bulker, Tanker, Container, MPP, RoRo, Offshore).
- [ ] Coverage — карта или спутниковый снимок Балтики, 4:3,
      1600×1200, можно темную версию.
- [ ] Services detail — 4 широких кадра 21:9 для больших баннеров
      (Claims / Surveys / Superintendency / Performance), опционально.
- [ ] Contact — фото порта Клайпеды, 4:3.
- [ ] Логотип компании: SVG (векторный), или минимум PNG 1024×1024
      прозрачный. Сейчас используется якорь-иконка.

### 4. Case studies (`src/lib/site.ts` → `caseStudies`)

Сейчас 4 вымышленных кейса в стиле твоей отрасли. Пришли **3–6
реальных кейсов** (можно анонимизировано) в формате:

- Заголовок (без имени судна)
- Сектор (Dry Bulk / Tanker / …)
- Год
- 2–3 предложения описание
- 1 измеримый результат (например `USD 1.8M recovered`, `Claim −62%`).

### 5. Insights / Блог (`src/lib/site.ts` → `insights`)

Сейчас 3 статьи-заглушки. Если готов вести блог — пришли заголовки и
тексты первых 3–5 заметок. Если нет — могу убрать секцию целиком,
скажи только.

### 6. Language / Коммуникация

- [ ] Нужна ли русская / литовская версия сайта? Сейчас only-EN.
      Если да — я добавлю локализацию (i18n) отдельно.

### 7. Реальные регионы и ETA (`src/lib/site.ts` → `coverage`)

Сейчас стоит мой best-guess (Klaipėda → same day, Rotterdam → <24 h
и т. д.). Проверь список портов и время прибытия; исправь под реальные
обязательства.

### 8. Почта для формы контакта

Я сделал `/api/contact` как stub. Скажи, какой стек ты хочешь для
приёма писем:
- **Resend** (проще всего, бесплатный тариф) — нужен домен и API ключ.
- **Postmark** — нужен signature + API key.
- **SMTP через Zoho/Gmail/сервер провайдера** — нужны логин/пароль.
Я подключу за 10 минут после получения ключей.

### 9. Legal

- [ ] Текст Privacy Policy.
- [ ] Текст Terms of Service.
- [ ] Нужна ли Cookies-плашка (GDPR)? Сейчас сайт не ставит
      пользовательских куков — технически не обязан её показывать.

---

## Project structure

```
src/
├── app/
│   ├── api/contact/route.ts      # POST /api/contact — email stub
│   ├── about/page.tsx
│   ├── case-studies/page.tsx
│   ├── contact/page.tsx
│   ├── coverage/page.tsx
│   ├── industries/page.tsx
│   ├── insights/page.tsx
│   ├── services/{,claims-advisory,surveys,superintendency,performance-audits}/page.tsx
│   ├── globals.css               # Tailwind v4 + design tokens
│   ├── layout.tsx                # Root layout, fonts, Header/Footer
│   └── page.tsx                  # Home
├── components/
│   ├── bento.tsx                 # Bento Grid primitives
│   ├── button.tsx                # Button + LinkButton
│   ├── card.tsx                  # 16px border-radius card
│   ├── contact-form.tsx          # Contact form (client)
│   ├── emergency.tsx             # 24/7 Technical Attendance (client)
│   ├── footer.tsx
│   ├── header.tsx                # Glassmorphism sticky nav (client)
│   ├── icons.tsx                 # SF-Symbols-style line icons
│   ├── image-placeholder.tsx     # Visible placeholders for images
│   ├── layout.tsx                # Container + Section
│   ├── page-hero.tsx             # Inner-page hero
│   ├── section-heading.tsx
│   └── service-detail.tsx        # Shared renderer for 4 service pages
└── lib/
    ├── cn.ts                     # className join helper
    └── site.ts                   # ALL content / nav / services / etc.
```

All editable content is centralised in **`src/lib/site.ts`**.
