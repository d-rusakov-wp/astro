import { useState, useMemo, useCallback } from 'preact/hooks'

const HeavyPerformanceTest = ({
  initialItems = 10000,
  maxItems = 100000
}) => {
  // Создаем состояния для отслеживания различных аспектов производительности:
  //   - Количество элементов в списке
  //   - Загруженность CPU
  //   - Загруженность памяти
  //   - Текущий процесс обработки данных

  const [itemsCount, setItemsCount] = useState(initialItems);
  const [cpuLoad, setCpuLoad] = useState(0);
  const [memoryUsage, setMemoryUsage] = useState(0);
  const [processing, setProcessing] = useState(false);

  // Создаем массивы с данными используя useMemo для оптимизации:
  //   - Большой массив чисел
  //   - Массив объектов с сложными вычислениями

  const numbers = useMemo(() => Array.from({ length: itemsCount }, (_, i) => ({
    id: i,
    value: Math.random() * 1000000,
    processed: false
  })), [itemsCount]);

  const processedNumbers = useMemo(() =>
    numbers.map(num => ({
      ...num,
      processed: true,
      result: Math.sqrt(Math.pow(num.value, 2) + Math.pow(num.value * 1.5, 2))
    })), [numbers]);

  // Создаем функцию для симуляции нагрузки на CPU с использованием useCallback:
  //   - Выполняем сложные вычисления
  //   - Обновляем состояние с задержкой

  const simulateCPULoad = useCallback(() => {
    let load = 0;
    const startTime = performance.now();

    while (performance.now() - startTime < 1000) {
      const random = Math.random() * 1000000;
      load += Math.sqrt(Math.pow(random, 2) + Math.pow(random * 1.5, 2));
    }

    setCpuLoad(load % 100);
  }, []);

  // Создаем функцию для обработки данных с имитацией долгой операции:
  //   - Обновляем состояние processing
  //   - Симулируем обработку каждого элемента
  //   - Очищаем состояние после завершения

  const processData = async () => {
    setProcessing(true);

    await new Promise(resolve => setTimeout(resolve, 2000));

    setMemoryUsage((processedNumbers.length / maxItems) * 100);
    setProcessing(false);
  };

  // Создаем функцию для добавления новых элементов:
  //   - Проверяем лимит
  //   - Обновляем количество элементов

  const addItems = () => {
    if (itemsCount < maxItems) {
      setItemsCount(prev => prev + 1000);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div>
        <div>Тест производительности Astro Islands</div>
      </div>

      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Количество элементов: {itemsCount}</p>
            <div value={(itemsCount / maxItems) * 100} />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Нагрузка CPU: {cpuLoad.toFixed(2)}%</p>
            <div value={cpuLoad} />
          </div>

          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Использование памяти: {memoryUsage.toFixed(2)}%</p>
            <div value={memoryUsage} />
          </div>

          <div className="flex gap-2">
            <div
              onClick={addItems}
              disabled={processing || itemsCount >= maxItems}
            >
              Добавить элементы
            </div>

            <div
              variant="secondary"
              onClick={simulateCPULoad}
              disabled={processing}
            >
              Нагрузка CPU
            </div>

            <div
              variant="destructive"
              onClick={processData}
              disabled={processing}
            >
              {processing ? 'Обработка...' : 'Обработать данные'}
            </div>
          </div>

          <div className="col-span-2">
            <p className="text-sm text-muted-foreground mb-2">Последние 5 обработанных элементов:</p>
            <div className="space-y-2">
              {processedNumbers.slice(-5).map(item => (
                <div key={item.id} className="text-sm">
                  ID: {item.id}, Результат: {item.result.toFixed(2)}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeavyPerformanceTest;
