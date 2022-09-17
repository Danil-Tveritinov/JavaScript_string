// Вас просят возвести в квадрат каждую цифру числа и 
// соединить их. Например, если мы пропустим через 
// функцию 9119, получится 811181.
// Примечание. 
// Функция принимает целое число и возвращает целое число.

const arr = [9119]

// function squareDigits(num){
//     let count = num.toString();
//     let res = [];
 
//     for ( let i=0; i<count.length; i++) {
//         res.push(parseInt(count[i]));
//         res[i] = res[i] * res[i];
//     }
//     return res;
// }
// console.log(squareDigits(arr));

const squareDigits = num => String(num).split``.map(e => e*e);
console.log(squareDigits(arr)); 