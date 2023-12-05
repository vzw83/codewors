/**
 Вы получаете массив чисел, возвращаете сумму всех положительных значений.

Пример [1,-4,7,12] => 1 + 7 + 12 = 20

Примечание: если суммировать нечего, сумма по умолчанию равна 0.
 */
const arr1 = [1, -4, 7, 12];

function positiveSum(arr) {
  if (arr.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

// function positiveSum(arr) {
//     return arr.reduce((a,b)=> a + (b > 0 ? b : 0),0);
//  }

console.log(positiveSum(arr1));
