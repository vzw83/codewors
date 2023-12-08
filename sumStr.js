/**
 * Возьмем 2 строки s1 и s2, содержащие только буквы от a до z. Вернем новую отсортированную строку, максимально длинную, содержащую отдельные буквы - каждая из которых берется только один раз - из s1 или s2.

Примеры:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
самый длинный(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
самый длинный(a, a) -> "abcdefghijklmnopqrstuvwxyz"
 */
const longest = (s1, s2) => [...new Set(s1+s2)].sort().join('')


  function longest(s1, s2) {
    // your code
    s3 = s1 + s2;
    s4 = s3.split("");
    s4 = s4.sort().filter(function(element, index, array){
      return element !== array[index - 1];
    });
    return s4.join("");
  }