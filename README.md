# refraservice-clone

Статичний клон публічного сайту Refraservice, створений без закритого коду оригінального сайту.

## Запуск

```bash
npm run dev
```

или без npm:

```bash
python3 -m http.server 4173
```

Відкрити: `http://localhost:4173/`.

## Формы

Форми працюють на фронтенді: є валідація, стан відправлення та успішне збереження заявки в `localStorage`.
Для справжнього відправлення потрібно підключити backend: email, Telegram bot, CRM або API.
