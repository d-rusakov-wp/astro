# Адаптер

```ts
export interface NotificationSystem {
   sendNotification(title: string, message: string): void;
}

class SlackNotifier {
   public sendMessage(channel: string, text: string): void {
      console.log(`Slack: Sending to ${channel}: ${text}`);
   }
}

class SlackAdapter implements NotificationSystem {
   constructor(private slack: SlackNotifier) {}

   sendNotification(title: string, message: string): void {
      this.slack.sendMessage("#notifications", `${title}: ${message}`);
   }
}

function notifyUsers(notificationSystem: NotificationSystem): void {
   notificationSystem.sendNotification(
           "Важное уведомление",
           "Система будет обновлена сегодня ночью"
   );
}

const slack = new SlackNotifier();
const notificationSystem = new SlackAdapter(slack);

notifyUsers(notificationSystem);
```

## Для чего нужен этот паттерн?

Адаптер - это структурный паттерн проектирования, который позволяет использовать несовместимые объекты вместе. Он создает интерфейс между двумя объектами, которые не могут работать напрямую из-за различий в их интерфейсах.

## В каких случаях стоит использовать?

1. **Интеграция старого кода с новым**
    - Когда нужно использовать устаревшие компоненты в современной системе
    - При работе с legacy-кодом
    - При интеграции с устаревшими API

2. **Работа с внешними библиотеками**
    - Когда требуется интеграция с библиотеками, имеющими несовместимые интерфейсы
    - При работе с API третьих сторон
    - При необходимости использования компонентов с разными интерфейсами

3. **Объединение компонентов**
    - Когда нужно соединить системы, не предназначенные для совместной работы
    - При интеграции компонентов с разными архитектурами
    - При необходимости поддержки разных версий API

## Какие плюсы?

Отделяет и скрывает от клиента подробности преобразования различных интерфейсов.

1. **Переиспользование кода**
    - Возможность использовать существующий код без его изменения
    - Сохранение функциональности старых компонентов
    - Экономия времени на разработку

2. **Декаплинг**
    - Отделение клиентского кода от адаптируемого
    - Возможность изменять адаптируемый компонент без влияния на клиент
    - Упрощение поддержки кода

3. **Гибкость**
    - Легкое добавление новых адаптеров
    - Возможность поддержки разных версий компонентов
    - Простая замена адаптеров при необходимости

## Какие недостатки?

Усложняет код программы из-за введения дополнительных классов.

1. **Дополнительная сложность**
    - Увеличение количества классов в системе
    - Сложность отслеживания взаимосвязей между компонентами
    - Риск усложнения архитектуры

2. **Производительность**
    - Дополнительные накладные расходы на вызовы методов
    - Возможные проблемы с производительностью при сложных преобразованиях
    - Задержки при обработке данных

3. **Ограничения**
    - Сложность поддержки при большом количестве адаптеров
    - Риск чрезмерного использования паттерна
    - Ограничения, связанные с возможностями языка программирования

# Декоратор

```ts
interface Coffee {
   cost(): number;
   ingredients(): string;
}

class SimpleCoffee implements Coffee {
   public cost(): number {
      return 1.0;
   }

   public ingredients(): string {
      return "Кофе";
   }
}

abstract class CoffeeDecorator implements Coffee {
   protected coffee: Coffee;

   constructor(coffee: Coffee) {
      this.coffee = coffee;
   }

   public cost(): number {
      return this.coffee.cost();
   }

   public ingredients(): string {
      return this.coffee.ingredients();
   }
}

class MilkDecorator extends CoffeeDecorator {
   public cost(): number {
      return super.cost() + 0.5;
   }

   public ingredients(): string {
      return `${super.ingredients()}, Молоко`;
   }
}

class SugarDecorator extends CoffeeDecorator {
   public cost(): number {
      return super.cost() + 0.2;
   }

   public ingredients(): string {
      return `${super.ingredients()}, Сахар`;
   }
}

function makeCoffee(coffee: Coffee): void {
   console.log(`Заказ: ${coffee.ingredients()}`);
   console.log(`Цена: ${coffee.cost()}€`);
}
// Пример использования
const simpleCoffee = new SimpleCoffee();

console.log("Простой кофе:");

makeCoffee(simpleCoffee);

console.log("\nКофе с молоком и сахаром:");

const coffeeWithMilkAndSugar = new SugarDecorator(new MilkDecorator(simpleCoffee));

makeCoffee(coffeeWithMilkAndSugar);
```

## Для чего нужен этот паттерн?

Декоратор - это структурный паттерн проектирования, который позволяет динамически добавлять новые обязанности объекту, не изменяя его структуру

## В каких случаях стоит использовать?

1. **Динамическое добавление функций**
    - Когда нужно добавлять новые возможности объекту во время выполнения
    - При необходимости создания различных комбинаций функций
    - Когда расширение через наследование невозможно

2. **Избежание множественного наследования**:
    - В языках без поддержки множественного наследования
    - При необходимости комбинировать несколько функций
    - Когда нужно избежать "болотной архитектуры"

3. **Отдельное представление и поведение**:
    - При необходимости разделения ответственности
    - Когда нужно изменять поведение без изменения класса
    - При работе с внешними библиотеками

## Какие плюсы?

Большая гибкость, чем у наследования.
Позволяет добавлять обязанности на лету.
Можно добавлять несколько новых обязанностей сразу.
Позволяет иметь несколько мелких объектов вместо одного объекта на все случаи жизни.

1. **Гибкость**
    - Динамическое добавление функций
    - Возможность создавать цепочки декораторов
    - Легкое удаление функций

2. **Принцип единственной ответственности**:
    - Каждый декоратор отвечает за одну функцию
    - Упрощение поддержки кода
    - Четкое разделение обязанностей

3. **Экономия памяти**:
    - Создание декораторов только при необходимости
    - Возможность повторного использования
    - Эффективная структура данных

## Какие недостатки?

Трудно конфигурировать многократно обёрнутые объекты.
Обилие крошечных классов.

1. **Сложность отладки**:
    - Сложность определения источника проблемы
    - Усложнение стека вызовов
    - Трудности с отслеживанием цепочки декораторов

2. **Избыточность кода**:
    - Повторение базовых методов
    - Увеличение количества классов
    - Сложность поддержки при большом количестве декораторов

3. **Производительность**:
    - Дополнительные накладные расходы
    - Замедление при глубоких цепочках декораторов
    - Потенциальные проблемы с кэшированием

# Фасад

```ts
class CPU {
    execute() {
        console.log("CPU выполняет инструкции");
    }
}

class Memory {
    load() {
        console.log("Память загружает данные");
    }
}

class HardDrive {
    read() {
        console.log("Диск считывает данные");
    }
}

class Computer {
    private cpu: CPU;
    private memory: Memory;
    private hardDrive: HardDrive;

    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }

    start() {
        console.log("Запуск компьютера...");

        this.cpu.execute();
        this.memory.load();
        this.hardDrive.read();

        console.log("Компьютер запущен!");
    }
}

const computer = new Computer();

computer.start();
```

## Для чего нужен этот паттерн?

Фасад - это структурный паттерн проектирования, который предоставляет упрощенный интерфейс к сложной системе из взаимосвязанных классов . Он скрывает сложность подсистемы и предоставляет простой интерфейс для работы с ней.

## В каких случаях стоит использовать?

1. **Упрощение сложных интерфейсов**:
    - Когда система имеет много взаимосвязанных компонентов
    - При необходимости сократить количество зависимостей
    - Когда нужно создать единую точку входа в систему

2. **Изоляция клиентского кода**:
    - Когда нужно защитить клиентский код от изменений в подсистеме
    - При работе с устаревшими системами
    - Когда требуется разделить ответственность

3. **Управление подсистемами**:
    - При работе с большими системами
    - Когда нужно контролировать доступ к подсистеме
    - При необходимости логирования операций

## Какие плюсы?

Изолирует клиентов от компонентов сложной подсистемы.

1. **Упрощение использования**:
    - Единая точка входа в систему
    - Простой интерфейс для клиентов
    - Сокращение количества зависимостей

2. **Улучшение структуры**:
    - Четкое разделение ответственности
    - Упрощение тестирования
    - Легкость поддержки кода

3. **Гибкость**:
    - Возможность изменения подсистемы без влияния на клиентов
    - Легкое добавление новых функций
    - Изоляция сложной логики

## Какие недостатки?

Фасад рискует стать божественным объектом, привязанным ко всем классам программы.

1. **Ограничения**:
    - Фасад может стать слишком сложным
    - Сложность поддержки при большом количестве методов
    - Риск создания "Божественного объекта"

2. **Производительность**:
    - Дополнительный уровень индирекции
    - Возможные проблемы с кэшированием
    - Замедление при частых вызовах

3. **Сложность отладки**:
    - Сложность определения источника проблемы
    - Усложнение стека вызовов
    - Трудности с отслеживанием взаимодействий

# Компоновщик

```ts
interface IFileSystemComponent {
   name: string;
   parent?: FileSystemComposite;
   getSize(): number;
   getPath(): string;
   detach(): void;
}

class File implements IFileSystemComponent {
   name: string;
   parent?: FileSystemComposite;
   private size: number;

   constructor(name: string, size: number) {
      this.name = name;
      this.size = size;
   }

   getSize(): number {
      return this.size;
   }

   getPath(): string {
      return this.name;
   }

   detach(): void {
      if (this.parent) {
         this.parent.delete(this);
      }
   }
}

class FileSystemComposite implements IFileSystemComponent {
   name: string;
   parent?: FileSystemComposite;
   
   private children: IFileSystemComponent[] = [];

   constructor(name: string) {
      this.name = name;
   }

   getSize(): number {
      return this.children.reduce((total, child) => total + child.getSize(), 0);
   }

   getPath(): string {
      if (!this.parent) {
         return this.name;
      }
      
      return `${this.parent.getPath()}/${this.name}`;
   }

   detach(): void {
      if (this.parent) {
         this.parent.delete(this);
         this.parent = undefined;
      }
   }

   add(component: IFileSystemComponent): void {
      component.detach();
      component.parent = this;
      
      this.children.push(component);
   }

   delete(component: IFileSystemComponent): void {
      const index = this.children.indexOf(component);
      
      if (index !== -1) {
         this.children.splice(index, 1);
         
         component.parent = undefined;
      }
   }

   listContents(indent: string = ""): void {
      this.children.forEach(child => {
         if (child instanceof File) {
            console.log(`${indent}  └─ ${child.name} (размер: ${child.getSize()} байт)`);
         } else {
            child.listContents(indent + "  ");
         }
      });
   }
}

const root = new FileSystemComposite("root");
const documents = new FileSystemComposite("documents");
const images = new FileSystemComposite("images");
const work = new FileSystemComposite("work");

root.add(documents);
root.add(images);
root.add(work);

documents.add(new File("resume.pdf", 1024 * 1024));
documents.add(new File("notes.txt", 1024));

images.add(new File("photo.jpg", 5 * 1024 * 1024));
images.add(new File("avatar.png", 2 * 1024 * 1024));

work.add(new File("project.zip", 10 * 1024 * 1024)); 
work.add(new File("readme.md", 512));

root.listContents();
```

## Для чего нужен этот паттерн?

Компоновщик - это структурный паттерн проектирования, который позволяет работать с объектами и их группами единообразно. Он создает древовидную структуру объектов, где каждый узел может быть либо простым объектом (лист), либо группой объектов (композит).

## В каких случаях стоит использовать?

Упрощает архитектуру клиента при работе со сложным деревом компонентов.
Облегчает добавление новых видов компонентов.

1. **Иерархические структуры**:
    - Файловые системы
    - Графические редакторы
    - Меню и навигация
    - Организационные структуры

2. **Динамическое управление**:
    - Добавление/удаление объектов
    - Перемещение между группами
    - Изменение структуры в runtime

3. **Единообразное поведение**:
    - Обработка как отдельных объектов, так и групп
    - Рекурсивная обработка структуры
    - Единый интерфейс для всех компонентов

## Какие плюсы?

1. **Единообразное управление**:
    - Работа с объектами и группами через единый интерфейс
    - Простая обработка сложных структур
    - Унифицированный доступ к компонентам

2. **Гибкость**:
    - Динамическое создание иерархий
    - Легкое добавление новых типов компонентов
    - Простое управление отношениями между объектами

3. **Эффективность**:
    - Рекурсивная обработка структуры
    - Автоматическое обновление связей
    - Оптимальное использование памяти

## Какие недостатки?

Создаёт слишком общий дизайн классов.

1. **Сложность реализации**:
    - Необходимость поддержки сложной структуры
    - Сложность отладки
    - Риск циклических зависимостей

2. **Производительность**:
    - Рекурсивные операции могут быть медленными
    - Большой объем данных в памяти
    - Сложность оптимизации

3. **Ограничения**:
    - Сложность добавления новых операций
    - Ограничения при работе с разными типами объектов
    - Риск усложнения структуры при росте системы

# Заместитель

```ts
interface DataProvider {
   getData(key: string): string;
   setData(key: string, value: string): void;
}

class RealDataProvider implements DataProvider {
   private data: Map<string, string>;

   constructor() {
      this.data = new Map<string, string>();
   }

   getData(key: string): string {
      return this.data.get(key) || '';
   }

   setData(key: string, value: string): void {
      this.data.set(key, value);
   }
}

class CachingProxy implements DataProvider {
   private realProvider: RealDataProvider;
   private cache: Map<string, string>;

   constructor(realProvider: RealDataProvider) {
      this.realProvider = realProvider;
      this.cache = new Map<string, string>();
   }

   getData(key: string): string {
      if (this.cache.has(key)) {
         return this.cache.get(key)!;
      }

      const data = this.realProvider.getData(key);
      this.cache.set(key, data);
      
      return data;
   }

   setData(key: string, value: string): void {
      this.cache.delete(key);
      this.realProvider.setData(key, value);
   }
}

function clientCode(provider: DataProvider) {
   const data1 = provider.getData('user1');

   provider.setData('user1', 'John Doe');

   const data2 = provider.getData('user1');
}

clientCode(new RealDataProvider());
clientCode(new CachingProxy(new RealDataProvider()));
```

## Для чего нужен этот паттерн?

Заместитель - это структурный паттерн проектирования, который предоставляет объект-заместитель для другого объекта
. Заместитель получает запросы от клиентов, выполняет некоторую работу (контроль доступа, кэширование и т.д.) и затем передает запрос реальному объекту.

## В каких случаях стоит использовать?

1. **Контроль доступа**:
    - Ограничение доступа к ресурсам
    - Валидация запросов
    - Логирование операций

2. **Оптимизация**:
    - Кэширование результатов
    - Отложенная инициализация
    - Контроль создания объектов

3. **Защита**:
    - Защита от нежелательных вызовов
    - Контроль ресурсов
    - Обработка ошибок

## Какие плюсы?

Позволяет контролировать сервисный объект незаметно для клиента.
Может работать, даже если сервисный объект ещё не создан.
Может контролировать жизненный цикл служебного объекта.

1. **Гибкость**:
    - Возможность добавления новой функциональности без изменения клиентского кода
    - Легкое переключение между реальным объектом и заместителем
    - Изоляция клиентского кода от сложной логики

2. **Оптимизация**:
    - Кэширование результатов
    - Отложенная загрузка
    - Контроль ресурсов

3. **Безопасность**:
    - Контроль доступа
    - Валидация данных
    - Логирование операций

## Какие недостатки?

Усложняет код программы из-за введения дополнительных классов.
Увеличивает время отклика от сервиса.

1. **Сложность**:
    - Дополнительный уровень абстракции
    - Усложнение кода
    - Сложность отладки

2. **Производительность**:
    - Дополнительные накладные расходы
    - Замедление при частых вызовах
    - Потенциальные проблемы с кэшированием

3. **Ограничения**:
    - Сложность добавления новых операций
    - Ограничения при работе с разными типами объектов
    - Риск усложнения структуры при росте системы


# Легковес

https://refactoringu.ru/ru/design-patterns/flyweight.html


# Мост

https://refactoringu.ru/ru/design-patterns/bridge.html
