/**
 Возвращает количество гласных в данной строке.

Мы будем рассматривать a, e, i, o, u в качестве гласных для этого ката (но не y).

Входная строка будет состоять только из строчных букв и/или пробелов.
 */
const str1 = 'asgeioooy'
function getCount(str) {
    const chars = str.split('');
    
    // Инициализируем счетчик гласных
    let vowelCount = 0;

    // Перебираем каждый символ строки
    chars.forEach(char => {
        // Проверяем, является ли символ гласной буквой
        if ('aeioy'.includes(char)) {
            // Если да, увеличиваем счетчик
            vowelCount++;
        }
    });

    // Возвращаем общее количество гласных
    return vowelCount;
  }

//   function getCount(str) {
//     return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
//    }

  console.log(getCount(str1))