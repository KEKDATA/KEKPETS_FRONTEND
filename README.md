### Установка

- Node.js (LTS) https://nodejs.org/en/, сейчас 14.17.0
- yarn https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable (либо под вашу ось), сейчас  1.22.10
- Выполнить в корне проекта `yarn install`
- Запустить локально `yarn start`
- Запустить просмотр кастомных ui - компонентов `yarn storybook`

### Запуск в докере
```
docker-compose up
```
Используемые переменные:
- `PORT` - порт, на котором будет доступен сервис. Дефолтное значение `8080`.
- `API_URL` - адрес, на котором находится API. Дефолтное значение `http://localhost:8000/api/v1`.


### Структура проекта

Основная директория для просмотра - `src/*`

#### entity
Служит для сущностей бизнес логики и переиспользуемых ui - компонентов

Переиспользуются данные сущности в `features/*`
Есть одно исключение в виде инициализации `search` - модели сразу в `pages/index.tsx`


#### features
Самостоятельная фича, которая используется напрямую на одной из страниц в `pages/*`
Фича не может включать в себя другие фичи, только `entity` - сущности, либо то, что находится на переиспользуемом уровне глобально в `shared/*`

Пример фичи `features/results` - набор компонентов для отображения результатов поиска

#### pages

Набор страниц в которые входят `features/*` в основном


#### requests

Набор апи - методов

Апи метод используются в сущностях `entity/*` для вызова на уровне бизнес - логики

#### shared

Глобально переиспользуемые сущности, например `shared/ui/*` - директория для кастомных ui компонентов, которые могут использоваться в любом месте приложения. Каждый кастомный ui - компонент имеет так же stories
