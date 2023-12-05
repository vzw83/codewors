/**
  В этом небольшом задании вам дается строка чисел, разделенных пробелом, и вы должны вернуть наибольшее и наименьшее число.

Примеры
high и Low("1 2 3 4 5"); // возвращает "5 1"
высокий и Низкий("1 2 -3 4 5"); // возвращает "5 -3"
высокий и Низкий("1 9 3 4 -5"); // возвращает "9 -5"
Записи
Все числа действительны в Int32, проверять их не нужно.
Во входной строке всегда будет по крайней мере одно число.
Выходная строка должна состоять из двух чисел, разделенных одним пробелом, и самое большое число должно быть первым.
 */
const str1 = "1 2 -3 4 5";

function highAndLow(numbers) {
  const numArray = numbers.split(" ").map(Number);
  console.log(numArray);

  const maxNum = Math.max(...numArray);
  const minNum = Math.min(...numArray);
  return `${maxNum} ${minNum}`;
}

console.log(highAndLow(str1));

// function highAndLow(numbers){
//     numbers = numbers.split(' ');
//     return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//   }

// function highAndLow(numbers){
//     numbers = numbers.split(' ').sort((a, b)=> Number(a)-Number(b))
//     return [numbers[numbers.length-1], numbers[0]].join(' ')
//   }
