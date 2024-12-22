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

Debounce: Опціональна затримка для операцій фільтрації.
Async Operations: Обробка асинхронних операцій всередині функції фільтрації.


## Task 2

# Example 
```
Promise-based Filter

const { promiseFilter } = require('./promiseFilter');

const data = [1, 2, 3, 4, 5, 6];
const isEven = num => Promise.resolve(num % 2 === 0);

promiseFilter(data, isEven).then(result => console.log(result));  // [2, 4, 6]
```


