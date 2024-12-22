  Task 2
  * Prepare promise based alternative
  * Write use cases for the promise based solution
  * Write use cases for the async-await
  * Add new on-demend feature during review
    e.g.: Add support for parallelism

  Note: for technologies that do not have the native Future-like async functionalities
  You may combine Task 1 and 2 into a single Task that will showcase the 



// promiseFilter.js
function promiseFilter(array, callback) {
  return Promise.all(array.map(callback)) // Promise.all для виконання всіх асинхронних викликів callback для кожного елемента масиву
    .then(results => array.filter((_, idx) => results[idx]));
}


// asyncFilter.js
async function asyncFilter(array, callback) {
  const results = await Promise.all(array.map(async (item, index) => {
    return await callback(item, index, array);
  }));
  return array.filter((_, idx) => results[idx]);  // Фільтрує елементи масиву на основі результатів callback
}


// parallelAsyncFilter.js
async function parallelAsyncFilter(array, callback) {
  const chunkSize = 2; // Розбиває масив на частини по chunkSize
  const chunks = [];
  // Розділення масиву на частини
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  
  const results = await Promise.all(chunks.map(async chunk => { // Promise.all для паралельного оброблення кожної частини масиву
    return await Promise.all(chunk.map(callback));
  }));
  
  return results.flat().filter(result => result); // Об’єднує результати та фільтрує тільки значення, що відповідають true
}

module.exports = { promiseFilter, asyncFilter, parallelAsyncFilter };




