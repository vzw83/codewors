//Напишите функцию, которая вычисляет среднее значение чисел в заданном списке.
// Примечание: Пустые массивы должны возвращать 0.
const arr = [1, 2, 3, 4, 5];

function findAverage(arr) {
  return arr.length > 0 ? arr.reduce((a, b) => a + b) / arr.length : 0;
}

// function findAverage(array) {
//   if (array.length === 0) return 0;
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i];
//   }
//   return sum / array.length;
// }
console.log(findAverage(arr));
