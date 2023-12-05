/**
 * Создайте функцию, которая отвечает на вопрос "Вы играете на банджо?".
Если ваше имя начинается с буквы "R" или строчной "r", вы играете на банджо!

Функция принимает имя в качестве единственного аргумента и возвращает одну из следующих строк:

имя + "играет на банджо"
имя + "не играет на банджо"
 */

// function areYouPlayingBanjo(name) {
//     return name + (name[0].toLowerCase() == 'r' ? ' plays' : ' does not play') + " banjo";
//   }


// function areYouPlayingBanjo(name) {
//   if (name.charAt(0).toLowerCase() === "r") {
//     return `${name} plays banjo`;
//   } else {
//     return `${name} does not play banjo`;
//   }
// }
// console.log(areYouPlayingBanjo("Roma"));
// console.log(areYouPlayingBanjo("Olya"));


// function checkScope() {
//     let i = 'function scope';
//     if (true) {
//       i = 'block scope';
//       console.log('Block scope i is: ', i);
//     }
//     console.log('Function scope i is: ', i);
//     return i;
//   }
//   console.log(checkScope())

const s = [5, 7, 2];
function editInPlace() {
  // Only change code below this line
 return s.splice(0, s.length, 2, 5, 7)
  // Using s = [2, 5, 7] would be invalid

  // Only change code above this line
}
console.log(editInPlace());