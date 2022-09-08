// Дана строка 'aaa bbb ccc'. Вырежите из нее слово 'bbb' 
// тремя разными способами (через substr, substring, slice).


const str = 'aaa bbb ccc';
const str1 = str.substring(4, str.length - 4);
console.log(str1);


const str2 = str.slice(4, -4);
console.log(str2);


const str3 = str.substr(4, str.length - 7);
console.log(str3);