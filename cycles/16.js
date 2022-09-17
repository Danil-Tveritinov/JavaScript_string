// Составьте программу, которая генерирует и выводит 
// на экран серию из 8 случайных двузначных положительных 
// чисел и определяет сумму чётных значений в серии.

let s
let i;
let a;
function math_random_int(a, b) {
if (a > b) {
let c = a;
a = b;
b = c;
}
return Math.floor(Math.random() * (b - a + 1) + a);
}
s = 0;
for (i = 1; i <= 8; i++) {
a = math_random_int(10, 99);
window.alert(a);
if (a % 2 == 0) {
s = s + a;
}
}
window.alert(String('сумма чётных чисел = ') + String(s));