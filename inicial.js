/**
 Напишите функцию для преобразования имени в инициалы. Это ката строго состоит из двух слов с одним пробелом между ними.

На выходе должны быть две заглавные буквы с разделяющей их точкой.

Это должно выглядеть так:

Сэм Харрис => S.H

патрик Фини => П.Ф
 */

function abbrevName(name){

    var nameArray = name.split(" ");
    return (nameArray[0][0] + "." + nameArray[1][0]).toUpperCase();
  }



function abbrevName(name){

    return name.split(' ').map(i => i[0].toUpperCase()).join('.')

}



const abbrevName = name => name.match(/\b\w/g).join('.').toUpperCase()



const abbrevName = (name) => {
    return name.split(" ").map(name => name[0].toUpperCase()).join(".");
  };