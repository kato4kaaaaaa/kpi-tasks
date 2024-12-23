  Task 5 
    (Observable/EventEmitter/Alternative) -- Reactive message based communication between entities

const EventEmitter = require('events');

class ReactiveMessageBus extends EventEmitter {}

const messageBus = new ReactiveMessageBus();

function sum(a, b) {
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

messageBus.emit('syncOperation', 5, 10);

function fetchData(apiEndpoint) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Дані з ${apiEndpoint}`);
    }, 1000);
  });
}
