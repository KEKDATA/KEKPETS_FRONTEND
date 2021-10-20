### Установка

- Node.js (LTS) https://nodejs.org/en/
- yarn https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable (либо под вашу ось)
- Выполнить в корне проекта `yarn install`
- Запустить локально `yarn start`

### Запуск в докере
```
docker-compose up
```
Используемые переменные:
- `PORT` - порт, на котором будет доступен сервис. Дефолтное значение `3000`.
- `API_URL` - адрес, на котором находится API. Дефолтное значение `http://localhost:3000/api/v1`.
