# Что это такое для чего нужно?

# CI/CD

CI/CD (Continuous Integration/Continuous Delivery) - это современная практика разработки программного обеспечения, обеспечивающая автоматизацию процессов разработки, тестирования и развертывания ПО [2:0].

## Что такое CI/CD?

CI/CD состоит из двух основных компонентов:

* **Непрерывная интеграция (CI)** - процесс постоянной разработки ПО с интеграцией в основную ветвь кода. Автоматически собирает софт и тестирует его при каждом внесении изменений [1:2]
* **Непрерывная доставка (CD)** - процесс постоянной доставки ПО до потребителя, гарантирующий возможность выпуска продукта в любое время без дополнительных ручных проверок [1:2]

## Для чего нужен CI/CD?

CI/CD решает несколько ключевых задач:

1. **Автоматизация рутинных процессов**:
    - Сборка и выкладка новых версий кода выполняется автоматически
    - Все процессы проходят по кнопке с помощью специальных инструментов [1:5]

2. **Повышение качества продукта**:
    - Автоматическое тестирование снижает количество ошибок
    - Ранняя детекция проблем на этапе разработки
    - Улучшение качества кода за счет регулярных проверок [2:3]

3. **Ускорение вывода продукта на рынок**:
    - Автоматизация процессов сокращает время до выпуска
    - Возможность частых релизов без потери качества
    - Быстрая обратная связь от пользователей [1:4]

4. **Оптимизация работы команды**:
    - Единая точка коммуникации между разработкой и операционной деятельностью
    - Прозрачность процесса разработки
    - Возможность параллельной работы нескольких команд [1:5]

## Когда стоит применять CI/CD?

CI/CD полезен почти для всех проектов, особенно когда:

* Проект имеет регулярные обновления
* Работает большая команда разработчиков
* Важна скорость вывода продукта на рынок

Однако есть случаи, когда CI/CD может быть избыточным:
- Небольшие проекты со стартапами
- Компании с архаичными методами разработки
- Проекты без необходимости автоматизации [1:7]
- 
# Что такое pipelines? Показать в гитлабе.

Pipeline в GitLab CI/CD представляет собой серию stage'ов (стадий), которые выполняются последовательно или параллельно для автоматизации процесса разработки и развертывания ПО. Каждый pipeline запускается при определенных событиях (push в репозиторий, merge request и т.д.) .

# Что такое stages? Какие стадии бывают?

Stages (стадии) - это этапы в pipeline, которые определяют последовательность выполнения задач. В примере выше показаны основные стадии:

- build - сборка проекта
- test - тестирование
- deploy - развертывание

Каждая стадия может содержать множество job'ов (заданий), которые выполняются параллельно внутри одной стадии. Стадии же выполняются последовательно - следующая стадия начинается только после успешного завершения всех job'ов предыдущей стадии.

# Где и как описывается стадии и последовательности команд для выполнения в Gitlab CI ранере?

Конфигурация GitLab CI/CD описывается в файле .gitlab-ci.yml в корне вашего проекта. В этом файле определяются:

1. Стадии (stages)
2. Job'ы для каждой стадии
3. Команды для выполнения
4. Артефакты и Pages
5. Докер-образы и Registry

# Рассказать про Pages, Artifacts, Registry

## Pages - статический контент вашего сайта:

```yaml
pages:
  stage: deploy
  script:
    - mkdir -p public
    - cp build/index.html public/
  artifacts:
    paths:
      - public
```

## Артефакты сохраняются после каждого успешного запуска и доступны для скачивания или использования в последующих стадиях.

```yaml
artifacts:
  paths:
    - build/
    - coverage/
```

## Registry - реестр Docker-образов

Позволяет собирать и хранить Docker-образы прямо в GitLab.

```yaml
registry:
  stage: deploy
  script:
    - docker build -t my-app .
    - docker tag my-app:latest $CI_REGISTRY_IMAGE/my-app:latest
    - docker push $CI_REGISTRY_IMAGE/my-app:latest
```

# Что будет если ранее запущенный пайплайн перезапустить?

При перезапуске ранее запущенного пайплайна поведение зависит от нескольких ключевых факторов и настроек системы CI/CD. Давайте рассмотрим возможные сценарии и их последствия.

## Основные сценарии перезапуска пайплайна

### Полный перезапуск
- Все этапы выполняются заново
- Артефакты пересоздаются
- Тесты запускаются повторно
- Деплой выполняется снова

### Частичный перезапуск
- Запускается только указанный этап
- Последующие этапы могут автоматически перезапуститься
- Предыдущие этапы остаются без изменений

## Влияние на окружение и ресурсы

### Ресурсы системы
- Повышенное потребление CPU и памяти
- Возможное увеличение времени выполнения
- Загрузка сетевого трафика

### Существующие артефакты
- Перезапись существующих файлов
- Обновление кэша зависимостей
- Возможное удаление временных файлов

## Рекомендации по управлению перезапусками

### Предотвращение проблем
- Используйте механизмы параллельного выполнения
- Настройте правильную последовательность этапов
- Внедрите систему кэширования артефактов

### Оптимизация процесса
- Выбирайте целевой перезапуск
- Мониторьте использование ресурсов
- Документируйте причины перезапуска

# Какие механизмы безопасности доступны в GitLab CI/CD для защиты конфиденциальных данных?

# Механизмы безопасности GitLab CI/CD

## Управление секретами и переменными
- Система управления секретами для хранения чувствительных данных

- Интеграция с внешними менеджерами секретов (Vault, Azure Key Vault, Google Cloud Secret Manager)

- Защищенные переменные CI/CD с возможностью маскировки и защиты


## Механизмы целостности конвейера
### Защита цепочки поставок
- Проверка целостности активов
- Использование SHA-хешей для Docker-образов


### Версионирование зависимостей
- Замороженные файлы зависимостей
- Строгая фиксация версий


## Безопасность окружения выполнения
### Настройка runner'ов
- Изолированные окружения
- Ограничение прав доступа
- Защита токенов CI_JOB_TOKEN


### Безопасные практики
- Отключение привилегированного режима Docker
- Ограничение возможностей контейнеров
- Отдельные кэши для защищенных веток


## Контроль доступа и аудит
- Настройка прав доступа к окружениям
- Защита веток и тегов
- Проверка кода на уязвимости


## Рекомендации по безопасности
1. Не хардкодить секреты в конфигурации
2. Регулярно ротировать пароли и ключи
3. Использовать одноразовые пароли где возможно

# Как реализовать автоматическую оптимизацию кода?

# Реализация автоматической оптимизации фронтенда в CI/CD

## Конфигурация оптимизации

### Webpack для оптимизации
```javascript
module.exports = {
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10
        }
      }
    }
  }
};
```

### ESLint для качества кода
```javascript
module.exports = {
  rules: {
    'no-unused-vars': 'error',
    'no-undef': 'error',
    'prefer-const': 'error'
  }
};
```

## Интеграция в CI/CD

### GitHub Actions
```yaml
name: Frontend CI/CD
on:
  push:
    branches: [ main ]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v2
      - name: Install dependencies
        run: npm install
      - name: Run linting
        run: npm run lint
      - name: Run tests
        run: npm test
      - name: Build and optimize
        run: npm run build
```

### Jenkins Pipeline
```groovy
pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        stage('Optimize') {
            steps {
                sh 'npm run optimize'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }
}
```

## Мониторинг производительности
```javascript
// Lighthouse CI
module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['http://localhost:3000']
    },
    upload: {
      target: 'temporary-public-storage'
    }
  }
};
```

## Рекомендации по реализации
1. Начните с базовой конфигурации
2. Постепенно добавляйте правила оптимизации
3. Используйте существующие инструменты:
    - Webpack для сборки
    - ESLint для качества кода
    - Lighthouse для производительности
4. Мониторьте результаты оптимизации

## Важные аспекты
- Автоматическое тестирование
- Контроль качества кода
- Оптимизация производительности
- Безопасность изменений

# Какие метрики качества кода следует отслеживать в CI/CD?

1. Начните с базовых метрик:
    - Покрытие кода тестами
    - Время сборки
    - Успешность тестов
    - Размер сборки

2. Расширьте мониторинг:
    - Метрики производительности
    - Метрики безопасности
    - Метрики надежности
    - Метрики пользовательского опыта

3. Следите за трендами:
    - Изменение метрик во времени
    - Выявление проблем на ранней стадии
    - Корреляция между метриками
    - Влияние изменений на качество

# Создайте .gitlab-ci.yml в котором будет команда для сборки билда nextjs приложения

stages:
- build
- deploy_front

include:
- .gitlab/front/build.yaml
- .gitlab/front/deploy.yaml

## build

```yaml
.deploy_front:
  stage: deploy_front
  image: registry.gitlab.com/webpractik/gitlab-ci-deployer/php-7-2-deployer:envsubst
  script:
    - eval $(ssh-agent -s)
    - echo "${SSH_PK}" | tr -d '\r' | ssh-add -
    - cd $CI_PROJECT_DIR
    - envsubst < .docker/docker-compose.yaml.tpl | ssh -oStrictHostKeyChecking=no transtoll@${SERVER_ADDR} -p${SERVER_PORT} 'cat > docker-compose.yaml'
    - ssh -oStrictHostKeyChecking=no transtoll@${SERVER_ADDR} -p${SERVER_PORT} 'docker rollout -f docker-compose.yaml '${DEPLOY_NAME}''
deploy_front_prod:
  extends: .deploy_front
  variables:
    SERVER_ADDR: ${PROD_IP}
    SERVER_PORT: "22"
    SSH_PK: ${SSH_PRIVATE_KEY_PROD}
    DEPLOY_NAME: "transtoll-front"
    IMAGE_TAG_FRONT: ${CI_COMMIT_REF_SLUG}-${CI_PIPELINE_ID}
  only:
    refs:
      - master
  when: manual
```

## deploy

```yaml
build-front:
  stage: build
  image: docker:cli
  variables:
    IMAGE_TAG_FRONT: ${CI_COMMIT_REF_SLUG}-${CI_PIPELINE_ID}
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - cp apps/front/.env.example apps/front/.env
    - docker build -f .docker/Dockerfile -t $CI_REGISTRY/webpractik/vis-transtoll/front:${IMAGE_TAG_FRONT} .
    - docker push $CI_REGISTRY/webpractik/vis-transtoll/front:${IMAGE_TAG_FRONT}
  only:
    refs:
      - master

build-front-manual:
  stage: build
  image: docker:cli
  variables:
    IMAGE_TAG_FRONT: ${CI_COMMIT_REF_SLUG}-${CI_PIPELINE_ID}
  before_script:
    - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
  script:
    - cp apps/front/.env.example apps/front/.env
    - docker build -f .docker/Dockerfile -t $CI_REGISTRY/webpractik/vis-transtoll/front:${IMAGE_TAG_FRONT} .
    - docker push $CI_REGISTRY/webpractik/vis-transtoll/front:${IMAGE_TAG_FRONT}
  only:
    refs:
      - master
  when: manual
```