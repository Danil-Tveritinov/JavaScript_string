// Преобразуйте строку 'var_test_text' в 'varTestText'. 
// Скрипт, конечно же, должен работать с любыми аналогичными строками.

let str = 'var_test_text'
let str2 = 'dddd_TTT'

let glob = /_/gi;
const result = str.replace(glob, '');
const result2 = str2.replace(glob, '');


console.log(result);
console.log(result2);