# Адаптер

https://refactoringu.ru/ru/design-patterns/adapter.html

```ts
export interface TaxiCalculator {
   calculatePriceInEuros(km: number, isAirport: boolean): number;
}

export class UKTaxiCalculatorLibrary {
   public getPriceInPounds(miles: number, fare: Fares): number {
      if (fare === Fares.Airport) {
         return 5 + miles * 2.15;
      }
      
      return miles * 1.95;
   }
}

export enum Fares {
   Standard,
   Airport,
}

class UKTaxiCalculatorLibraryAdapter implements TaxiCalculator {
   constructor(private adaptee: UKTaxiCalculatorLibrary) {
   }

   calculatePriceInEuros(km: number, isAirport: boolean): number {
      const miles = km * 1.609;
      const fare = isAirport ? Fares.Airport : Fares.Standard;
      const pounds = this.adaptee.getPriceInPounds(miles, fare);
      const euros = pounds * 1.15;
      
      return euros;
   }
}

function client(taxiCalculator: TaxiCalculator): void {
   console.log('Calculating the price for a 15 Km run to the airport');
  
   const priceInEuros = taxiCalculator.calculatePriceInEuros(15, true);
   
   console.log(`Total price: ${priceInEuros}€`);
}

const incompatibleLibrary = new UKTaxiCalculatorLibrary();
const adaptedLibrary = new UKTaxiCalculatorLibraryAdapter(incompatibleLibrary);

client(adaptedLibrary);
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

https://refactoringu.ru/ru/design-patterns/decorator.html

```ts
interface Component {
   operation(): string;
}

class ConcreteComponent implements Component {
   public operation(): string {
      return 'ConcreteComponent';
   }
}

class Decorator implements Component {
   protected component: Component;

   constructor(component: Component) {
      this.component = component;
   }

   public operation(): string {
      return this.component.operation();
   }
}

class ConcreteDecoratorA extends Decorator {
   public operation(): string {
      return `ConcreteDecoratorA(${super.operation()})`;
   }
}

class ConcreteDecoratorB extends Decorator {
   public operation(): string {
      return `ConcreteDecoratorB(${super.operation()})`;
   }
}

function clientCode(component: Component) {
   console.log(`RESULT: ${component.operation()}`);
}

const simple = new ConcreteComponent();

console.log('Client: I\'ve got a simple component:');

clientCode(simple);

console.log('');

const decorator1 = new ConcreteDecoratorA(simple);
const decorator2 = new ConcreteDecoratorB(decorator1);

console.log('Client: Now I\'ve got a decorated component:');

clientCode(decorator2);
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

https://refactoringu.ru/ru/design-patterns/facade.html

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

https://refactoringu.ru/ru/design-patterns/composite.html

```ts
interface IComponent {
    name: string;
    parent?: Composite;
    operation(): string;
    detach(): void;
}

class Leaf implements IComponent {
    name: string;
    parent?: Composite;

    constructor(name: string) {
        this.name = name;
    }

    operation(): string {
        return `Лист: ${this.name}`;
    }

    detach(): void {
        if (this.parent) {
            this.parent.delete(this);
        }
    }
}

class Composite implements IComponent {
    name: string;
    parent?: Composite;

    private children: IComponent[] = [];

    constructor(name: string) {
        this.name = name;
    }

    operation(): string {
        const results = [this.name];

        for (const child of this.children) {
            results.push(child.operation());
        }

        return results.join('\n');
    }

    detach(): void {
        if (this.parent) {
            this.parent.delete(this);
            this.parent = undefined;
        }
    }

    add(component: IComponent): void {
        component.detach();
        component.parent = this;

        this.children.push(component);
    }

    delete(component: IComponent): void {
        const index = this.children.indexOf(component);

        if (index !== -1) {
            this.children.splice(index, 1);

            component.parent = undefined;
        }
    }
}

const root = new Composite("Корневая папка");
const folder1 = new Composite("Папка 1");
const folder2 = new Composite("Папка 2");
const file1 = new Leaf("файл1.txt");
const file2 = new Leaf("файл2.txt");
const file3 = new Leaf("файл3.txt");

root.add(folder1);
root.add(folder2);
folder1.add(file1);
folder1.add(file2);
folder2.add(file3);

console.log("Структура файловой системы:");
console.log(root.operation());
```

## Для чего нужен этот паттерн?

Компоновщик - это структурный паттерн проектирования, который позволяет работать с объектами и их группами единообразно. Он создает древовидную структуру объектов, где каждый узел может быть либо простым объектом (лист), либо группой объектов (композит).

## В каких случаях стоит использовать?

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

https://refactoringu.ru/ru/design-patterns/proxy.html

```ts
interface Subject {
    request(): void;
}

class RealSubject implements Subject {
    public request(): void {
        console.log('RealSubject: Обработка запроса.');
    }
}

class Proxy implements Subject {
    private realSubject: RealSubject;

    constructor(realSubject: RealSubject) {
        this.realSubject = realSubject;
    }

    public request(): void {
        if (this.checkAccess()) {
            this.realSubject.request();
            this.logAccess();
        }
    }

    private checkAccess(): boolean {
        console.log('Proxy: Проверка доступа перед обработкой запроса.');

        return true;
    }

    private logAccess(): void {
        console.log('Proxy: Логирование времени запроса.');
    }
}

function clientCode(subject: Subject) {
    console.log('Клиент: Выполнение кода с реальным предметом:');

    subject.request();

    console.log('Клиент: Выполнение того же кода с заместителем:');

    const proxy = new Proxy(new RealSubject());

    proxy.request();
}

clientCode(new RealSubject());
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
