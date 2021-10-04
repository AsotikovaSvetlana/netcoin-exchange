# Страница «Вход и регистрация».

Ознакомьтесь с [возможностями работы реализованных классов](./classes_description.md).

Для работы с формой регистрации и авторизации используется класс `UserForm`.
Для работы с сервером используется класс `ApiConnector`.

В классе `UserForm` актуальными свойствами будут использоваться:
1. `loginFormCallback` — функция, которая будет выполняться при попытке авторизации
2. `registerFormCallback` — функция, которая будет выполняться при попытке регистрации

В классе `ApiConnector` актуальными на данной странице будут методы:
1. `login({login, password}, callback)`
2. `register({login, password}, callback)`

Оба метода являются статическими. Аргументами методов является объект со свойствами `login` и `password` (логин и пароль), а так же колбек — функция, которая должна выполняться после выполнения запроса.

## Особенности
Для работы с проектом уже созданы пользователи, которыми можно пользоваться.
* login: *oleg@demo.ru*, password: *demo*
* login: *ivan@demo.ru*, password: *demo*
* login: *petr@demo.ru*, password: *demo*
* login: *galina@demo.ru*, password: *demo*
* login: *vladimir@demo.ru*, password: *demo*
