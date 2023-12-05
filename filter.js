/**
 В этом ката вы создадите функцию, которая принимает список неотрицательных целых чисел и строк и возвращает новый список с отфильтрованными строками.

Пример
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
список фильтров([1,2,'aasf','1','123',123]) == [1,2,123]  
*/
const arr1 = [1, 2, "aasf", "1", "123", 123];
function filter_list(array) {
  return array.filter((e) => typeof e === "number" && e >= 0);
  // Return a new array with the strings filtered out
}
// function filter_list(l) {
//   return l.filter(e => Number.isInteger(e));
// }

// const filter_list = l => l.filter(c => typeof c === 'number');

console.log(filter_list(arr1));
