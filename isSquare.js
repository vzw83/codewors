/**
 * Задача
Дано целое число, определите, является ли оно квадратным числом:

В математике квадратное число или совершенный квадрат - это целое число, которое является квадратом целого числа; другими словами, это произведение некоторого целого числа на само себя.

Тесты всегда будут использовать некоторое целое число, так что не беспокойтесь об этом в языках с динамической типизацией.

Примеры
-1 => ложь
0 => истина
3 => ложь
4 => истина
25 => истина
26 => ложь
 */


// const isSquare = n => Number.isInteger(Math.sqrt(n));
function isSquare(n) {
    // Используем функцию Math.sqrt для вычисления квадратного корня
    // и проверяем, является ли результат целым числом
    return Math.sqrt(n) % 1 === 0;
  }
  
  // Пример использования:
  let number = 25;
  let number1 = 5;
  console.log(isSquare(number)); // Вернет true, потому что 25 - это квадрат числа 5
  console.log(isSquare(number1)); // Вернет true, потому что 25 - это квадрат числа 5