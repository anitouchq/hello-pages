# Тихий ритм

Небольшой сайт о спокойном планировании на React 18 и Vite.

## 📸 Скриншоты

### Сайт
![Главная страница сайта](screenshots/website.png)

### GitHub Actions — успешный CI/CD
![Успешный запуск CI/CD](screenshots/github-actions.png)

### Настройки GitHub Pages
![GitHub Pages с источником GitHub Actions](screenshots/github-pages-settings.png)

## 🌐 Сайт

[Открыть сайт на GitHub Pages](https://anitouchq.github.io/hello-pages/)

## 🛠 Установка и запуск

```bash
npm install
npm run dev
```

## 🔁 CI/CD

Workflow: `.github/workflows/ci-cd.yml`. Он запускает проверки и сборку, затем публикует `dist/` на GitHub Pages; деплой зависит от успешного CI.

## 📂 Структура

```text
hello-pages/
├── .github/workflows/ci-cd.yml
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── screenshots/
│   ├── website.png
│   ├── github-actions.png
│   └── github-pages-settings.png
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

Автор: [anitouchq](https://github.com/anitouchq)
