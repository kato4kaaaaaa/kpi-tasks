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


