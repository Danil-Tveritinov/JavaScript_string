// Дана строка 'Я-учу-javascript!'. 
// Замените все дефисы на '!' с помощью глобального поиска и замены.

let glob = /-/gi;
let str = 'Я-учу-javascript!'
let newstr = str.replace(glob, '!');

console.log(newstr);

// _______________________


const str2 = 'Я-учу-javascript!';
const info = str2.split('-')

const finalDate = info.join("!")

console.log(finalDate);

// ___________________________

const str3 = 'Я-учу-javascript!';
const newstr3 = str3.replace(/-/g, '!');
console.log(newstr3);
