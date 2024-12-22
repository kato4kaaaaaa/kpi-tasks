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
