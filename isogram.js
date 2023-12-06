/**
 Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Игнорируйте регистр букв.

Пример: (Ввод -> Вывод)

"Дерматоглифика" --> true "aba" --> false "moOse" --> false (регистр букв игнорируется)

Изизограмма "Дерматоглифика" = true
Изизограмма "moose" = false
Изизограмма "aba" = false
 */

const str1 = "Dermatoglyphics";
const str2 = "moose";
const str3 = "aba";
function isIsogram(str) {
  // Приводим строку к нижнему регистру для учета регистра букв
  //   const lowercasedStr = str.toLowerCase();

  // Создаем объект для отслеживания уникальных букв
  const letterCount = [];

  // Перебираем каждую букву в строке
  for (let i = 0; i < str.length; i++) {
    const letter = str[i];

    // Если буква уже встречалась, то строка не является изограммой
    if (letterCount[letter]) {
      return `isIsogram "${str}" = ${false}`;
    }

    // Иначе отмечаем букву как встреченную
    letterCount[letter] = true;
  }

  // Если прошли через всю строку без повторений, то это изограмма
  return `isIsogram "${str}" = ${true}`;
}

console.log(isIsogram(str1)); // true
console.log(isIsogram(str2)); // false
console.log(isIsogram(str3)); // false
