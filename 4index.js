  Task 4 
    (Stream/AsyncIterator/Alternative) -- Ongoing processing of large data sets that do not fit in memory

const { Readable } = require('stream');

async function processLargeDataSet(dataIterator, processFn, batchSize = 10) {
    let batch = [];
    let results = [];
    try {
        for await (const item of dataIterator) {
            batch.push(item);

            // Коли досягаємо розміру пакета, обробляємо його
            if (batch.length === batchSize) {
                const batchResult = await Promise.all(batch.map(processFn));
                results = results.concat(batchResult); 
                batch = [];
            }
        }

        // Обробка залишків
        if (batch.length > 0) {
            const batchResult = await Promise.all(batch.map(processFn));
            results = results.concat(batchResult);
        }
} catch (err) {
        console.error("Помилка обробки:", err);
    }
    return results;
}

// Функція для створення стріму великих даних
function createLargeDataStream(size) {
    let index = 0;
    return new Readable({
        objectMode: true,
        read() {
            if (index < size) {
                this.push(index++); 
            } else {
                this.push(null); 
            }
        }
    });
}
