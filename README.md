# kpi-tasks

## Task 1

# Example 
```
async function asyncCallback(num) {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return num % 2 === 0;
}

(async () => {
  const data = [1, 2, 3, 4, 5, 6];
  const result = await asyncFilter(data, asyncCallback, 200);
  console.log(result); // Вихід: [2, 4, 6]
})();
```
# Features

1. Debounce: Опціональна затримка для операцій фільтрації.
2. Async Operations: Обробка асинхронних операцій всередині функції фільтрації.


## Task 2

# Example 

Promise-based Filter
```
const { promiseFilter } = require('./promiseFilter');

const data = [1, 2, 3, 4, 5, 6];
const isEven = num => Promise.resolve(num % 2 === 0);

promiseFilter(data, isEven).then(result => console.log(result));  // [2, 4, 6]
```

Async-Await Filter
```
const { asyncFilter } = require('./asyncFilter');

const asyncIsEven = async num => num % 2 === 0;

(async () => {
  const result = await asyncFilter(data, asyncIsEven);
  console.log(result);  // [2, 4, 6]
})();
```

Parallel Async Filter
```
const { parallelAsyncFilter } = require('./parallelAsyncFilter');

const parallelIsEven = async num => num % 2 === 0;

(async () => {
  const result = await parallelAsyncFilter(data, parallelIsEven);
  console.log(result);  // [2, 4, 6]
})();
```
# Features

Promise-based, Async-Await та Parallelism підтримка.

## Task 3

# Example

Функція перевіряє, чи є число парним. Результат фільтрації виводиться в консоль.

```
const { abortableFilter } = require('./abortableFilter');

const data = [1, 2, 3, 4, 5, 6];

const isEvenAsync = async (num) => {
  await new Promise(resolve => setTimeout(resolve, Math.random() * 500)); // Симуляція асинхронності
  return num % 2 === 0;
};

abortableFilter(data, isEvenAsync)
  .then(result => console.log('Парні числа:', result))
  .catch(err => console.error('Помилка:', err));

``` 
# Features

1. Обробляє масиви з використанням асинхронних функцій у колбеках.
2. Дозволяє скасовувати операцію фільтрації на будь-якому етапі.
3. Можливість використання затримки для симуляції асинхронних операцій.
4. Легко адаптується для використання з різними типами даних.


## Task 4

# Example
```
const dataStream = createLargeDataStream(100); // Стрім на 100 елементів

const fakeProcessing = async (num) => {
    await new Promise(resolve => setTimeout(resolve, Math.random() * 50)); 
    return num * 2; // Проста операція
};

processLargeDataSet(dataStream, fakeProcessing, 20)
    .then(results => console.log("Оброблені результати:", results))
    .catch(err => console.error("Помилка:", err));
```
# Features 
1. Робота з великими наборами даних, що поступово обробляються без перевантаження пам'яті.
2. Дані обробляються пакетами фіксованого розміру для оптимізації обчислень.
3. Використання `async/await` для одночасної обробки кількох елементів.
4. Підтримка налаштування розміру пакетів і обробки кожного елемента.
