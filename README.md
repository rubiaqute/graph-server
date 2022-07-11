1. Склонируйте репозиторий на локальный компьютер
2. Выполните npm i
ВАЖНО! Если у вас глобально не стоит nestjs и nestjs/axios прошу установить:
npm i --save @nestjs/axios 
npm i -g @nestjs/cli

4. Запустите вашу базу
5. Запустите ваши микросервисы
6. Запустите проект из корневой папки npm run start:dev или npm run start:prod
7. Для проверки запросов используйте http://localhost:3000/graphql

Для начала рекомендую зарегистрировать пользователя. Готовый пример:
{
"firstName": "Inga",
"lastName": "Baranets",
"password": "secret123",
"email": "inga@inbox.ru"
}
, а потом залогиниться.
