// Дана строка 'я учу javascript!'. Вырежите из нее 
// слово 'учу' и слово 'javascript' тремя разными 
// способами (через substr, substring, slice).

const str = 'я учу javascript!';
const str2 = str.substring(2, str.length - 12);
console.log(str2);


const str4 = str.slice(6, -1);
console.log(str4);


const str6 = str.substr(2, str.length - 14);
console.log(str6);