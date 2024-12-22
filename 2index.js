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
  return Promise.all(array.map(callback))
    .then(results => array.filter((_, idx) => results[idx]));
}


// asyncFilter.js
async function asyncFilter(array, callback) {
  const results = await Promise.all(array.map(async (item, index) => {
    return await callback(item, index, array);
  }));
  return array.filter((_, idx) => results[idx]);
}




// parallelAsyncFilter.js





