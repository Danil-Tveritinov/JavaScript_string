// Дана строка 'aaa@bbb@ccc'. Замените все @ на '!' 
// с помощью глобального поиска и замены.


let re = /@/gi;
let str = 'aaa@bbb@ccc'
let newstr = str.replace(re, '!');
console.log(newstr);