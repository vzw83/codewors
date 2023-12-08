/**
 * Ваша задача - создать функцию, которая может принимать любое неотрицательное целое число в качестве аргумента и возвращать его с цифрами в порядке убывания. По сути, переставьте цифры, чтобы получить максимально возможное число.

Примеры:
Вход: 42145 Выход: 54421

Ввод: 145263 Вывод: 654321

Ввод: 123456789 Вывод: 987654321
 */

function descendingOrder(n) {
    // Преобразуем число в строку, затем в массив символов
    const digits = n.toString().split('');
    
    // Сортируем массив символов в порядке убывания
    const sortedDigits = digits.sort((a, b) => b - a);
    
    // Объединяем отсортированные символы в строку и преобразуем обратно в число
    const result = parseInt(sortedDigits.join(''));
    
    return result;
  }