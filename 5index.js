  Task 5 
    (Observable/EventEmitter/Alternative) -- Reactive message based communication between entities

const EventEmitter = require('events');

class ReactiveMessageBus extends EventEmitter {} // Створення класу з EventEmitter

const messageBus = new ReactiveMessageBus(); // Створення екземпляра ReactiveMessageBus

function sum(a, b) { // Синхронна операція
  return a + b;
}

messageBus.on('syncOperation', (a, b) => {
  try {
    const result = sum(a, b);
    console.log(`Результат суми: ${result}`);
  } catch (error) {
    console.error('Помилка синхронної операції:', error);
  }
});

messageBus.emit('syncOperation', 5, 10); // Виклик синхронної операції

function fetchData(apiEndpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Дані з ${apiEndpoint}`);
    }, 1000);
  });
}
messageBus.on('asyncOperation', async (apiEndpoint) => {
  try {
    const data = await fetchData(apiEndpoint);
    console.log(`Отримані дані: ${data}`);
  } catch (error) {
    console.error('Помилка асинхронної операції:', error);
  }
});

messageBus.emit('asyncOperation', '/api/data'); // Виклик асинхронної операції
