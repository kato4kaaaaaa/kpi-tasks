  Task 1
  * Choose array fn (map/filter/filterMap/some/find/findIndex)
  * Prepare its callback based async counterpart
  * Prepare demo cases for the usage
  * Add new on-demend feature during review
    e.g.: Add support for debounce (if the task took less then X time to
    complete -- add an additional execution delya)



// Асинхронна версія filter
async function asyncFilter(array, callback, debounceTime = 0) {
  const results = await Promise.all(array.map(async (item, index) => {
    const start = Date.now();
    const result = await callback(item, index, array);
    const elapsed = Date.now() - start;
// Додатковий debounce, якщо виконання було швидким
    if (debounceTime > 0 && elapsed < debounceTime) {
      await new Promise((resolve) => setTimeout(resolve, debounceTime - elapsed));
    }

    return result;
  }));
  return array.filter((_, idx) => results[idx]);
// Демонстрація використання asyncFilter
(async () => {
  const numbers = [1, 2, 3, 4, 5, 6];

// Асинхронний колбек для перевірки парності чисел
  const isEven = async (num) => {
    await new Promise((resolve) => setTimeout(resolve, 100)); 
    return num % 2 === 0; // Парні числа
  };

  console.log("Original array:", numbers);
 const filteredNumbers = await asyncFilter(numbers, isEven);

  console.log("Filtered array:", filteredNumbers); // Очікувано: [2, 4, 6]
})();

  

