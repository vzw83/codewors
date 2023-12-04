/*Если тебе не спится, просто посчитай овец!!

Задача:
Учитывая неотрицательное целое число, например 3, верните строку с бормотанием: "1 овца... 2 овцы... 3 овцы...". Ввод всегда будет действительным, т.е. никаких отрицательных целых чисел.
*/

const countSheep = function (num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    if (i >= 1) result += i + " sheep...";
  }
  return result;
};
console.log(countSheep(3));

// countSheep=n=>[...Array(n).keys()].map(x=>`${x+1} sheep...`).join``