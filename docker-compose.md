# Что такое docker compose?

Docker Compose — это инструмент для запуска и управления мультиконтейнерными приложениями highload.tech. Он позволяет создать изолированную среду разработки, в которой содержатся все необходимые зависимости проекта, и управлять ею с помощью одной команды.

Основные возможности Docker Compose:
- Запуск нескольких контейнеров одновременно
- Описание взаимодействия между контейнерами в одном файле конфигурации
- Управление сетью между контейнерами
- Управление общими данными через volumes
- Хранение конфиденциальных данных в secrets
- Настройка конфигураций через configs habr.com 

## Процесс работы с Docker Compose состоит из трёх основных шагов:

1. Создание Dockerfile для вашего приложения или выбор готовых образов из Docker Hub
2. Создание файла docker-compose.yml, в котором описываются все сервисы и их взаимодействие
3. Запуск всего приложения одной командой docker compose up

## Особенности работы с Docker Compose:

- Автоматическая загрузка необходимых образов
- Кэширование конфигурации для быстрого обновления
- Возможность создания нескольких изолированных сред на одном хосте
- Защита данных томов при пересоздании контейнеров

# Для чего использовать docker compose?

## Разработка приложений

* Создание изолированной среды разработки с всеми зависимостями
* Автоматизация настройки окружения для новых разработчиков
* Локальное тестирование полной функциональности приложения
* Быстрое обновление зависимостей без влияния на систему разработчика

## Тестирование

* Создание временных сред для автоматизированного тестирования
* Запуск тестов в изолированной среде с необходимыми зависимостями
* Пример использования:
* 
```bash
docker-compose up -d

./run_tests

docker-compose down
```
* Возможность создавать разные конфигурации для разных типов тестов

## Микросервисная архитектура

* Управление несколькими взаимосвязанными сервисами
* Настройка сетей между контейнерами
* Масштабирование отдельных компонентов приложения
* Обработка конфиденциальных данных через secrets

## Продуктивное использование

* Развертывание приложений на продакшн-серверах
* Автоматизация деплоя новых версий
* Управление ресурсами контейнеров
* Мониторинг состояния сервисов

## Особенности применения

* **Гибкость**: возможность создавать разные конфигурации для разных сред
* **Использование переменных**: настройка конфигурации под разные окружения
* **Расширение**: возможность расширять базовые конфигурации для разных случаев использования
* **Автоматизация**: автоматическое управление зависимостями между сервисами

# В чем отличие Compose V1 и Compose V2, что предпочтительней?

## Рекомендации по использованию

### Когда использовать V2:

```bash
# Для новых проектов
docker compose up -d

# Для микросервисных архитектур
docker compose --profile backend up

# С расширенным мониторингом
docker compose top
```

### Когда использовать V1:

```bash
# Если требуется совместимость со старыми системами
docker-compose --compatibility up

# При наличии зависимостей от старых плагинов
docker-compose plugin install ...
```

## Особенности миграции

```markdown
# Рекомендуемый процесс перехода на V2:
1. Обновление Docker до последней версии
2. Проверка совместимости compose файлов
3. Обновление скриптов запуска
4. Тестирование в изолированной среде
```

## Заключение

Compose V2 является предпочтительным выбором для большинства случаев благодаря:
- Встроенной интеграции с Docker CLI
- Лучшей производительности
- Расширенной функциональности
- Улучшенному управлению ресурсами

Однако для проектов с особыми требованиями или зависимостями от старых плагинов может быть целесообразно оставить использование V1.

# Какая команда используется для работы с Compose?

## управление контейнерами:
- docker-compose up - запуск всех контейнеров из файла docker-compose.yml
- docker-compose down - остановка и удаление всех контейнеров
- docker-compose stop - остановка контейнеров без их удаления
- docker-compose start - запуск ранее остановленных контейнеров

## Управление службами:
- docker-compose ps - просмотр списка запущенных контейнеров и их статусов zomro.com
- docker-compose up -d [SERVICE] - запуск конкретной службы

## Управление образами

- docker-compose build - сборка образов zomro.com
- docker-compose pull - загрузка всех образов

## Дополнительные команды:
- docker-compose exec [SERVICE] [COMMAND] - выполнение команд внутри контейнера zomro.com
- docker-compose config

# Основные команды Docker Compose

## Базовые команды

`docker compose up` - запуск контейнеров
```bash
docker compose up -d    # запуск в фоновом режиме
docker compose up --build    # пересборка и запуск
```

`docker compose down` - остановка и удаление контейнеров
```bash
docker compose down    # остановка и удаление
docker compose down --volumes    # удаление включая volumes
```

`docker compose ps` - просмотр состояния контейнеров
```bash
docker compose ps    # список работающих контейнеров
```

`docker compose logs` - просмотр логов
```bash
docker compose logs    # просмотр всех логов
docker compose logs -f    # отслеживание логов в реальном времени
```

## Команды управления

`docker compose start` - запуск остановленных контейнеров
```bash
docker compose start    # запуск всех сервисов
```

`docker compose stop` - остановка работающих контейнеров
```bash
docker compose stop    # остановка всех сервисов
```

`docker compose pause` - приостановка контейнеров
```bash
docker compose pause    # приостановка всех сервисов
```

`docker compose unpause` - возобновление работы контейнеров
```bash
docker compose unpause    # возобновление всех сервисов
```

## Команды для разработки

`docker compose build` - пересборка образов
```bash
docker compose build    # пересборка всех образов
docker compose build --no-cache    # пересборка без кэша
```

`docker compose exec` - выполнение команд в контейнере
```bash
docker compose exec service_name bash    # вход в контейнер
```

# Структура docker-compose.yaml и что там можно указывать.


# Подробней рассказать о содержимом каждого элемента структуры.


# Как общаются сервисы между собой и что для этого нужно сделать?

Сервисы в Docker Compose могут общаться между собой через сеть Docker. По умолчанию Docker Compose создаёт отдельную внутреннюю сеть для каждого проекта, где каждый сервис доступен по своему имени

```
version: "3"
services:
  server:
    build: ./server
    ports:
      - "80:80"
    depends_on:
      - database
    networks:
      - mynetwork

  client:
    build: ./client
    ports:
      - "3000:3000"
    depends_on:
      - server
    networks:
      - mynetwork

  database:
    image: postgres
    networks:
      - mynetwork

networks:
  mynetwork:
    driver: bridge
```

# Что такое фрагменты(Fragments)?

Фрагменты в Docker Compose - это переиспользуемые части конфигурации, которые можно включать в разные сервисы. Они помогают избежать дублирования кода и упрощают поддержку конфигурации.

```
version: "4"

fragment &logging_config
  logging:
    driver: json-file
    options:
      max-size: "10m"
      max-file: "3"

services:
  web:
    <<: *logging_config
    image: nginx
    ports:
      - "80:80"

  db:
    <<: *logging_config
    image: postgres
    environment:
      POSTGRES_DB: mydb
```

# Что такое расширения(Extensions)?

Расширения позволяют переопределить или дополнить существующие конфигурации Docker Compose. Они особенно полезны при работе с разными окружениями или настройками.

```
# base-compose.yml
version: "4"

services:
  app:
    build: .
    environment:
      - DEBUG=true
      - LOG_LEVEL=debug

# override-compose.yml
version: "4"

services:
  app:
    environment:
      - DEBUG=false
      - LOG_LEVEL=warning
```

# Как заинклюдить docker-compose файлы?

## Использование extends для наследования сервисов

```
# base.yml
services:
  database:
    image: postgres
    environment:
      POSTGRES_DB: mydb

# docker-compose.yml
services:
  database:
    extends:
      file: base.yml
      service: database
    ports:
      - "5432:5432"
```

## Использование multiple compose files

```
# docker-compose.yml
services:
  web:
    build: .
    ports:
      - "80:80"

# docker-compose.override.yml
services:
  web:
    environment:
      DEBUG: "True"
```

# Как пользоваться профилями?

```
version: '3'
services:
  web:
    build: .
    profiles:
      - production
    environment:
      MODE: production
  
  debug-tools:
    image: busybox
    profiles:
      - debug
    command: tail -f /dev/null
```

```
# Запуск с конкретным профилем
docker-compose --profile production up

# Проверка активных профилей
docker-compose config

# Отключение профиля
docker-compose --profile debug up --no-profile
```

# Как билдить образы через docker-compose?

```
version: '3'
services:
  app:
    build:
      context: .
      dockerfile: Dockerfile
      args:
        BUILD_VERSION: 1.0
    environment:
      APP_NAME: myapp
```

```
# Сборка всех сервисов
docker-compose build

# Сборка конкретного сервиса
docker-compose build service-name

# Принудительная пересборка
docker-compose build --no-cache

# Сборка с конкретным Dockerfile
docker-compose build --build-arg BUILD_VERSION=2.0
```

# Как указать переменную сервису

```
services:
  app:
    # Прямое указание переменных
    environment:
      APP_NAME: myapp
      DEBUG: "True"
      
    # Из файла .env
    env_file:
      - ./common.env
      
    # Переменная из текущей среды
    environment:
      - MY_VAR=${MY_VAR}
      
    # Конфигурация через secrets
    secrets:
      - db_password
```

```
# Запуск с переменной из командной строки
APP_VERSION=2.0 docker-compose up

# Создание секрета
echo "mypassword" | docker secret create db_password -

# Проверка переменных в контейнере
docker-compose exec service-name printenv
```

# Можно ли подключить файл с переменными

## Использование .env файла

```
# .env
DB_HOST=localhost
DB_PORT=5432

# docker-compose.yml
services:
  app:
    image: myapp
    env_file:
      - .env
```

## Прямое указание переменных

```
services:
  app:
    image: myapp
    environment:
      - DB_HOST=localhost
      - DB_PORT=5432
```

# Как прокинуть порт сервиса

## Простой маппинг портов

```
services:
  web:
    image: nginx
    ports:
      - "80:80"  # host_port:container_port
```

## Расширенный маппинг с параметрами

```
services:
  web:
    image: nginx
    ports:
      - target: 80
        published: 8080
        protocol: tcp
        mode: host
```

# Как сделать чтобы сервис стартовал после определенного сервиса

## Использование depends_on

```
services:
  db:
    image: postgres
    
  app:
    image: myapp
    depends_on:
      - db
```

## Использование healthcheck

```
services:
  db:
    image: postgres
    healthcheck:
      test: ["CMD-SHELL", "pg_isready"]
      interval: 30s
      timeout: 10s
      retries: 5

  app:
    depends_on:
      db:
        condition: service_healthy
```

# Как сменить CMD у сервиса

## Прямое переопределение CMD

```
services:
  app:
    image: nginx
    command: ["nginx", "-g", "daemon off;"]
```

## Изменение через entrypoint

```
services:
  app:
    image: nginx
    entrypoint: ["nginx"]
    command: ["-g", "daemon off;"]
```

# Как запустить в демон режиме и без него?

```
docker-compose up -d

# Интерактивный режим

docker-compose up
```

# Как зайти в контейнер?

```
# Для контейнеров с shell
docker exec -it container_name bash

# Для контейнеров без shell
docker exec -it container_name sh

# Если контейнер остановлен
docker run -it --rm image_name bash
```

# Как посмотреть логи сервиса?

```
docker-compose logs

docker-compose logs service_name
```

# Как остановить/перезапустить

```
docker-compose down

docker-compose restart service_name
```

# Практика
- Описать взаимодействия сервисов: nginx, redis, front (nextjs)
- Так чтобы redis стартовал первым и уже потом только nextjs.
    Последовательность запуска:
    - Redis стартует первым благодаря отсутствию зависимостей
    - NextJS ждёт здоровья Redis через depends_on.redis.condition: service_healthy
    - Nginx запускается после старта NextJS

- Описать потребления ресурсов для каждого сервиса.

```bash
docker stats

docker-compose top
```

- Указать переменные в docker-compose для front чтобы они были переопределяемыми.
- front должен проксироваться через nginx (порт 3000)
- должен поддерживаться dev режим с возможностью видеть локальные изменения в файлах
- должна запускаться и проходить продакшн сборка
- прокинуть env переменные из файла в глобальные для контейнера
- в браузере должно открыться приложение по адресу test.127.0.0.1.nip.io