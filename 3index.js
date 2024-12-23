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
          resolve(false); // Якщо операцію скасовано, пропускаємо елемент
        } else {
          setTimeout(() => {
            try {
              callback(current, i, array, signal).then(res => { // Виконуємо зворотний виклик
                results.push(res ? current : null); // Додаємо елемент або null
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
  
  return Promise.all(promises).then(() => results.filter(item => item !== null));  // Чекаємо завершення всіх промісів і фільтруємо результати
}

const data = [1, 2, 3, 4, 5, 6];


const controller = new AbortController(); // Аборт-контролер для управління скасуванням

const isEvenWithAbort = (num, _, __, signal) => new Promise((resolve, reject) => {
  if (signal && signal.aborted) return resolve(false); 
  setTimeout(() => resolve(num % 2 === 0), Math.random() * 500); 
});

abortableFilter(data, isEvenWithAbort, controller).then(result => { // Виклик функції
  console.log("Результат:", result); // Вивід результату
}).catch(err => console.error(err));

setTimeout(() => {
  console.log("Операцію скасовано"); 
  controller.abort();
}, 1000);

module.exports = { abortableFilter };


