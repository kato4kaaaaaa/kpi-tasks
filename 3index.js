  Task 3
  * Integrate AbortController or other Cancallable approach
// abortableFilter.js
function abortableFilter(array, callback, controller) {
  if (!Array.isArray(array)) throw new Error("Не масив"); // Перевірка на масив
  let signal = controller ? controller.signal : null;
  let results = [];
  let promises = [];
  
  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    promises.push(
      new Promise(resolve => {
        if (signal && signal.aborted) {
          resolve(false);
        } else {
          setTimeout(() => {
            try {
              callback(current, i, array, signal).then(res => {
                results.push(res ? current : null);
                resolve(res);
              }).catch(err => {
                console.log("Помилка", err); 
                resolve(false);
              });
            } catch (e) {
              console.error("Помилка у зворотному виклику", e); 
              resolve(false);
            }
          }, Math.random() * 100); 
        }
      })
    );
  }
  
  return Promise.all(promises).then(() => results.filter(item => item !== null));
}

