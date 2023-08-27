## Запуск проекта

```

npm install - установка зависимостей
npm run start:dev or npm run start:dev:vite - запуск сервера + frontend приложения
```

---

## Скрипты

- `npm run start` - asdasda
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend
- `npm run start:dev:server` - Запуск backend сервера
- `npm run build:prod` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме (не минимизирована)
- `npm run lint:ts` - Проверка ts файлов eslint`om
- `npm run lint:ts:fix` - Исправление ts файлов eslint`om
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов
- `npm run test:ui:ok` - Подтверждение изменений в скриншотных тестах
- `npm run test:ui:ci` - Запуск скриншотных тестов для CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - Запуск Storybook
- `npm run storybook:build` - Сборка stroybook build
- `npm run generate:slice` - Скрипт для генерации FSD слайсов
- `npm run prepare` - Прекомит хуки

---

## Архитектура проекта

Проект написан в соответствии с методологией Features Sliced Design

Ссылка на документацию - [Features Sliced Design](https://feature-sliced.design/docs)

---

## Работа с переводами

В проекте используется библиотека i18next для работы с переводами.
Файлы с переводами храняться в public/locales

Для комфортной работы рекомендуем установить плагин для webstorm/vscode

Документация на - [i18next](https://www.i18next.com/)

---

## Тесты

В проекте используется 4 виды тестирования:

1. Обычные unit тесты на jest - `npm run test:unit`
2. Тесты на компоненты с React testing library - `npm run rest:unit`
3. Скриншотное тестирования с loki - `npm run test:ui`
4. e2e тестирование с Cypress - `npm run test:e2e`

Подробнее о тестах [документация тестирования](/docs/test.md)

---

## Линтинг

В проекте используется eslint для проверки typescript кода и stylelint для проверки файлов со стилями.

Также строгого контроля главных архитектурных принципов используется собственный eslint plugin [_eslint-plugin-monroo-plugin_](https://www.npmjs.com/package/eslint-plugin-monroo-plugin), который содержит 3 правила:

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD (например widgets нельзя использовать в features and entities)
3. public-api-imports - разрешает испорт из других модулей только из public api. Имеет auto fix

##### Запуск линтеров

- `npm run lint:ts` - Проверка ts файлов eslint`om
- `npm run lint:ts:fix` - Исправление ts файлов eslint`om
- `npm run lint:scss` - Проверка scss файлов style линтером
- `npm run lint:scss:fix` - Исправление scss файлов style линтером

---

## Storybook

В проекте для каждого компонента описываются стори-кейсы.
Запросы на сервер мокаются с помощью storybook [_storybook-addon-fetch-mock_](https://storybook.js.org/addons/storybook-addon-fetch-mock).

Файл со стори-кейсом создается рядом с компонентом и имеетс расширение _.stories.tsx_

Запустить storybook можно командой:

- `npm run storybok`

Подробнее о [Storybook](https://storybook.js.org/)

Пример:

```typescript jsx
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Button, ButtonSize, ButtonTheme } from "./Button";
import { Theme } from "@/shared/const/theme";

const meta: Meta<typeof Button> = {
  title: "shared/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "button",
  },
};

export const Clear: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const Outline: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
};

export const BackgroundTheme: Story = {
  args: {
    children: "button",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const Disabled: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
    disabled: true,
  },
};
```

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - /config/build
2. Vite - vite.config.ts

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- /config/babel - babel
- /config/build - конфигурация webpack
- /config/jest - конфигурация тестовой среды
- /config/storybook - конфигурация storybook

В папке `scripts` находятся различные скрипты для рефакторнига, упроещения написания кода, генерации отчетов и тд.

---

## CI pipeline и pre commit хуки

Конфигурация github actions находится в /.github/workflows. В ci прогоняются все виды тестов, линтинг, сборка проекта и storybook.

В pre commit хуках проверяем проект линтерами, конфиг в /.husky

---

### Работы с данными

Взаимодействие с данными осуществляется с помощью redux toolkit. По возможности переиспользуемые сущности необходимо нормализовать с помозью Entity Adapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения reducer`s используется [DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)
