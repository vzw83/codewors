/*Учитывая непустой массив целых чисел, верните результат умножения значений по порядку. Пример:

[1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
*/


const ar = [1, 2, 3, 4];
// const grow = (nums) => nums.reduce((product, num) => product * num, 1);

function grow(x) {
  let a = 1;
  for (let i = 0; i < x.length; i++) {
    a *= x[i];
  }
  return a;
}
console.log(grow(ar));
