/**
 * Учитывая массив целых чисел, ваше решение должно найти наименьшее целое число.

Например:

Учитывая [34, 15, 88, 2], ваше решение вернет 2
Учитывая [34, -345, -1, 100], ваше решение вернет -345
Вы можете предположить, для целей этого ката, что предоставленный массив не будет пустым.
 */

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min.apply(null, args);
//     }
//   }

class SmallestIntegerFinder {
    findSmallestInt(args) {
      return Math.min(...args)
    }
}
const finder = new SmallestIntegerFinder()