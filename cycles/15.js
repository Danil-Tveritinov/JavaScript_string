// Составьте программу, которая генерирует и выводит 
// на экран серию из 10 случайных двузначных положительных 
// чисел, а затем и их сумму.

let s;
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
for (i = 1; i <= 10; i++) {
a = math_random_int(10, 99);
window.alert(a);
s = s + a;
}
window.alert(String('сумма = ') + String(s));
